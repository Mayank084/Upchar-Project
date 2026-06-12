import "./DoctorsPage.css";
import { Link } from "react-router-dom";

function DoctorsPage() {
  const doctors = [
    {
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
      name: "Dr. Priya Sharma",
      speciality: "Cardiologist",
      rating: "4.9",
      experience: "12 Years",
    },
    {
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
      name: "Dr. Rahul Verma",
      speciality: "Neurologist",
      rating: "4.8",
      experience: "10 Years",
    },
    {
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800",
      name: "Dr. Anjali Gupta",
      speciality: "Dermatologist",
      rating: "4.9",
      experience: "8 Years",
    },
  ];

  return (
    <section className="doctors-page">

      <div className="doctor-heading">
        <span>OUR SPECIALISTS</span>

        <h1>Meet Our Expert Doctors</h1>

        <p>
          Trusted healthcare professionals with years
          of experience across multiple specialties.
        </p>
      </div>

      <div className="doctor-grid">

        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>

            <div className="doctor-image">
              <img
                src={doctor.image}
                alt={doctor.name}
              />
            </div>

            <div className="doctor-info">

              <h3>{doctor.name}</h3>

              <p className="speciality">
                {doctor.speciality}
              </p>

              <div className="doctor-meta">

                <div className="rating">
                  ⭐ {doctor.rating}
                </div>

                <div className="experience">
                  {doctor.experience}
                </div>

              </div>

              <Link
                 to="/doctor-details"
                 className="book-btn"
                       >
                Book Appointment
                 </Link>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DoctorsPage;