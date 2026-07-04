import { Flame, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="final-footer">
      <div className="footer-topline">
        <span>SMASH BROTHERS BURGERS</span>
        <span>RAWAI, PHUKET</span>
      </div>
      <h2>BURGERS</h2>
      <div className="footer-bottom">
        <p>
          <Flame size={18} />
          Smash burgers, fries, crispy chicken, bacon, cheese, and sauce-heavy fast-food energy.
        </p>
        <p>
          <MapPin size={18} />
          Built loud in Rawai.
        </p>
      </div>
    </footer>
  );
}
