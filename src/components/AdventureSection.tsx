import { ArrowRight } from 'lucide-react';
import { images } from '../data/siteData';
import FoodImage from './FoodImage';

export default function AdventureSection() {
  return (
    <section className="adventure-section">
      <div className="adventure-banner">
        <div className="icon-pattern" />
        <h2>
          READY FOR A
          <span>FLAVOR</span>
          ADVENTURE
        </h2>
        <p>DIVE INTO BOLD BITES AND PLAYFUL FLAVORS CRAFTED JUST FOR YOU.</p>
        <a href="#menu" className="discover-button">
          DISCOVER NOW
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="collage-area">
        <div className="warped-text">NEW DROP NEW SAUCE NEW DROP NEW SAUCE</div>
        <div className="brand-blob" />
        <FoodImage src={images.lifestyle} alt="SBB fast food lifestyle collage" className="collage-main" />
        <FoodImage src={images.chickenBurger} alt="Chicken burger cutout" className="collage-top" />
        <FoodImage src={images.friedChicken} alt="Crispy fried chicken cutout" className="collage-bottom" />
        <FoodImage src={images.burgerMeal} alt="Burger meal cutout" className="collage-side" />
        <span className="collage-sticker">EXTRA SAUCE</span>
      </div>
    </section>
  );
}
