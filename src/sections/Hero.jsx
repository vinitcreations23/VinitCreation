import { useEffect, useRef } from 'react';

export default function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero Section">
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform" style={{ top: '-10%', height: '120%' }}>
        <img
          src="/images/hero-editorial.jpg"
          alt="Premium Uniforms by Vinit Creations"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Gold grain texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '200px'
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-5 animate-float" style={{ background: 'radial-gradient(circle, #D4A843, transparent)', animationDelay: '0s' }} />
      <div className="absolute bottom-1/3 left-1/5 w-40 h-40 rounded-full opacity-5 animate-float" style={{ background: 'radial-gradient(circle, #D4A843, transparent)', animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="animate-fade-up">
            <span className="section-label text-xs">
              Surat, Gujarat · Est. 2020
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-white mt-6 leading-[1.08] animate-fade-up delay-200">
            <span className="block text-5xl sm:text-6xl md:text-7xl font-bold">
              Dressed for
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl font-bold italic text-gold-gradient mt-1">
              Excellence.
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl font-bold mt-1">
              Built for India.
            </span>
          </h1>

          {/* Sub */}
          <p className="mt-6 text-base sm:text-lg text-white/65 font-body max-w-xl leading-relaxed animate-fade-up delay-300">
            Premium corporate, hospital, hotel & institutional uniforms — crafted with precision in Surat for India&apos;s most distinguished organisations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10 animate-fade-up delay-400">
            <button onClick={scrollToContact} className="btn-gold" id="hero-cta-quote">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.18 19.79 19.79 0 01.1 5.6 2 2 0 012.08 3.52h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 11.1a16 16 0 006 6l.72-.72a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Request a Quote
            </button>
            <button onClick={scrollToServices} className="btn-outline-gold" id="hero-cta-explore">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-12 animate-fade-up delay-500">
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a1 1 0 0 0 .55.89A4 4 0 0 0 13.45 19a1 1 0 0 0 .55-.89V14.66" /><path d="M18 9h-3v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9H4" /></svg>, label: '500+ Clients' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" /></svg>, label: 'Custom Tailoring' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-4 5-7 5" /><path d="M12 2v4" /><path d="m14 9 3-3 3 3" /><path d="M15 9 12 12" /><path d="M15 15H3a6 6 0 0 0 6 6c2 0 4-.8 5-3" /></svg>, label: 'Bulk Orders' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, label: 'Surat Based' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="text-lg">{badge.icon}</span>
                <span className="text-white/60 text-sm font-body font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase font-body">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* Side decoration */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 animate-fade-in delay-600">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="text-white/30 text-xs tracking-[0.25em] font-body" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          VINIT CREATIONS
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
