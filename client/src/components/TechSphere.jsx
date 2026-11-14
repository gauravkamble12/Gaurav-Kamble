import React, { useState, useEffect, useRef } from 'react';

const skillsList = [
  { name: 'Python', icon: 'fa-brands fa-python', color: '#38bdf8' },
  { name: 'Java', icon: 'fa-brands fa-java', color: '#f87171' },
  { name: 'React.js', icon: 'fa-brands fa-react', color: '#00f2fe' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#34d399' },
  { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: '#10b981' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#facc15' },
  { name: 'SQL', icon: 'fa-solid fa-database', color: '#60a5fa' },
  { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#fb923c' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#38bdf8' },
  { name: 'RAG & LLMs', icon: 'fa-solid fa-brain', color: '#c084fc' },
  { name: 'Generative AI', icon: 'fa-solid fa-wand-magic-sparkles', color: '#e879f9' },
  { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#4ade80' },
  { name: 'Socket.IO', icon: 'fa-solid fa-tower-broadcast', color: '#38bdf8' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-git-alt', color: '#f97316' },
  { name: 'Pandas & NumPy', icon: 'fa-solid fa-chart-simple', color: '#38bdf8' },
  { name: 'Scikit-Learn', icon: 'fa-solid fa-microchip', color: '#fbbf24' },
  { name: 'Power BI', icon: 'fa-solid fa-chart-column', color: '#f59e0b' },
  { name: 'Express.js', icon: 'fa-solid fa-server', color: '#94a3b8' },
  { name: 'Linux CLI', icon: 'fa-brands fa-linux', color: '#fbbf24' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38bdf8' }
];

function getInitialItems() {
  const total = skillsList.length;
  return skillsList.map((skill, i) => {
    const phi = Math.acos(-1 + (2 * i + 1) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;

    return {
      ...skill,
      baseX: Math.cos(theta) * Math.sin(phi),
      baseY: Math.sin(theta) * Math.sin(phi),
      baseZ: Math.cos(phi),
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
      alpha: 1,
      zIndex: 100
    };
  });
}

export default function TechSphere() {
  const containerRef = useRef(null);
  const [items, setItems] = useState(getInitialItems);
  const [isPaused, setIsPaused] = useState(false);

  const stateRef = useRef({
    angleX: 0.002,
    angleY: 0.003,
    mouseX: 0,
    mouseY: 0,
    isDragging: false,
    lastX: 0,
    lastY: 0,
    radius: 170
  });

  useEffect(() => {
    const updateRadius = () => {
      const width = containerRef.current?.offsetWidth || window.innerWidth;
      stateRef.current.radius = width < 640 ? 120 : width < 1024 ? 150 : 180;
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Animation loop
  useEffect(() => {
    let animId;

    const animate = () => {
      const state = stateRef.current;
      const radius = state.radius;

      // Auto-rotation when not dragging
      if (!state.isDragging && !isPaused) {
        state.angleX = state.mouseY * 0.00008 + 0.002;
        state.angleY = state.mouseX * 0.00008 + 0.003;
      }

      setItems((prevItems) => {
        if (!prevItems.length) return prevItems;

        const sinX = Math.sin(state.angleX);
        const cosX = Math.cos(state.angleX);
        const sinY = Math.sin(state.angleY);
        const cosY = Math.cos(state.angleY);

        return prevItems.map((item) => {
          // Rotate around X axis
          const y1 = item.baseY * cosX - item.baseZ * sinX;
          const z1 = item.baseZ * cosX + item.baseY * sinX;

          // Rotate around Y axis
          const x2 = item.baseX * cosY - z1 * sinY;
          const z2 = z1 * cosY + item.baseX * sinY;

          // Update base coords for next frame
          item.baseX = x2;
          item.baseY = y1;
          item.baseZ = z2;

          // Project to 3D sphere with perspective
          const scale = Math.max(0.4, (z2 + 1.6) / 2.6);
          const alpha = Math.max(0.25, (z2 + 1) / 2);

          return {
            ...item,
            x: x2 * radius,
            y: y1 * radius,
            z: z2 * radius,
            scale,
            alpha,
            zIndex: Math.round((z2 + 1) * 100)
          };
        });
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Mouse & Touch interactions
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    if (stateRef.current.isDragging) {
      const dx = e.clientX - stateRef.current.lastX;
      const dy = e.clientY - stateRef.current.lastY;
      stateRef.current.angleY = dx * 0.005;
      stateRef.current.angleX = -dy * 0.005;
      stateRef.current.lastX = e.clientX;
      stateRef.current.lastY = e.clientY;
    } else {
      stateRef.current.mouseX = x;
      stateRef.current.mouseY = y;
    }
  };

  const handleMouseDown = (e) => {
    stateRef.current.isDragging = true;
    stateRef.current.lastX = e.clientX;
    stateRef.current.lastY = e.clientY;
  };

  const handleMouseUp = () => {
    stateRef.current.isDragging = false;
  };

  return (
    <div className="relative w-full py-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute w-60 h-60 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"></div>

      {/* 3D Sphere Interactive Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative w-full max-w-lg h-[380px] sm:h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      >
        {items.map((skill) => (
          <div
            key={skill.name}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              position: 'absolute',
              transform: `translate3d(${skill.x}px, ${skill.y}px, 0) scale(${skill.scale})`,
              opacity: skill.alpha,
              zIndex: skill.zIndex,
              transition: isPaused ? 'transform 0.2s ease-out' : 'none'
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-slate-700/80 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:scale-125 transition-all duration-200 cursor-pointer"
          >
            <i className={`${skill.icon} text-sm`} style={{ color: skill.color }}></i>
            <span className="text-xs font-mono font-semibold text-slate-200 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <p className="text-[11px] font-mono text-slate-500 mt-2 flex items-center gap-1.5">
        <i className="fa-solid fa-arrows-spin text-cyan-400"></i>
        <span>Drag or hover over the 3D sphere to rotate skills</span>
      </p>
    </div>
  );
}
