import { useEffect, useRef } from 'react';

const VALUES = [
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>, title: 'Precision Craftsmanship', desc: 'Every stitch is perfected with meticulous attention to fit, finish, and fabric quality.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>, title: 'Bulk Ready', desc: 'From 50 to 50,000 pieces — we scale effortlessly without compromising quality.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r="2.5" /><circle cx="18.5" cy="11.5" r="2.5" /><circle cx="8.5" cy="17.5" r="2.5" /><path d="M13.5 6.5a5 5 0 0 1 7.5 7.5" /><path d="M13.5 6.5a5 5 0 0 0-7.5 7.5" /></svg>, title: 'Custom Branding', desc: 'Logos, embroidery, screen printing — your brand identity woven into every uniform.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19.5 4.5 21 6m0 0-3.315 3.315A2 2 0 0 1 14.5 10.5H6a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2h4" /><path d="M22 18h-6a4 4 0 0 0-4 4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2" /></svg>, title: 'Trusted Partnerships', desc: 'Serving corporates, hospitals, hotels, and institutions across Gujarat and beyond.' },
];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("revealed"); });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function About() {
  useReveal();

  return (
    <section id="about" className="section-py bg-cream" aria-label="About Vinit Creations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images Column */}
          <div className="relative reveal-left">
            <div className="grid grid-cols-2 gap-4 h-[500px] sm:h-[580px]">
              <div className="gallery-img row-span-2">
                <img src="/images/craftsmanship.jpg" alt="Uniform craftsmanship at Vinit Creations Surat" className="rounded-2xl" />
              </div>
              <div className="gallery-img">
                <img src="/images/image-2.png" alt="Corporate uniform collection" className="rounded-2xl h-full" />
              </div>
              <div className="gallery-img">
                <img src="/images/image-3.png" alt="Hospital uniform range" className="rounded-2xl h-full" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="floating-badge bottom-6 right-0 sm:-right-4" style={{ animationDelay: '1s' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="inline-block mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              Surat's Most Trusted Uniform Brand
            </div>

            {/* Gold accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[rgba(212,168,67,0.4)] rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[rgba(212,168,67,0.4)] rounded-br-2xl" />
          </div>

          {/* Content Column */}
          <div className="reveal-right">
            <span className="section-label">Our Story</span>

            <h2 className="font-display text-forest text-4xl sm:text-5xl font-bold mt-5 leading-tight">
              Crafting Identity,<br/>
              <span className="italic text-gold">One Uniform at a Time</span>
            </h2>

            <div className="ornament-line my-6">
              <span /><div className="diamond" /><span />
            </div>

            <p className="text-charcoal/70 leading-relaxed mb-5">
              Founded by <strong className="text-forest font-semibold">Purab Patil</strong>, Vinit Creations was born from a belief that uniforms are more than just clothing — they are a statement of identity, professionalism, and pride.
            </p>

            <p className="text-charcoal/70 leading-relaxed mb-8">
              Nestled in the heart of Surat — India's textile capital — we combine the city's legendary fabric expertise with modern design sensibility to deliver uniforms that command respect and inspire confidence.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {VALUES.map((v, i) => (
                <div key={v.title} className="luxury-card p-5 reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <h3 className="font-display text-forest font-semibold text-base mb-1">{v.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/919823498295?text=Hello%20Vinit%20Creations!%20I%20would%20like%20to%20know%20more%20about%20your%20uniforms."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy"
                id="about-cta-whatsapp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.508 5.858L0 24l6.33-1.487A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.849 0-3.585-.497-5.086-1.368l-.361-.213-3.757.882.881-3.646-.235-.374A9.949 9.949 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
