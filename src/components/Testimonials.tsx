import { Star } from 'lucide-react';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>
        REAL TALK FROM
        <span>REAL FOODIES</span>
      </h2>

      <div className="testimonial-stack">
        {testimonials.map((testimonial, index) => (
          <article className={`review-card review-${index + 1}`} key={testimonial.name}>
            <div className="stars" aria-label="Five star review">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} size={18} fill="currentColor" />
              ))}
            </div>
            <p>"{testimonial.quote}"</p>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.tag}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
