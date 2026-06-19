import "./Tests.css";
import { useNavigate } from "react-router-dom";

import {
  Droplets,
  Microscope,
  ScanLine,
  HeartPulse,
  Activity,
  Stethoscope,
} from "lucide-react";

function Tests() {
  const navigate = useNavigate();

  const tests = [
    {
      icon: <Droplets size={32} />,
      name: "Blood Test",
      price: "Starting ₹299",
    },
    {
      icon: <Microscope size={32} />,
      name: "Thyroid Test",
      price: "Starting ₹499",
    },
    {
      icon: <ScanLine size={32} />,
      name: "MRI Scan",
      price: "Starting ₹2499",
    },
    {
      icon: <HeartPulse size={32} />,
      name: "Heart Checkup",
      price: "Starting ₹999",
    },
    {
      icon: <Activity size={32} />,
      name: "Diabetes Test",
      price: "Starting ₹399",
    },
    {
      icon: <Stethoscope size={32} />,
      name: "CT Scan",
      price: "Starting ₹1999",
    },
  ];

  return (
    <section className="tests-section">

  <div className="section-header">

    <div className="section-title">

      <span>POPULAR TESTS</span>

      <h2>Book Medical Tests Online</h2>

      <p>
        Compare prices and book diagnostic tests
        from trusted healthcare providers.
      </p>

    </div>

    <button
      className="view-all-btn"
      onClick={() => navigate("/tests")}
    >
      View all →
    </button>

  </div>

      <div className="tests-grid">
        {tests.map((test, index) => (
          <div className="test-card" key={index}>
            <div className="test-icon">{test.icon}</div>

            <h3>{test.name}</h3>

            <p>{test.price}</p>

            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tests;