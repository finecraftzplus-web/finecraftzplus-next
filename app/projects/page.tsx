export default function ProjectsPage() {

  const projects = [
    {
      name: "TOQUO",
      category: "Hospitality",
      location: "Nagpur",
      image: "/images/hero-main.jpg",
      logo: "/brands/toquo-logo.png",
    },

    {
      name: "Rasta",
      category: "Hospitality",
      location: "Hyderabad",
      image: "/images/hero-main.jpg",
      logo: "/brands/rasta-logo.png",
    },

    {
      name: "Jamun Restaurant",
      category: "Restaurant",
      location: "Jubilee Hills, Hyderabad",
      image: "/images/hero-main.jpg",
      logo: "/brands/jamun-logo.png",
    },

    {
      name: "Dasara Fine Dining",
      category: "Restaurant",
      location: "Hyderabad",
      image: "/images/hero-main.jpg",
      logo: "/brands/dasara-logo.png",
    },

    {
      name: "Kefi",
      category: "Café",
      location: "Nagole, Hyderabad",
      image: "/images/hero-main.jpg",
      logo: "/brands/kefi-logo.png",
    },

    {
      name: "Ario Café",
      category: "Café",
      location: "Banjara Hills, Hyderabad",
      image: "/images/hero-main.jpg",
      logo: "/brands/ario-logo.png",
    },

    {
      name: "Reserve Bank of India",
      category: "Commercial",
      location: "Hyderabad",
      image: "/images/hero-main.jpg",
      logo: "/brands/rbi-logo.png",
    },

    {
      name: "Bajaj Electronics",
      category: "Retail",
      location: "Hyderabad",
      image: "/images/hero-main.jpg",
      logo: "/brands/bajaj-logo.png",
    },

    {
      name: "Flipspaces",
      category: "Commercial",
      location: "Hyderabad",
      image: "/images/hero-main.jpg",
      logo: "/brands/flipspaces-logo.png",
    },
  ];

  return (
    <main className="bg-[#F5F1E8] text-[#1E1E1E] pt-32">

      {/* HERO */}

      <section className="px-6 md:px-20 pb-20">

        <div className="max-w-5xl">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
            PROJECTS
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            Spaces Built Through
            <br />
            Experience & Execution.
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl">
            A curated showcase of hospitality, commercial,
            retail and bespoke furniture execution projects
            across diverse environments.
          </p>

        </div>

      </section>

      {/* PROJECT GRID */}

      <section className="px-6 md:px-20 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white rounded-[36px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-500"
            >

              {/* PROJECT IMAGE */}

              <div className="relative">

                <img
                  src={project.image}
                  alt={project.name}
                  className="h-[320px] w-full object-cover"
                />

                {/* CATEGORY */}

                <div className="absolute top-5 left-5 bg-black/70 backdrop-blur-md text-white text-xs tracking-[3px] uppercase px-4 py-2 rounded-full">

                  {project.category}

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8">

                {/* LOGO */}

                <div className="h-14 flex items-center mb-6">

                  <img
                    src={project.logo}
                    alt={project.name}
                    className="max-h-12 w-auto object-contain"
                  />

                </div>

                {/* TITLE */}

                <h2 className="text-3xl font-semibold mb-3">
                  {project.name}
                </h2>

                {/* LOCATION */}

                <p className="text-[#7ED321] font-semibold mb-5 tracking-[2px] uppercase text-sm">

                  {project.location}

                </p>

                {/* DESCRIPTION */}

                <p className="text-gray-700 leading-relaxed">
                  Bespoke interior and furniture execution
                  tailored around functionality, detailing
                  and spatial experience.
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}