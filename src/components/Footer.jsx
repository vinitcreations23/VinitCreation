export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-deep border-t border-[rgba(201,168,76,0.1)]" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.png"
                alt="Vinit Creations Logo"
                className="h-12 w-12 object-contain"
                style={{ filter: "drop-shadow(0 0 8px rgba(201,168,76,0.3))" }}
              />
              <div>
                <div className="font-display text-white font-semibold text-base">Vinit Creations</div>
                <div className="text-gold text-xs tracking-[0.2em] uppercase">Premium Uniforms</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Surat&apos;s trusted uniform manufacturer, crafting professional identity for corporates, hospitals, hotels, and institutions since 2020.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/vinit_with_creations/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919823498295"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.508 5.858L0 24l6.33-1.487A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.849 0-3.585-.497-5.086-1.368l-.361-.213-3.757.882.881-3.646-.235-.374A9.949 9.949 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm mb-5 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Services", id: "services" },
                { label: "Gallery", id: "gallery" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/45 text-sm hover:text-gold transition-colors duration-200 text-left font-body"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm mb-5 uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {[
                "Corporate Uniforms",
                "Hospital & Healthcare",
                "Hotel & Hospitality",
                "School & Institution",
                "Industrial & Security",
                "Sports & Team Kits",
              ].map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-white/45 text-sm hover:text-gold transition-colors duration-200 text-left font-body"
                  >
                    → {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm mb-5 uppercase tracking-widest">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+919823498295" className="flex items-start gap-3 group">
                <span className="text-gold text-lg flex-shrink-0 mt-0.5">📞</span>
                <div>
                  <div className="text-white/45 text-xs uppercase tracking-widest">Call / WhatsApp</div>
                  <div className="text-white/80 text-sm group-hover:text-gold transition-colors">+91 98234 98295</div>
                </div>
              </a>
              <a href="mailto:vinitcreations23@gmail.com" className="flex items-start gap-3 group">
                <span className="text-gold text-lg flex-shrink-0 mt-0.5">✉️</span>
                <div>
                  <div className="text-white/45 text-xs uppercase tracking-widest">Email</div>
                  <div className="text-white/80 text-sm group-hover:text-gold transition-colors break-all">vinitcreations23@gmail.com</div>
                </div>
              </a>
              <a href="https://maps.app.goo.gl/oAbPq8a9RdVdPtJc9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <span className="text-gold text-lg flex-shrink-0 mt-0.5">📍</span>
                <div>
                  <div className="text-white/45 text-xs uppercase tracking-widest">Location</div>
                  <div className="text-white/80 text-sm group-hover:text-gold transition-colors">Udhana, Surat, Gujarat</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(201,168,76,0.08)] py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Vinit Creations, Surat. All rights reserved. | GST Registered | Made in India 🇮🇳
            </p>
            <div className="flex gap-4 text-white/30 text-xs">
              <span>Uniform Manufacturers in Surat</span>
              <span>·</span>
              <span>Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
