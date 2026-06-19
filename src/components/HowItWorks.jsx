import "./HowItWorks.css";
import {
  Search,
  Scale,
  CalendarCheck,
  HeartPulse
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Search size={40} />,
      number: "01",
      title: "Search",
      text: "Find tests, hospitals and doctors near you."
    },
    {
      icon: <Scale size={40} />,
      number: "02",
      title: "Compare",
      text: "Compare prices, ratings and facilities."
    },
    {
      icon: <CalendarCheck size={40} />,
      number: "03",
      title: "Book",
      text: "Book appointments instantly online."
    },
    {
      icon: <HeartPulse size={40} />,
      number: "04",
      title: "Get Care",
      text: "Receive quality healthcare seamlessly."
    }
  ];

  return (
    <section className="how-section">

      <div className="hiw-section-header">
        <span>HOW IT WORKS</span>
        <h2>Healthcare In 4 Simple Steps</h2>
      </div>

      <div className="steps-grid">

        {steps.map((step, index) => (
          <div className="step-card" key={index}>

            <div className="step-number">
              {step.number}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;