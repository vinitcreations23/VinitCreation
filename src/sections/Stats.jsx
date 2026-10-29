import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, suffix = '', label, icon, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-4xl mb-3">{icon}</div>
      <div className="stat-number">{count}{suffix}</div>
      <div className="gold-divider my-3" />
      <p className="text-white/60 text-sm font-body tracking-wide uppercase font-medium">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-navy-deep py-16 border-y border-[rgba(201,168,76,0.12)]" aria-label="Key Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-[rgba(201,168,76,0.1)]">
          <StatItem value={500} suffix="+" label="Happy Clients" icon="🏆" delay={0} />
          <StatItem value={50000} suffix="+" label="Uniforms Delivered" icon="✂️" delay={150} />
          <StatItem value={6} suffix="+" label="Years Experience" icon="📅" delay={300} />
          <StatItem value={15} suffix="+" label="Uniform Categories" icon="🎽" delay={450} />
        </div>
      </div>
    </section>
  );
}
