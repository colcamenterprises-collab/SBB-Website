import { Drumstick, Flame, Sandwich } from 'lucide-react';
import { tickerItems } from '../data/siteData';

const icons = [Sandwich, Flame, Drumstick];

export default function FoodTicker() {
  return (
    <section className="bottom-ticker" aria-label="SBB food ticker">
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <span key={`${item}-${index}`}>
              <Icon size={22} />
              {item}
            </span>
          );
        })}
      </div>
    </section>
  );
}
