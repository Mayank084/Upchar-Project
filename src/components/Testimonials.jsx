import "./Testimonials.css";
import { Star } from "lucide-react";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "Upchar helped me compare MRI prices and saved me almost ₹2000. The booking process was seamless.",
    },
    {
      name: "Priya Verma",
      review:
        "I found a great dermatologist within minutes. The platform is simple and trustworthy.",
    },
    {
      name: "Amit Patel",
      review:
        "Comparing hospitals before booking was incredibly useful. Highly recommended!",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonial-header">
        <span>TESTIMONIALS</span>
        <h2>What Our Patients Say</h2>
        <p>
          Thousands of users trust Upchar for healthcare comparisons and
          appointments.
        </p>
      </div>

      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
  <Star fill="#fbbf24" stroke="#fbbf24" size={20} />
  <Star fill="#fbbf24" stroke="#fbbf24" size={20} />
  <Star fill="#fbbf24" stroke="#fbbf24" size={20} />
  <Star fill="#fbbf24" stroke="#fbbf24" size={20} />
  <Star fill="#fbbf24" stroke="#fbbf24" size={20} />
</div>

            <p className="review-text">
              "{review.review}"
            </p>

            <h4>{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;