const STEPS = [
  {
    num: "01",
    title: "Consultation",
    desc: "Share your uniform requirements, quantity, fabric preferences and brand guidelines with our team.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
  {
    num: "02",
    title: "Design & Sampling",
    desc: "Our designers create samples aligned with your brand. Approve the look before bulk production begins.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
  },
  {
    num: "03",
    title: "Production",
    desc: "Precision cutting, stitching and quality-checking at our Surat facility with skilled craftspeople.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 20V10" /><path d="M14 20v-8" /><path d="M10 20v-5" /><path d="M6 20v-3" /><path d="M14 20h4" /><path d="M18 18h2" /><path d="M10 18h4" /><path d="M6 18h4" /><path d="M2 20h20" /><path d="M4 4h16" /><path d="M6 4v16" /><path d="M10 4v16" /><path d="M14 4v16" /><path d="M18 4v16" /></svg>,
  },
  {
    num: "04",
    title: "Quality Check",
    desc: "Every batch undergoes rigorous inspection for stitching, fit, colour consistency, and finish.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>,
  },
  {
    num: "05",
    title: "Delivery",
    desc: "On-time delivery to your location across Gujarat and pan-India with careful packaging.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14a1 1 0 0 1-.74-1.66l3.6-2.8a1 1 0 0 1 1.16 0l3.6 2.8a1 1 0 0 1-.74 1.66H20a1 1 0 0 1-.77 1.61L15.23 18" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></svg>,
  },
];

export default function Process() {
  return (
    <section className="section-py bg-forest" aria-label="Our Uniform Manufacturing Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">How It Works</span>
          <h2 className="font-display text-white text-4xl sm:text-5xl font-bold mt-5">
            From Concept to
            <span className="italic text-gold-gradient"> Delivery</span>
          </h2>
          <div className="gold-divider my-6" />
          <p className="text-white/50 max-w-xl mx-auto">A seamless, transparent process designed for bulk orders and institutional procurement.</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="relative reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Connector line on desktop */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+36px)] w-[calc(100%-72px)] h-px bg-gradient-to-r from-[rgba(212,168,67,0.4)] to-transparent z-0" />
              )}

              <div className="forest-card p-6 text-center relative z-10 h-full transition-all duration-300 hover:border-[rgba(212,168,67,0.4)] hover:-translate-y-1">
                {/* Number badge */}
                <div className="relative inline-flex mb-4">
                  <div className="w-16 h-16 rounded-full border border-[rgba(212,168,67,0.3)] flex items-center justify-center text-3xl">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold flex items-center justify-center text-forest-deep text-xs font-bold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
