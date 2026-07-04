import { MapPin } from 'lucide-react';

function Storefront() {
  return (
    <div className="storefront" aria-label="SBB burger shop illustration">
      <svg viewBox="0 0 520 280" role="img">
        <path className="doodle-line" d="M54 40c-18-20-38 12-18 24 14 8 33-6 24-22" />
        <path className="doodle-line" d="M452 52c28-20 52 20 18 34-23 9-44-15-24-33" />
        <path className="store-shadow" d="M84 215h348l38 34H46z" />
        <path className="store-body" d="M98 92h324v128H98z" />
        <path className="store-roof" d="M76 91h368l-36-44H112z" />
        <path className="store-sign" d="M206 17h108c18 0 32 14 32 32v4H174v-4c0-18 14-32 32-32z" />
        <text x="260" y="48" textAnchor="middle" className="store-sign-text">
          SBB
        </text>
        <path className="awning awning-a" d="M98 92h54v48H98z" />
        <path className="awning awning-b" d="M152 92h54v48h-54z" />
        <path className="awning awning-a" d="M206 92h54v48h-54z" />
        <path className="awning awning-b" d="M260 92h54v48h-54z" />
        <path className="awning awning-a" d="M314 92h54v48h-54z" />
        <path className="awning awning-b" d="M368 92h54v48h-54z" />
        <path className="outline" d="M98 92h324v128H98zM76 91h368l-36-44H112z" />
        <path className="outline" d="M98 140c22 17 36 17 54 0 18 17 36 17 54 0 18 17 36 17 54 0 18 17 36 17 54 0 18 17 36 17 54 0 18 17 36 17 54 0" />
        <path className="door" d="M237 160h48v60h-48z" />
        <path className="window" d="M128 158h70v38h-70zM322 158h70v38h-70z" />
        <path className="outline" d="M237 160h48v60h-48zM128 158h70v38h-70zM322 158h70v38h-70z" />
        <path className="doodle-line" d="M28 126c21-6 34-6 52 2M438 128c24-8 40-5 58 8M82 28c16-10 33-11 48-2" />
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
        <div className="mini-logo">SBB</div>
        <a className="menu-pill" href="#menu">
          MENU
        </a>
      </nav>

      <div className="hero-copy">
        <p>THE</p>
        <h1>SMASH</h1>
        <span>THE AMAZING BURGERS YOU WERE WAITING FOR</span>
      </div>

      <Storefront />
      <div className="cream-drip" />
    </section>
  );
}
