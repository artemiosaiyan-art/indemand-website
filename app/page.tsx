export default function Home() {
  const services = [
    "Plumbing",
    "Mechanical Services",
    "HVAC",
    "Roofing",
    "Electrical",
    "Project Management",
    "Build-Out Services",
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f4f6f8", color: "#111" }}>
      <section style={{ background: "#0f172a", color: "white", padding: "30px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "40px" }}>
          <img src="/logo.avif" alt="In Demand Building Services Logo" style={{ width: "90px", background: "white", borderRadius: "12px", padding: "6px" }} />
          <div>
            <h1 style={{ margin: 0, fontSize: "36px" }}>In Demand Building Services</h1>
            <p style={{ margin: "6px 0 0", color: "#cbd5e1" }}>Serving the Greater Toronto Area</p>
          </div>
        </div>

        <h2 style={{ fontSize: "46px", maxWidth: "850px", marginBottom: "20px" }}>
          Reliable Building Services for Commercial & Residential Projects
        </h2>

        <p style={{ fontSize: "18px", maxWidth: "750px", color: "#dbeafe", lineHeight: "1.7" }}>
          Plumbing, mechanical, HVAC, roofing, electrical, project management and build-out services across the GTA.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a href="tel:14163168232" style={{ background: "#38bdf8", color: "#031525", padding: "14px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", marginRight: "12px" }}>
            Call Now
          </a>
          <a href="mailto:indemandbuildingservices@gmail.com" style={{ background: "white", color: "#111", padding: "14px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
            Get a Quote
          </a>
        </div>
      </section>

      <section style={{ padding: "50px 40px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ fontSize: "32px" }}>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "25px" }}>
          {services.map((service) => (
            <div key={service} style={{ background: "white", padding: "24px", borderRadius: "14px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
              <h3 style={{ marginTop: 0 }}>{service}</h3>
              <p style={{ color: "#555" }}>Professional, reliable and efficient service for your property needs.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "white", padding: "50px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ fontSize: "32px" }}>Why Choose Us</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#444" }}>
            In Demand Building Services provides dependable construction, repair and maintenance solutions across the GTA. Led by Colin Barrett, we focus on quality workmanship, responsive service and professional project delivery.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "25px" }}>
            <div><strong>Reliable Service</strong><p>Fast response and clear communication.</p></div>
            <div><strong>Experienced Team</strong><p>Skilled support across multiple trades.</p></div>
            <div><strong>Complete Solutions</strong><p>From repairs to full build-outs.</p></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 40px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ fontSize: "32px" }}>Contact Us</h2>
        <div style={{ background: "#0f172a", color: "white", padding: "30px", borderRadius: "16px" }}>
          <p><strong>Contact:</strong> Colin Barrett</p>
          <p><strong>Phone:</strong> 416-316-8232</p>
          <p><strong>Email:</strong> indemandbuildingservices@gmail.com</p>
          <p><strong>Service Area:</strong> Greater Toronto Area</p>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "25px", color: "#666" }}>
        © {new Date().getFullYear()} In Demand Building Services. All rights reserved.
      </footer>
    </main>
  );
}
