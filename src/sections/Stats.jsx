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
    <section className="bg-forest-deep py-16 border-y border-[rgba(212,175,55,0.12)]" aria-label="Key Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-[rgba(212,175,55,0.1)]">
          <StatItem value={500} suffix="+" label="Happy Clients" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a1 1 0 0 0 .55.89A4 4 0 0 0 13.45 19a1 1 0 0 0 .55-.89V14.66" /><path d="M18 9h-3v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9H4" /></svg>} delay={0} />
          <StatItem value={50000} suffix="+" label="Uniforms Delivered" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" /></svg>} delay={150} />
          <StatItem value={6} suffix="+" label="Years Experience" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>} delay={300} />
          <StatItem value={15} suffix="+" label="Uniform Categories" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a2 2 0 0 0 .73 1.41l2.8 5.18a2 2 0 0 1-.59 3.59L4 20.48a2 2 0 0 0 1.66 2.01L9 23l7-3.49a2 2 0 0 1 1.32 0l4.34 2.49a2 2 0 0 0 1.66-2.01l-1.66-5.9a2 2 0 0 1-.59-3.59l2.8-5.18a2 2 0 0 0 .73-1.41l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg>} delay={450} />
        </div>
      </div>
    </section>
  );
}
