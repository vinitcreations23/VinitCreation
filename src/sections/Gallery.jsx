const GALLERY = [
  { src: "/images/image-1.png", alt: "Premium corporate uniforms", span: "col-span-2 row-span-2" },
  { src: "/images/image-2.png", alt: "School uniform collection" },
  { src: "/images/image-6.jpg", alt: "Sportswear and team kits" },
  { src: "/images/image-3.png", alt: "Hospital uniforms and scrubs" },
  { src: "/images/image-4.png", alt: "Hotel hospitality uniforms" },
  { src: "/images/image-5.png", alt: "Industrial workwear" },
  { src: "/images/craftsmanship.jpg", alt: "Craftsmanship at Vinit Creations" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-py bg-cream" aria-label="Vinit Creations Uniform Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="font-display text-forest text-4xl sm:text-5xl font-bold mt-5">
            Our Work Speaks
            <span className="italic text-gold"> For Itself</span>
          </h2>
          <div className="gold-divider my-6" />
          <p className="text-charcoal/60 max-w-lg mx-auto">Every uniform tells a story of craftsmanship, attention to detail, and brand pride.</p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className={`gallery-img reveal ${item.span || ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="https://www.instagram.com/vinit_with_creations/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold border-forest text-forest hover:bg-forest hover:text-cream"
            id="gallery-instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
