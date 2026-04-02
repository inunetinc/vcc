import { useRef, useEffect } from 'react';
import styles from './TrustNetwork.module.css';

export default function TrustNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];

    // Colors
    const primaryBlue = 'rgba(39, 83, 107, 0.4)'; // #27536b with opacity
    const accentGold = 'rgba(254, 154, 0, 0.8)';  // #fe9a00 with opacity
    const lineBlue = 'rgba(39, 83, 107,';         // Will append alpha

    const setSize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    
    setSize();
    window.addEventListener('resize', setSize);

    // Mouse Tracking
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle Class
    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      isGold: boolean;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.dx = (Math.random() - 0.5) * 0.8;
        this.dy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
        // 5% chance to be a gold 'verified' node
        this.isGold = Math.random() > 0.95;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isGold ? accentGold : primaryBlue;
        ctx.fill();
        
        // Add a subtle glow to gold nodes
        if (this.isGold) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = accentGold;
          ctx.fill();
          ctx.shadowBlur = 0; // Reset
        }
      }

      update() {
        // Wall collisions
        if (this.x + this.radius > canvas!.width || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > canvas!.height || this.y - this.radius < 0) this.dy = -this.dy;

        // Mouse interaction (repel slightly)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          this.x -= dx * 0.02;
          this.y -= dy * 0.02;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }
    }

    // Initialize Particles
    const init = () => {
      particlesArray = [];
      // Responsive particle count based on screen size
      const numberOfNodes = Math.min((canvas.width * canvas.height) / 8000, 150); 
      for (let i = 0; i < numberOfNodes; i++) {
        particlesArray.push(new Particle());
      }
    };
    init();

    // Line drawing logic between nearby nodes
    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Connect if close
          if (distance < 150) {
            opacityValue = 1 - (distance / 150);
            ctx.strokeStyle = `${lineBlue} ${opacityValue * 0.2})`; // Keep lines subtle
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
