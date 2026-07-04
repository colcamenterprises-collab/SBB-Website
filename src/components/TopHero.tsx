import { MapPin } from 'lucide-react';

function Storefront() {
  return (
    <div className="storefront" aria-label="SBB metal shed burger shop illustration">
      <svg viewBox="0 0 560 300" role="img">
        <title>Smash Brothers Burgers yellow metal shed kiosk</title>
        <path className="doodle-line" d="M54 54c-18-20-38 12-18 24 14 8 33-6 24-22" />
        <path className="doodle-line" d="M486 54c28-20 52 20 18 34-23 9-44-15-24-33" />
        <path className="doodle-line" d="M82 34c16-10 33-11 48-2M472 132c24-8 40-5 58 8M28 146c21-6 34-6 52 2" />

        <g className="burger-character" transform="translate(364 18)">
          <path className="burger-bun" d="M18 42c5-23 64-24 72 0z" />
          <path className="burger-cheese" d="M18 45h72l-11 12-11-8-12 13-12-12-13 9z" />
          <path className="burger-patty" d="M19 57h70" />
          <path className="burger-face" d="M34 42h.1M70 42h.1M46 51c7 5 17 5 24 0" />
          <path className="burger-arm" d="M18 50c-11 2-17 7-20 16M90 50c12 2 18 7 22 16" />
        </g>

        <path className="store-shadow" d="M82 238h396l42 36H38z" />
        <path className="store-roof" d="M74 94h412l-42-42H118z" />
        <path className="store-body" d="M94 94h372v146H94z" />

        <g className="corrugation" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, index) => (
            <path key={index} d={`M${112 + index * 22} 103v128`} />
          ))}
        </g>

        <path className="awning awning-a" d="M94 96h62v48H94z" />
        <path className="awning awning-b" d="M156 96h62v48h-62z" />
        <path className="awning awning-a" d="M218 96h62v48h-62z" />
        <path className="awning awning-b" d="M280 96h62v48h-62z" />
        <path className="awning awning-a" d="M342 96h62v48h-62z" />
        <path className="awning awning-b" d="M404 96h62v48h-62z" />

        <path className="service-window" d="M124 154h312v58H124z" />
        <path className="counter" d="M124 200h312v18H124z" />
        <path className="interior-detail" d="M164 184h44M242 184h54M330 184h58M180 171c10-8 28-8 38 0M350 171c10-8 28-8 38 0" />

        <path className="outline" d="M94 94h372v146H94zM74 94h412l-42-42H118z" />
        <path className="outline" d="M94 144c25 17 42 17 62 0 20 17 42 17 62 0 20 17 42 17 62 0 20 17 42 17 62 0 20 17 42 17 62 0 20 17 42 17 62 0" />
        <path className="outline" d="M124 154h312v58H124zM124 200h312" />
      </svg>
      <a className="store-cta" href="#location">
        <MapPin size={16} />
        FIND LOCATION
      </a>
    </div>
  );
}

export default function TopHero() {
  return (
    <section className="top-hero">
      <nav className="mini-nav" aria-label="SBB quick navigation">
        <div className="mini-logo">SMASH BROTHERS BURGERS</div>
        <a className="menu-pill" href="#menu">
          MENU
        </a>
      </nav>

      <div className="hero-copy">
        <p>SMASH BROTHERS BURGERS</p>
        <h1>SBB</h1>
        <span>BOLD SMASHED BURGERS. MADE BROTHERLY.</span>
      </div>

      <Storefront />
      <div className="cream-drip" />
    </section>
  );
}
