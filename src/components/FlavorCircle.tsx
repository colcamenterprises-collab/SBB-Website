const ringText = 'SMASHBROSSMASHBROSSMASHBROS'.repeat(5);

const rings = [
  { id: 'ring-outer', radius: 190, rotate: -8, size: 27 },
  { id: 'ring-two', radius: 165, rotate: 12, size: 26 },
  { id: 'ring-three', radius: 140, rotate: -18, size: 25 },
  { id: 'ring-four', radius: 116, rotate: 9, size: 24 },
  { id: 'ring-five', radius: 92, rotate: -11, size: 23 },
  { id: 'ring-six', radius: 70, rotate: 16, size: 21 },
  { id: 'ring-seven', radius: 50, rotate: -5, size: 18 },
];

export default function FlavorCircle() {
  return (
    <section className="flavor-circle-section">
      <div className="flavor-circle" aria-label="Circular Smash Brothers flavor graphic">
        <svg className="typography-whirlpool" viewBox="0 0 430 430" aria-hidden="true">
          <defs>
            {rings.map((ring) => (
              <path
                key={ring.id}
                id={ring.id}
                d={`M ${215 - ring.radius}, 215 a ${ring.radius},${ring.radius} 0 1,1 ${ring.radius * 2},0 a ${ring.radius},${ring.radius} 0 1,1 -${ring.radius * 2},0`}
              />
            ))}
          </defs>
          {rings.map((ring) => (
            <text
              key={ring.id}
              className="circle-type-ring"
              style={{ fontSize: `${ring.size}px` }}
              transform={`rotate(${ring.rotate} 215 215)`}
            >
              <textPath href={`#${ring.id}`} startOffset="0%">
                {ringText}
              </textPath>
            </text>
          ))}
        </svg>

        <svg className="chef-doodle" viewBox="0 0 96 96" aria-hidden="true">
          <path d="M25 45c4-13 18-20 32-17 13 3 23 13 23 27 0 18-14 30-32 30S17 73 17 55c0-4 1-7 2-10" />
          <path d="M21 43c-8-5-4-18 6-15 2-10 18-12 22-3 9-9 25 2 17 13" />
          <path d="M24 50c12-7 35-7 49 0" />
          <path d="M31 66c8 7 25 8 35 0" />
          <path d="M45 55c3 4 3 7 0 10" />
          <path d="M33 56h.1" />
          <path d="M62 56h.1" />
          <path d="M12 35c6 0 10 2 13 7" />
          <path d="M80 36c5 1 8 4 10 9" />
        </svg>

        <span className="circle-sticker sticker-one">SAUCE</span>
        <span className="circle-sticker sticker-two">BURGERS</span>
        <span className="circle-sticker sticker-three">FRIES</span>
      </div>
    </section>
  );
}
