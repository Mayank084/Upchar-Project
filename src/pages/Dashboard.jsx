import "./Dashboard.css";

function Dashboard() {
  return (
       
    <div className="dashboard-page"> 

        <div className="dashboard-layout">

  <aside className="dashboard-sidebar">

    <div className="sidebar-logo">
      <h2>Upchar</h2>
    </div>

    <ul>
      <li className="active">Overview</li>
      <li>Appointments</li>
      <li>Tests</li>
      <li>Reports</li>
      <li>Profile</li>
      <li>Settings</li>
    </ul>

  </aside>
   
   <main className="dashboard-main">

      {/* Welcome Section */}

      <div className="welcome-card">

        <div>
          <h1>Hello, Mayank 👋</h1>

          <p>
            Manage your appointments, tests and
            healthcare records in one place.
          </p>
        </div>

        <button>
          Book New Appointment
        </button>

      </div>

      {/* Stats */}

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

      {/* Main Content */}

      <div className="dashboard-content">

        {/* Appointments */}

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

        {/* Tests */}

        <div className="dashboard-section">

          <h2>Booked Tests</h2>

          <div className="test-card">

            <div>
              <h3>Blood Test</h3>

              <p>Home Collection</p>
            </div>

            <div className="status confirmed">
              Completed
            </div>

          </div>

          <div className="test-card">

            <div>
              <h3>MRI Scan</h3>

              <p>Scheduled Tomorrow</p>
            </div>

            <div className="status pending">
              Pending
            </div>

          </div>

        </div>

      </div>

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

      </main>

    </div>

    </div> 
  );
}

export default Dashboard;