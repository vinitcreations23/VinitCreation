const STEPS = [
  {
    num: "01",
    title: "Consultation",
    desc: "Share your uniform requirements, quantity, fabric preferences and brand guidelines with our team.",
    icon: "💬",
  },
  {
    num: "02",
    title: "Design & Sampling",
    desc: "Our designers create samples aligned with your brand. Approve the look before bulk production begins.",
    icon: "✏️",
  },
  {
    num: "03",
    title: "Production",
    desc: "Precision cutting, stitching and quality-checking at our Surat facility with skilled craftspeople.",
    icon: "🏭",
  },
  {
    num: "04",
    title: "Quality Check",
    desc: "Every batch undergoes rigorous inspection for stitching, fit, colour consistency, and finish.",
    icon: "✅",
  },
  {
    num: "05",
    title: "Delivery",
    desc: "On-time delivery to your location across Gujarat and pan-India with careful packaging.",
    icon: "🚚",
  },
];

export default function Process() {
  return (
    <section className="section-py bg-navy" aria-label="Our Uniform Manufacturing Process">
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
                <div className="hidden lg:block absolute top-10 left-[calc(50%+36px)] w-[calc(100%-72px)] h-px bg-gradient-to-r from-[rgba(201,168,76,0.4)] to-transparent z-0" />
              )}

              <div className="navy-card p-6 text-center relative z-10 h-full transition-all duration-300 hover:border-[rgba(201,168,76,0.4)] hover:-translate-y-1">
                {/* Number badge */}
                <div className="relative inline-flex mb-4">
                  <div className="w-16 h-16 rounded-full border border-[rgba(201,168,76,0.3)] flex items-center justify-center text-3xl">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold flex items-center justify-center text-navy text-xs font-bold">
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
