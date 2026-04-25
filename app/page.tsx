
    export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "900px", margin: "auto" }}>
      
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        In Demand Building Services
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        Serving the Greater Toronto Area (GTA)
      </p>

      <div style={{ marginTop: "20px" }}>
        <a href="tel:4163168232" style={{
          background: "#0070f3",
          color: "white",
          padding: "12px 20px",
          marginRight: "10px",
          textDecoration: "none",
          borderRadius: "5px"
        }}>
          Call Now
        </a>

        <a href="mailto:indemandbuildingservices@gmail.com" style={{
          background: "#333",
          color: "white",
          padding: "12px 20px",
          textDecoration: "none",
          borderRadius: "5px"
        }}>
          Get a Quote
        </a>
      </div>

      <hr style={{ margin: "40px 0" }} />

      <h2>Professional Building Services You Can Trust</h2>
      <p>
        In Demand Building Services provides reliable and high-quality construction and maintenance
        solutions across the GTA. Led by Colin Barrett, we bring experience, efficiency, and
        professionalism to every project.
      </p>

      <h2 style={{ marginTop: "30px" }}>Our Services</h2>
      <ul>
        <li>Plumbing</li>
        <li>Mechanical Services</li>
        <li>HVAC</li>
        <li>Roofing</li>
        <li>Electrical</li>
        <li>Project Management</li>
        <li>Build-Out Services</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>Why Choose Us</h2>
      <ul>
        <li>Experienced and skilled team</li>
        <li>Fast and reliable service</li>
        <li>Competitive pricing</li>
        <li>Serving all of GTA</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>Contact Us</h2>
      <p><strong>Contact:</strong> Colin Barrett</p>
      <p><strong>Phone:</strong> 416-316-8232</p>
      <p><strong>Email:</strong> indemandbuildingservices@gmail.com</p>

      <hr style={{ margin: "40px 0" }} />

      <p style={{ fontSize: "14px", color: "#777" }}>
        © {new Date().getFullYear()} In Demand Building Services
      </p>

    </main>
  );
}
