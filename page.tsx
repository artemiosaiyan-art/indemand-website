const services = [
  ['Electrical', 'Electrical repairs, troubleshooting, lighting, maintenance, upgrades and power-related support.'],
  ['HVAC', 'Heating, ventilation and air conditioning service, repairs and seasonal maintenance.'],
  ['Roofing', 'Roof repairs, leak response, inspections and preventative roofing maintenance.'],
  ['Plumbing', 'Leak repairs, fixture replacement, drainage issues and general plumbing service.'],
  ['Cleaning', 'Interior and exterior cleaning services for buildings, common areas and workspaces.'],
  ['Concrete', 'Concrete patching, restoration and repairs for walkways, curbs, pads and surfaces.'],
  ['Asphalt', 'Asphalt patching, parking lot repairs, surface maintenance and paved area upkeep.'],
  ['General Repairs', 'Reliable building maintenance and repair solutions for a wide range of property needs.'],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <img src="/logo.avif" alt="Indemand Building Services logo" className="h-14 w-14 rounded-full object-cover bg-white" />
            <div>
              <h1 className="text-xl font-bold tracking-wide">Indemand Building Services</h1>
              <p className="text-sm text-slate-300">Reliable Property Maintenance & Repair Solutions</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">Full-Service Building Maintenance</p>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">Professional Building Services You Can Count On</h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Indemand Building Services provides dependable maintenance, repair and improvement solutions for commercial and residential properties. From HVAC and electrical work to roofing, plumbing, asphalt and concrete repairs, we help keep your property operating safely and efficiently.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg">Request a Quote</a>
            <a href="#services" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white">View Services</a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {['Commercial & Residential', 'Fast, Reliable Repairs', 'Interior & Exterior Work', 'General Maintenance'].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <p className="text-sm text-slate-400">Service Focus</p>
              <p className="mt-2 text-2xl font-bold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <h3 className="text-3xl font-bold">About Us</h3>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">At Indemand Building Services, we are committed to delivering high-quality workmanship and dependable service across a wide range of building needs. Our goal is to provide practical, efficient and cost-effective solutions that help property owners, managers and businesses maintain safe, clean and functional spaces.</p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">What We Do</p>
        <h3 className="mt-3 text-3xl font-bold md:text-4xl">Our Services</h3>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(([title, description]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-12">
          <h3 className="text-3xl font-bold">Contact Us</h3>
          <p className="mt-4 max-w-2xl text-slate-200">Need building maintenance, repairs or a service quote? Get in touch with Indemand Building Services.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/40 p-6"><p className="text-sm text-slate-400">Phone</p><p className="mt-2 text-lg font-semibold">416-316-8232</p></div>
            <div className="rounded-2xl bg-slate-950/40 p-6"><p className="text-sm text-slate-400">Email</p><p className="mt-2 break-words text-lg font-semibold">indemandbuildingservices@gmail.com</p></div>
            <div className="rounded-2xl bg-slate-950/40 p-6"><p className="text-sm text-slate-400">Address</p><p className="mt-2 text-lg font-semibold">911-90 Glen Everest Rd, Scarborough, ON M1N 0C3</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
