const rows = [
  { text: 'SMASHBROS SMASHBROS', y: 20, rotate: -16, scale: 0.78 },
  { text: 'SMASHBROS SMASHBROS', y: 62, rotate: -9, scale: 0.95 },
  { text: 'SMASHBROS SMASHBROS', y: 106, rotate: -3, scale: 1.05 },
  { text: 'SMASHBROS SMASHBROS', y: 151, rotate: 3, scale: 1.1 },
  { text: 'SMASHBROS SMASHBROS', y: 196, rotate: 8, scale: 1.02 },
  { text: 'SMASHBROS SMASHBROS', y: 240, rotate: 14, scale: 0.88 },
  { text: 'SMASHBROS SMASHBROS', y: 282, rotate: 20, scale: 0.68 },
];

export default function FlavorCircle() {
  return (
    <section className="flavor-circle-section">
      <div className="flavor-circle" aria-label="Circular Smash Brothers flavor graphic">
        {rows.map((row) => (
          <div
            key={`${row.y}-${row.rotate}`}
            className="circle-row"
            style={{
              top: `${row.y}px`,
              transform: `translateX(-50%) rotate(${row.rotate}deg) scaleX(${row.scale})`,
            }}
          >
            {row.text}
          </div>
        ))}

        <svg className="chef-doodle" viewBox="0 0 180 180" aria-hidden="true">
          <path d="M54 64c-29-10-15-48 12-36 8-23 43-24 50 1 29-14 47 28 18 40" />
          <path d="M48 70c8 62 78 72 92 0" />
          <path d="M62 82c20 14 47 14 68 0" />
          <path d="M74 104c8 8 24 8 34 0" />
          <path d="M63 137c24 15 59 14 78-2" />
          <circle cx="72" cy="93" r="5" />
          <circle cx="118" cy="93" r="5" />
          <path d="M88 118c10 5 22 4 31-2" />
        </svg>

        <span className="circle-sticker sticker-one">BURGERS</span>
        <span className="circle-sticker sticker-two">FRIES</span>
        <span className="circle-sticker sticker-three">CHICKEN</span>
      </div>
    </section>
  );
}
