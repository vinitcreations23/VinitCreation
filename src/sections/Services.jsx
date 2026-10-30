const SERVICES = [
  {
    id: "corporate",
    title: "Corporate Uniforms",
    desc: "Professional, brand-aligned uniforms for offices, banks, IT companies, and corporate teams that command authority and trust.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /><path d="M3 9h18" /><path d="M9 3v18" /></svg>,
    image: "/images/image-1.png",
    features: ["Custom Logo Embroidery", "Premium Fabrics", "Bulk Discounts", "Pan-India Delivery"],
    color: "#1C2D54",
  },
  {
    id: "hospital",
    title: "Hospital & Healthcare",
    desc: "Hygienic, comfortable scrubs, lab coats, and OT gowns for hospitals, clinics, and diagnostic centres across Gujarat.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2v4" /><path d="M10 18h4" /><path d="M12 22v-4" /><path d="M18 12h-4" /><path d="M6 12h4" /><path d="M4 12a8 8 0 0 1 16 0" /><path d="M12 4a8 8 0 0 1 0 16" /></svg>,
    image: "/images/image-4.png",
    features: ["Anti-microbial Fabric", "Colour-coded Roles", "Easy Care", "Pocket Design"],
    color: "#0D3349",
  },
  {
    id: "hotel",
    title: "Hotel & Hospitality",
    desc: "Elegant uniforms for hotel staff, restaurants, resorts, and event management teams that reflect luxury and service excellence.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /><path d="M8 22H4a2 2 0 0 1-2-2v-5" /><path d="M16 22h4a2 2 0 0 0 2-2v-5" /></svg>,
    image: "/images/image-5.png",
    features: ["Chef Coats & Aprons", "Front Desk Attire", "Housekeeping", "F&B Staff"],
    color: "#2D1B00",
  },
  {
    id: "school",
    title: "School & Institution",
    desc: "Durable, smart school uniforms and college apparel with school logos and colour schemes for educational institutions.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a1 1 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>,
    image: "/images/image-2.png",
    features: ["Logo Badges", "Durable Stitching", "Seasonal Sets", "Sportswear"],
    color: "#1A0D3E",
  },
  {
    id: "industrial",
    title: "Industrial & Security",
    desc: "Safety-compliant workwear for factories, warehouses, security guards, and industrial sites — built to endure demanding environments.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 20V10" /><path d="M14 20v-8" /><path d="M10 20v-5" /><path d="M6 20v-3" /><path d="M14 20h4" /><path d="M18 18h2" /><path d="M10 18h4" /><path d="M6 18h4" /><path d="M2 20h20" /><path d="M4 4h16" /><path d="M6 4v16" /><path d="M10 4v16" /><path d="M14 4v16" /><path d="M18 4v16" /></svg>,
    image: "/images/image-3.png",
    features: ["Hi-Vis Options", "Reflective Strips", "Heavy-duty Fabric", "Safety Standards"],
    color: "#1A1A00",
  },
  {
    id: "sports",
    title: "Sports & Teams",
    desc: "Custom team jerseys, tracksuits, and sportswear for cricket, football, kabaddi, and corporate sports events.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 1 7.3 16.5" /><path d="M12 2a10 10 0 0 0-7.3 16.5" /><path d="M8.5 8.5a1.5 1.5 0 1 1 3 0" /><path d="M15.5 8.5a1.5 1.5 0 1 1-3 0" /><path d="M15.5 15.5a1.5 1.5 0 1 1 3 0" /><path d="M8.5 15.5a1.5 1.5 0 1 1-3 0" /></svg>,
    image: "/images/image-6.jpg",
    features: ["Sublimation Print", "Quick-Dry Fabric", "Name & Number", "Team Sets"],
    color: "#001A3E",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-py bg-white" aria-label="Uniform Services by Vinit Creations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">What We Make</span>
          <h2 className="font-display text-forest text-4xl sm:text-5xl font-bold mt-5 leading-tight">
            Uniform Solutions for<br />
            <span className="italic text-gold">Every Sector</span>
          </h2>
          <div className="gold-divider my-6" />
          <p className="text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            From corporate boardrooms to hospital wards, we craft uniforms that define your brand and elevate your team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className="product-card h-80 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
              aria-label={service.title}
            >
              <img
                src={service.image}
                alt={`${service.title} by Vinit Creations`}
                loading="lazy"
              />
              <div className="product-card-overlay" />
              <div className="absolute top-4 left-4">
                <span className="category-badge">{service.icon} {service.title}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-white text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4 line-clamp-2">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 2).map(f => (
                    <span key={f} className="text-gold-light text-xs font-medium bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-charcoal/60 mb-6 font-body">Need a uniform category not listed above?</p>
          <a
            href="https://wa.me/919823498295?text=Hello%20Vinit%20Creations!%20I%20need%20custom%20uniforms%20for%20my%20organisation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy"
            id="services-cta-custom"
          >
            Discuss Custom Requirements
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
