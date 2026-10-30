export default function Marquee() {
  const items = [
    '◆ Corporate Uniforms',
    '◆ Hospital Scrubs & Coats',
    '◆ Hotel Staff Uniforms',
    '◆ School & College Uniforms',
    '◆ Industrial Workwear',
    '◆ Security Guard Uniforms',
    '◆ Sportswear & Team Kits',
    '◆ Restaurant & Hospitality Uniforms',
    '◆ Custom Embroidery & Branding',
    '◆ Bulk Orders Welcome',
  ];

  return (
    <div className="bg-forest py-4 overflow-hidden border-y border-[rgba(212,175,55,0.15)]" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-gold-light text-sm font-body font-medium tracking-widest uppercase whitespace-nowrap mx-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
