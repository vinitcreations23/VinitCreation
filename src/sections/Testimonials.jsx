const TESTIMONIALS = [
  {
    name: "Rajesh Mehta",
    role: "HR Director",
    company: "Reliance Industries Ltd.",
    text: "Vinit Creations delivered 2,000 corporate uniforms on time, with impeccable quality. Our employees absolutely love the fit and fabric. Highly recommend for bulk corporate orders.",
    rating: 5,
    city: "Surat",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Medical Superintendent",
    company: "Surat Civil Hospital",
    text: "The hospital scrubs and lab coats from Vinit Creations are exactly what we needed. Comfortable, durable, and the embroidery is precise. Purab Sir was very professional throughout.",
    rating: 5,
    city: "Surat",
  },
  {
    name: "Amit Patel",
    role: "General Manager - Operations",
    company: "Lords Plaza Hotel",
    text: "We revamped our entire hotel staff uniform with Vinit Creations. The quality and design exceeded our expectations. The entire process from sampling to delivery was seamless.",
    rating: 5,
    city: "Vadodara",
  },
  {
    name: "Sunita Desai",
    role: "Principal",
    company: "Navyug English School",
    text: "School uniforms delivered before the academic year, exactly as designed. The kids love them and parents are very happy with the quality and pricing. Great experience!",
    rating: 5,
    city: "Surat",
  },
  {
    name: "Ketan Shah",
    role: "Factory Manager",
    company: "Ashok Textiles Pvt. Ltd.",
    text: "Industrial workwear that truly meets safety standards. Reflective strips, reinforced stitching — everything was as specified. Will definitely reorder for our next batch.",
    rating: 5,
    city: "Surat",
  },
  {
    name: "Deepika Joshi",
    role: "Admin Head",
    company: "Suyash Healthcare",
    text: "Quick turnaround, premium quality, and excellent communication. Vinit Creations is our go-to uniform partner for all our healthcare facilities in South Gujarat.",
    rating: 5,
    city: "Navsari",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-py bg-white" aria-label="Client Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="font-display text-navy text-4xl sm:text-5xl font-bold mt-5">
            Trusted by India&apos;s Best
            <span className="italic text-gold"> Organisations</span>
          </h2>
          <div className="gold-divider my-6" />
          <p className="text-charcoal/60 max-w-lg mx-auto">Real words from real clients across Gujarat and beyond.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="stars mb-3 text-sm">{"★".repeat(t.rating)}</div>
              <p className="text-charcoal/75 leading-relaxed text-sm mb-5 mt-2">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(201,168,76,0.1)]">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-display font-bold text-base flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm font-body">{t.name}</div>
                  <div className="text-charcoal/50 text-xs">{t.role} · {t.company}</div>
                  <div className="text-gold text-xs mt-0.5">�� {t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center mt-14 reveal">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#FAF8F2] border border-[rgba(201,168,76,0.2)] rounded-xl">
            <span className="text-yellow-500 text-xl">⭐</span>
            <div className="text-left">
              <div className="text-navy font-bold font-body text-sm">4.9/5 Stars on Google</div>
              <div className="text-charcoal/60 text-xs">Based on 100+ verified reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
