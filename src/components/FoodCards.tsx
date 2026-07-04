import { foodCards } from '../data/siteData';
import FoodImage from './FoodImage';

export default function FoodCards() {
  return (
    <section className="food-cards-section" id="menu">
      <div className="marquee" aria-hidden="true">
        <span>CRAVE, THE SBB WAY. GET READY TO CRAVE, THE SBB WAY.</span>
        <span>CRAVE, THE SBB WAY. GET READY TO CRAVE, THE SBB WAY.</span>
      </div>

      <div className="food-card-row">
        {foodCards.map((card) => (
          <article key={card.label} className={`food-card ${card.type === 'text' ? `text-card ${card.tone}` : ''}`}>
            {card.type === 'image' ? (
              <>
                <FoodImage src={card.image} alt={card.label} />
                <strong>{card.label}</strong>
              </>
            ) : (
              <div>
                <h2>TURN UP THE FLAVOR. TURN UP THE FUN.</h2>
                <span>{card.label}</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
