import "./HospitalsPage.css";

function HospitalsPage() {
const hospitals = [
{
image:
"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200",
name: "Apollo Hospital",
city: "Mumbai",
rating: "4.8",
doctors: "250+ Doctors",
},
{
image:
"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200",
name: "Fortis Hospital",
city: "Delhi",
rating: "4.7",
doctors: "180+ Doctors",
},
{
image:
"https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200",
name: "AIIMS",
city: "New Delhi",
rating: "4.9",
doctors: "400+ Doctors",
},
];

return ( <div className="hospitals-page">

```
  <div className="hospital-hero">
    <span>TOP HOSPITALS</span>

    <h1>Find The Best Hospitals Near You</h1>

    <p>
      Compare hospitals, ratings and healthcare
      facilities before booking appointments.
    </p>

    <div className="search-area">
      <input
        type="text"
        placeholder="Search hospitals..."
      />

      <button>Search</button>
    </div>
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

          <span>{hospital.doctors}</span>

          <button>
            View Details
          </button>

        </div>

      </div>
    ))}

  </div>

</div>

);
}

export default HospitalsPage ;
