import React, { useEffect, useRef } from 'react';

export default function ParticlesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    // Dynamic particle count based on screen width
    const particleCount = Math.min(25, Math.floor(window.innerWidth / 50));
    
    // Mouse interaction tracking
    let mouse = { x: null, y: null, radius: 140 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.12; // Slow, extremely decent drift speed
        this.vy = (Math.random() - 0.5) * 0.12;
        this.radius = Math.random() * 2 + 1.2; // Beautiful micro-particle size range
        this.alpha = Math.random() * 0.25 + 0.15; // Clean, visible opacity range
        // Rich Purple (#7c3aed) and Rich Teal (#0d9488) to contrast against light backdrop
        this.color = Math.random() > 0.5 ? '124, 58, 237' : '13, 148, 136';
      }

      update() {
        // Slow drift
        this.x += this.vx;
        this.y += this.vy;

        // Gentle interactive mouse push effect (Antigravity-like physics)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Push particles away smoothly
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }

        // Bounce gently from screen boundaries
        if (this.x < 0 || this.x > window.innerWidth) this.vx = -this.vx;
        if (this.y < 0 || this.y > window.innerHeight) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connecting neural web lines
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Draw connections to other close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = (1 - dist / 130) * 0.08; // Clean subtle connection lines
            ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`; // Rich indigo connections
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Draw connection lines to mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const opacity = (1 - dist / mouse.radius) * 0.12; // Dynamic interactive cursor glow links
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`; // Rich purple interaction lines
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
}
