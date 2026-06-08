import { useState } from "react";
import "./Doctors.css";
import { Star, BriefcaseMedical, ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";

function Doctors() {
  const doctors = [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Dr. Priya Sharma",
      speciality: "Cardiologist",
      experience: "12 Years",
      rating: "4.9",
      reviews: "320",
      fee: "₹500",
      location: "Mumbai",
      available: "Available Today",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Dr. Raj Verma",
      speciality: "Neurologist",
      experience: "10 Years",
      rating: "4.8",
      reviews: "210",
      fee: "₹700",
      location: "Delhi",
      available: "Available Tomorrow",
    },
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Dr. Anjali Singh",
      speciality: "Dermatologist",
      experience: "8 Years",
      rating: "4.9",
      reviews: "180",
      fee: "₹600",
      location: "Bangalore",
      available: "Available Today",
    },
    {
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Dr. Arjun Mehta",
      speciality: "Orthopedist",
      experience: "15 Years",
      rating: "4.7",
      reviews: "290",
      fee: "₹800",
      location: "Chennai",
      available: "Available Today",
    },
    {
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Dr. Sneha Kapoor",
      speciality: "Pediatrician",
      experience: "9 Years",
      rating: "4.9",
      reviews: "410",
      fee: "₹450",
      location: "Pune",
      available: "Available Tomorrow",
    },
    {
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      name: "Dr. Vikram Nair",
      speciality: "Psychiatrist",
      experience: "11 Years",
      rating: "4.8",
      reviews: "150",
      fee: "₹900",
      location: "Hyderabad",
      available: "Available Today",
    },
  ];

  const [current, setCurrent] = useState(0);
  const visible = 3;
  const total = doctors.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - visible : c - 1));
  const next = () => setCurrent((c) => (c + visible >= total ? 0 : c + 1));

  const visible_doctors = doctors.slice(current, current + visible).concat(
    current + visible > total ? doctors.slice(0, (current + visible) % total) : []
  );

  return (
    <section className="doctors-section">

      <div className="doctor-heading">
        <span className="doctor-tag">OUR SPECIALISTS</span>
        <h2>Find The <span>Right Doctor</span></h2>
        <p>Connect with experienced doctors and book appointments instantly.</p>
      </div>

      <div className="slider-wrapper">

        <button className="slider-btn slider-btn--left" onClick={prev}>
          <ChevronLeft size={22} />
        </button>

        <div className="doctor-grid">
          {visible_doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>

              <div className={`avail-pill ${doctor.available.includes("Today") ? "avail-today" : "avail-tomorrow"}`}>
                <span className="avail-dot" />
                {doctor.available}
              </div>

              <div className="doctor-img-wrap">
                <img src={doctor.image} alt={doctor.name} />
                <div className="rating-badge">
                  <Star size={13} fill="#facc15" stroke="none" />
                  {doctor.rating}
                </div>
              </div>

              <div className="doctor-info">

                <h3>{doctor.name}</h3>

                <div className="speciality">
                  <BriefcaseMedical size={15} />
                  {doctor.speciality}
                </div>

                <div className="doctor-meta">
                  <div className="meta-item">
                    <Clock size={14} />
                    {doctor.experience}
                  </div>
                  <div className="meta-item">
                    <MapPin size={14} />
                    {doctor.location}
                  </div>
                  <div className="meta-item">
                    <Star size={14} />
                    {doctor.reviews} reviews
                  </div>
                </div>

                <div className="doctor-footer">
                  <div className="fee-wrap">
                    <span className="fee-label">Consultation</span>
                    <span className="fee-amount">{doctor.fee}</span>
                  </div>
                  <button className="book-btn">Book Now</button>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn slider-btn--right" onClick={next}>
          <ChevronRight size={22} />
        </button>

      </div>

      <div className="slider-dots">
        {Array.from({ length: total - visible + 1 }).map((_, i) => (
          <button
            key={i}
            className={`dot ${current === i ? "dot--active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

    </section>
  );
}

export default Doctors;