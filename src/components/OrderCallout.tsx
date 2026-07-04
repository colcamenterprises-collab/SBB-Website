import { ArrowDownRight, Instagram, Phone } from 'lucide-react';

const orderTicker = ['BURGER', 'SANDWICH', 'FRIES', 'CHICKEN', 'SMASH', 'SAUCE', 'COMBO'];

export default function OrderCallout() {
  return (
    <section className="order-callout">
      <div className="tilted-ticker">
        {orderTicker.map((item) => (
          <span key={item}>
            <i />
            {item}
          </span>
        ))}
      </div>

      <div className="order-heading">
        <svg viewBox="0 0 120 70" aria-hidden="true">
          <path d="M16 44c10-22 30-29 52-16 13-23 43-14 38 14" />
          <path d="M20 58c18-6 38-6 58 0" />
        </svg>
        <p>JOIN THE FLAVOR REVOLUTION!</p>
        <h2>FUEL UP WITH SBB!</h2>
      </div>

      <div className="red-building">
        <div className="building-top" />
        <div className="building-side" />
        <div className="building-front">
          <div className="building-copy">
            <span>Smash</span>
            <span>Bros</span>
            <span>Call</span>
          </div>

          <div className="side-poster">
            <strong>25%</strong>
            <em>Discount</em>
            <span>ORDER</span>
            <b>NOW</b>
            <small>APP STORE</small>
            <small>GOOGLE PLAY</small>
          </div>

          <svg className="order-arrow arrow-red" viewBox="0 0 180 160" aria-hidden="true">
            <path d="M34 34c72-28 104 6 93 49-7 30-37 44-72 41" />
            <path d="M58 105l-28 23 38 9" />
          </svg>
          <svg className="order-arrow arrow-white" viewBox="0 0 190 150" aria-hidden="true">
            <path d="M162 34c-54 12-84 42-92 82" />
            <path d="M57 103l9 35 28-21" />
          </svg>

          <div className="call-sign">
            <Phone size={22} />
            SBB CALL
          </div>
        </div>
      </div>

      <div className="black-scallop">
        <div className="order-footer-grid">
          <div>
            <h3>SBB</h3>
            <a>Menu</a>
            <a>Smash Deals</a>
            <a>Rawai Map</a>
          </div>
          <div>
            <h3>About</h3>
            <a>Crispy Edges</a>
            <a>Bold Sauces</a>
            <a>Fresh Fries</a>
          </div>
          <div id="location">
            <h3>Contact</h3>
            <a>Rawai, Phuket</a>
            <a>Open Daily</a>
            <a className="social">
              <Instagram size={16} />
              @smashbrothersburgers
            </a>
          </div>
        </div>

        <div className="huge-wordmark">
          <span>SMASH</span>
          <i className="doodle burger-doodle" />
          <i className="doodle fries-doodle" />
          <i className="doodle chicken-doodle" />
          <i className="doodle sauce-doodle" />
          <ArrowDownRight className="wordmark-arrow" size={44} />
        </div>
      </div>
    </section>
  );
}
