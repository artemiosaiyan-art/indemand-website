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
      <section style={{ background: "#0f172a", color: "white", padding: "30px 40px 70px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img src="/logo.avif" alt="In Demand Building Services Logo" style={{ width: "90px", background: "white", borderRadius: "14px", padding: "8px" }} />
            <div>
              <h1 style={{ margin: 0, fontSize: "34px" }}>In Demand Building Services</h1>
              <p style={{ margin: "6px 0 0", color: "#cbd5e1" }}>Serving the Greater Toronto Area</p>
            </div>
          </div>

          <a href="tel:14163168232" style={{ background: "#38bdf8", color: "#031525", padding: "14px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
            Call 416-316-8232
          </a>
        </div>

        <div style={{ maxWidth: "950px", marginTop: "70px" }}>
          <p style={{ color: "#38bdf8", fontWeight: "bold", letterSpacing: "1px" }}>COMMERCIAL & RESIDENTIAL</p>
          <h2 style={{ fontSize: "54px", lineHeight: "1.1", margin: "10px 0 20px" }}>
            Complete Building Services Across the GTA
          </h2>
          <p style={{ fontSize: "20px", color: "#dbeafe", lineHeight: "1.7" }}>
            Professional plumbing, mechanical, HVAC, roofing, electrical, project management and build-out services.
          </p>

          <div style={{ marginTop: "35px" }}>
            <a href="tel:14163168232" style={{ background: "#38bdf8", color: "#031525", padding: "15px 26px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", marginRight: "12px" }}>
              Call Now
            </a>
            <a href="mailto:indemandbuildingservices@gmail.com" style={{ background: "white", color: "#111", padding: "15px 26px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 40px", maxWidth: "1150px", margin: "auto" }}>
        <h2 style={{ fontSize: "34px" }}>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "22px", marginTop: "30px" }}>
          {services.map((service) => (
            <div key={service} style={{ background: "white", padding: "28px", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
              <h3 style={{ marginTop: 0 }}>{service}</h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Reliable service, quality workmanship, and professional support for your property needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "white", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1150px", margin: "auto" }}>
          <h2 style={{ fontSize: "34px" }}>Why Choose Us</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#444", maxWidth: "850px" }}>
            Led by Colin Barrett, In Demand Building Services provides dependable construction, repair and maintenance solutions throughout the GTA. We focus on clear communication, safe work practices, quality results and professional project delivery.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "22px", marginTop: "30px" }}>
            <div><h3>Reliable Service</h3><p>Fast response and clear communication.</p></div>
            <div><h3>Experienced Team</h3><p>Skilled support across multiple trades.</p></div>
            <div><h3>Complete Solutions</h3><p>From repairs to full build-outs.</p></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 40px", maxWidth: "1150px", margin: "auto" }}>
        <h2 style={{ fontSize: "34px" }}>Request a Quote</h2>
        <div style={{ background: "#0f172a", color: "white", padding: "35px", borderRadius: "18px" }}>
          <p><strong>Contact:</strong> Colin Barrett</p>
          <p><strong>Phone:</strong> 416-316-8232</p>
          <p><strong>Email:</strong> indemandbuildingservices@gmail.com</p>
          <p><strong>Service Area:</strong> Greater Toronto Area</p>

          <div style={{ marginTop: "25px" }}>
            <a href="tel:14163168232" style={{ background: "#38bdf8", color: "#031525", padding: "14px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", marginRight: "12px" }}>
              Call Now
            </a>
            <a href="mailto:indemandbuildingservices@gmail.com" style={{ background: "white", color: "#111", padding: "14px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "25px", color: "#666" }}>
        © {new Date().getFullYear()} In Demand Building Services. All rights reserved.
      </footer>
    </main>
  );
}
