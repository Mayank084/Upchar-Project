import "./DoctorDetails.css";
import { Link } from "react-router-dom";

function DoctorDetails() {
return ( <div className="doctor-details-page">

```
  <div className="doctor-profile">

    <div className="doctor-image">
      <img
        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200"
        alt="Doctor"
      />
    </div>

    <div className="doctor-info">

      <span className="doctor-tag">
        TOP RATED DOCTOR
      </span>

      <h1>Dr. Priya Sharma</h1>

      <h3>Cardiologist</h3>

      <div className="doctor-stats">
        <div>⭐ 4.9 Rating</div>
        <div>12 Years Experience</div>
        <div>500+ Patients</div>
      </div>

      <p>
        Dr. Priya Sharma is an experienced
        cardiologist specializing in heart disease,
        cardiac care and preventive treatments.
        She has successfully treated thousands
        of patients across India.
      </p>

    </div>

  </div>

  <div className="doctor-content">

    <div className="about-card">

      <h2>About Doctor</h2>

      <p>
        Dedicated healthcare professional with
        expertise in diagnosis, treatment and
        prevention of cardiovascular diseases.
        Known for patient-centered care and
        advanced treatment planning.
      </p>

    </div>

    <div className="appointment-card">

      <h2>Available Slots</h2>

      <div className="slots">

        <button>09:00 AM</button>
        <button>10:00 AM</button>
        <button>11:00 AM</button>
        <button>02:00 PM</button>
        <button>03:00 PM</button>
        <button>04:00 PM</button>

      </div>

      <div className="fee">
        Consultation Fee
        <span>₹800</span>
      </div>

      <Link to="/dashboard"  className="book-btn">
            Book Appointment
      </Link>

    </div>

  </div>

</div>

);
}

export default DoctorDetails;
