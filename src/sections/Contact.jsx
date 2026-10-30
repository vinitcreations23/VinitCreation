import { useState } from 'react';

const CONTACT_INFO = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    label: "Our Workshop",
    value: "M5 Mahavir Market, Near Udhana Railway Station, Udhyog Nagar, Surat, Gujarat 394210",
    link: null,
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.18 19.79 19.79 0 0 1 .1 5.6 2 2 0 0 1 2.08 3.52h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 11.1a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
    label: "Phone / WhatsApp",
    value: "+91 98234 98295",
    link: "tel:+919823498295",
    linkText: "Call Now",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
    label: "Email",
    value: "vinitcreations23@gmail.com",
    link: "mailto:vinitcreations23@gmail.com",
    linkText: "Send Email",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    label: "Business Hours",
    value: "Monday – Saturday: 9:30 AM – 8:00 PM",
    link: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', category: '', quantity: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*New Enquiry from VinitCreations Website*

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}
Category: ${form.category}
Quantity: ${form.quantity}
Message: ${form.message}`
    );
    window.open(`https://wa.me/919823498295?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-py bg-forest-deep" aria-label="Contact Vinit Creations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Get in Touch</span>
          <h2 className="font-display text-white text-4xl sm:text-5xl font-bold mt-5">
            Start Your Uniform
            <span className="italic text-gold-gradient"> Journey</span>
          </h2>
          <div className="gold-divider my-6" />
          <p className="text-white/50 max-w-xl mx-auto">
            Share your requirements and get a personalised quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info + Map */}
          <div className="reveal-left space-y-6">
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="glass-panel p-5 flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">{info.icon}</div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-medium mb-1">{info.label}</div>
                  <div className="text-white/85 text-sm leading-relaxed mb-2">{info.value}</div>
                  {info.link && (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gold text-xs font-semibold tracking-wide uppercase hover:text-gold-light transition-colors inline-flex items-center gap-1"
                    >
                      {info.linkText} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="map-container h-56 sm:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.183!2d72.8427!3d21.1611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e9c6cb2a999%3A0x0!2zVmluaXQgQ3JlYXRpb25z!5e0!3m2!1sen!2sin!4v1698600000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vinit Creations Location Map - Udhana, Surat"
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/vinit_with_creations/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm font-medium"
                aria-label="Follow Vinit Creations on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @vinit_with_creations
              </a>
              <a
                href="https://wa.me/919823498295"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-green-400 transition-colors text-sm font-medium"
                aria-label="WhatsApp Vinit Creations"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.508 5.858L0 24l6.33-1.487A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.849 0-3.585-.497-5.086-1.368l-.361-.213-3.757.882.881-3.646-.235-.374A9.949 9.949 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-right">
            <div className="glass-panel p-6 sm:p-8">
              <h3 className="font-display text-white text-2xl font-semibold mb-2">Request a Quote</h3>
              <p className="text-white/50 text-sm mb-6">Fill the form below and we'll reach you within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-display text-gold text-xl font-semibold mb-2">WhatsApp Opened!</h4>
                  <p className="text-white/60 text-sm">Your enquiry has been sent via WhatsApp. We'll respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-widest block mb-1.5" htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="luxury-input-dark"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-widest block mb-1.5" htmlFor="contact-phone">Phone / WhatsApp *</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="luxury-input-dark"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-widest block mb-1.5" htmlFor="contact-company">Company / Organisation *</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      required
                      placeholder="Your company name"
                      className="luxury-input-dark"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-widest block mb-1.5" htmlFor="contact-category">Uniform Category *</label>
                      <select
                        id="contact-category"
                        name="category"
                        required
                        className="luxury-input-dark"
                        value={form.category}
                        onChange={handleChange}
                      >
                        <option value="">Select category</option>
                        <option>Corporate Uniforms</option>
                        <option>Hospital / Healthcare</option>
                        <option>Hotel / Hospitality</option>
                        <option>School / Institution</option>
                        <option>Industrial / Security</option>
                        <option>Sports / Team Kits</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-widest block mb-1.5" htmlFor="contact-quantity">Approx. Quantity</label>
                      <input
                        id="contact-quantity"
                        name="quantity"
                        type="text"
                        placeholder="e.g. 500 pieces"
                        className="luxury-input-dark"
                        value={form.quantity}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-widest block mb-1.5" htmlFor="contact-message">Additional Details</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Fabric preferences, colours, embroidery requirements, deadline..."
                      className="luxury-input-dark resize-none"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full justify-center" id="contact-submit-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.508 5.858L0 24l6.33-1.487A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.849 0-3.585-.497-5.086-1.368l-.361-.213-3.757.882.881-3.646-.235-.374A9.949 9.949 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                    </svg>
                    Send via WhatsApp
                  </button>

                  <p className="text-white/30 text-xs text-center">Your information is secure and will only be used to process your enquiry.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
