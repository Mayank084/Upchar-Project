import "./Dashboard.css";
import { useState } from "react";

function Dashboard() {
   
  const [activeTab, setActiveTab] = useState("overview");

  return (
       
    <div className="dashboard-page"> 

        <div className="dashboard-layout">

  <aside className="dashboard-sidebar">

    <div className="sidebar-logo">
      <h2>Upchar</h2>
    </div>

    <ul>
  <li
    className={activeTab === "overview" ? "active" : ""}
    onClick={() => setActiveTab("overview")}
  >
    Overview
  </li>

  <li
    className={activeTab === "appointments" ? "active" : ""}
    onClick={() => setActiveTab("appointments")}
  >
    Appointments
  </li>

  <li
    className={activeTab === "tests" ? "active" : ""}
    onClick={() => setActiveTab("tests")}
  >
    Tests
  </li>

  <li
    className={activeTab === "reports" ? "active" : ""}
    onClick={() => setActiveTab("reports")}
  >
    Reports
  </li>

  <li
    className={activeTab === "profile" ? "active" : ""}
    onClick={() => setActiveTab("profile")}
  >
    Profile
  </li>

  <li
    className={activeTab === "settings" ? "active" : ""}
    onClick={() => setActiveTab("settings")}
  >
    Settings
  </li>
</ul>

  </aside>
   
   <main className="dashboard-main">

    {activeTab === "overview" && (
  <>
    <div className="welcome-card">
      <div>
        <h1>Hello, Mayank 👋</h1>
        <p>
          Manage your appointments, tests and
          healthcare records in one place.
        </p>
      </div>

      <button>Book New Appointment</button>
    </div>

    <div className="stats-grid">
      <div className="stat-card">
        <h2>03</h2>
        <span>Appointments</span>
      </div>

      <div className="stat-card">
        <h2>05</h2>
        <span>Tests Booked</span>
      </div>

      <div className="stat-card">
        <h2>02</h2>
        <span>Reports Ready</span>
      </div>

      <div className="stat-card">
        <h2>4.9</h2>
        <span>Health Score</span>
      </div>
    </div>
  </>
          )
      } 

      {/* Main Content */}

      <div className="dashboard-content">

        {/* Appointments */}
         {activeTab === "appointments" && (
        <div className="dashboard-section">

          <h2>Upcoming Appointments</h2>

          <div className="appointment-card">

            <div>
              <h3>Dr. Priya Sharma</h3>

              <p>Cardiologist</p>
            </div>

            <div>
              <span>Tomorrow</span>
              <p>10:00 AM</p>
            </div>

            <div className="status confirmed">
              Confirmed
            </div>

          </div>

          <div className="appointment-card">

            <div>
              <h3>Dr. Rahul Verma</h3>

              <p>Neurologist</p>
            </div>

            <div>
              <span>25 June</span>
              <p>02:30 PM</p>
            </div>

            <div className="status pending">
              Pending
            </div>

          </div>

        </div>
         )
        }

        {/* Tests */}

         {activeTab === "tests" && (
          <div className="dashboard-section">
           <h2>My Tests</h2>

           <div className="test-card">
            <div>
             <h3>Blood Test</h3>
             <p>Completed</p>
             </div>

             <div className="status confirmed">
              Ready
            </div>
            </div>
            </div>
             )}

      {/* Reminder */}

      <div className="reminder-card">

        <div>
          <h3>🔔 Upcoming Reminder</h3>

          <p>
            MRI Scan scheduled tomorrow at
            10:00 AM.
          </p>
        </div>

        <button>
          View Details
        </button>

      </div>

      </div>

      {activeTab === "reports" && (
  <div className="dashboard-section">

    <h2>Medical Reports</h2>

    <div className="test-card">
      <div>
        <h3>Blood Test Report</h3>
        <p>Available for Download</p>
      </div>

      <button className="btn-primary">
        Download
      </button>
    </div>

    <div className="test-card">
      <div>
        <h3>MRI Report</h3>
        <p>Generated Yesterday</p>
      </div>

      <button className="btn-primary">
        Download
      </button>
    </div>

  </div>
        )}

        {activeTab === "profile" && (
  <div className="dashboard-section">

    <h2>My Profile</h2>

    <div className="profile-box">

      <h3>Mayank Sahu</h3>

      <p>Email: mayank@email.com</p>

      <p>Phone: +91 9876543210</p>

      <p>Blood Group: O+</p>

      <p>Gender: Male</p>

    </div>

  </div>
)}

{activeTab === "settings" && (
  <div className="dashboard-section">

    <h2>Settings</h2>

    <div className="settings-box">

      <button className="view-btn">
        Change Password
      </button>

      <button className="view-btn">
        Notification Settings
      </button>

      <button className="cancel-btn">
        Logout
      </button>

    </div>

  </div>
)}
      </main>

    </div>

    </div> 
  );
}

export default Dashboard;