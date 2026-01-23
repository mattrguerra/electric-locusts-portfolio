'use client';

import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Blob class for organic shapes
    class Blob {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      color: string;
      speed: number;
      amplitude: number;
      phase: number;
      pulseSpeed: number;
      pulseAmount: number;

      constructor(
        x: number,
        y: number,
        radius: number,
        color: string,
        speed: number,
        amplitude: number
      ) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.amplitude = amplitude;
        this.phase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.5 + Math.random() * 0.5;
        this.pulseAmount = 0.15 + Math.random() * 0.1;
      }

      update(time: number) {
        // Breathing movement
        this.x = this.baseX + Math.sin(time * this.speed + this.phase) * this.amplitude;
        this.y = this.baseY + Math.cos(time * this.speed * 0.7 + this.phase) * this.amplitude * 0.6;
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        const pulse = 1 + Math.sin(time * this.pulseSpeed) * this.pulseAmount;
        const currentRadius = this.radius * pulse;

        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          currentRadius
        );

        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.4, this.color.replace('0.4', '0.2'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create blobs with dark, moody colors
    const createBlobs = () => {
      const w = canvas.width;
      const h = canvas.height;

      return [
        // Deeper, more intense purples
        new Blob(w * 0.2, h * 0.3, w * 0.45, 'rgba(50, 15, 65, 0.35)', 0.3, w * 0.08),
        new Blob(w * 0.8, h * 0.2, w * 0.4, 'rgba(65, 20, 80, 0.3)', 0.25, w * 0.1),

        // Darker teals/cyans with more weight
        new Blob(w * 0.7, h * 0.7, w * 0.5, 'rgba(10, 35, 55, 0.35)', 0.35, w * 0.07),
        new Blob(w * 0.15, h * 0.8, w * 0.35, 'rgba(15, 45, 65, 0.3)', 0.28, w * 0.09),

        // Richer magentas with emotional depth
        new Blob(w * 0.5, h * 0.5, w * 0.55, 'rgba(60, 10, 45, 0.28)', 0.2, w * 0.12),
        new Blob(w * 0.85, h * 0.5, w * 0.35, 'rgba(75, 15, 50, 0.3)', 0.32, w * 0.06),

        // Subtle accent layers
        new Blob(w * 0.3, h * 0.6, w * 0.3, 'rgba(85, 35, 95, 0.22)', 0.4, w * 0.05),
        new Blob(w * 0.6, h * 0.3, w * 0.32, 'rgba(20, 55, 75, 0.22)', 0.38, w * 0.07),

        // Atmospheric shadow layers
        new Blob(w * 0.4, h * 0.8, w * 0.4, 'rgba(15, 5, 25, 0.35)', 0.22, w * 0.08),
        new Blob(w * 0.9, h * 0.9, w * 0.45, 'rgba(10, 10, 20, 0.3)', 0.18, w * 0.1),
      ];
    };

    let blobs = createBlobs();

    const handleResize = () => {
      resize();
      blobs = createBlobs();
    };

    window.removeEventListener('resize', resize);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      time += 0.008;

      // Darker, heavier gradient base
      const baseGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      baseGradient.addColorStop(0, '#050508');
      baseGradient.addColorStop(0.5, '#0a070d');
      baseGradient.addColorStop(1, '#060509');
      
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach((blob) => {
        blob.update(time);
        blob.draw(ctx, time);
      });

      // Add subtle noise/grain overlay
      ctx.fillStyle = 'rgba(255, 255, 255, 0.008)';
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillRect(x, y, 1, 1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        filter: 'blur(80px) saturate(1.3)',
        transform: 'scale(1.1)',
        opacity: 0.85,
      }}
    />
  );
}
