import "./Hospitals.css";

function Hospitals() {
  const hospitals = [
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      name: "Apollo Hospital",
      city: "Mumbai",
      rating: "4.8"
    },
    {
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800",
      name: "Fortis Hospital",
      city: "Delhi",
      rating: "4.7"
    },
    {
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
      name: "AIIMS",
      city: "New Delhi",
      rating: "4.9"
    }
  ];

  return (
    <section className="hospitals-section">

      <div className="hospital-title">
        <span>TOP HOSPITALS</span>
        <h2>Find The Best Hospitals Near You</h2>
        <p>
          Compare hospitals, check ratings and book appointments instantly.
        </p>
      </div>

      <div className="hospital-grid">

        {hospitals.map((hospital, index) => (
          <div className="hospital-card" key={index}>

            <img
              src={hospital.image}
              alt={hospital.name}
            />

            <div className="hospital-content">

              <div className="rating">
                ⭐ {hospital.rating}
              </div>

              <h3>{hospital.name}</h3>

              <p>{hospital.city}</p>

              <button>
                Book Appointment
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Hospitals;