import AdventureSection from './components/AdventureSection';
import FlavorCircle from './components/FlavorCircle';
import FoodCards from './components/FoodCards';
import FoodTicker from './components/FoodTicker';
import Footer from './components/Footer';
import OrderCallout from './components/OrderCallout';
import Testimonials from './components/Testimonials';
import TopHero from './components/TopHero';

export default function App() {
  return (
    <main className="poster-shell">
      <TopHero />
      <FoodCards />
      <FlavorCircle />
      <AdventureSection />
      <Testimonials />
      <OrderCallout />
      <FoodTicker />
      <Footer />
    </main>
  );
}
