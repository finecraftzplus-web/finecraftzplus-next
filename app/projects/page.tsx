export default function ProjectsPage() {

  const projects = [
    {
      name: "TOQUO",
      category: "Hospitality",
      location: "Premium Hospitality Execution",
      image: "/projects/toquo/toquo-01.jpg",
      logo: "/brands/toquo-logo.png",
    },

    {
      name: "Rasta",
      category: "Hospitality",
      location: "Restaurant & Lounge Experience",
      image: "/projects/rasta/rasta-01.jpg",
      logo: "/brands/rasta-logo.png",
    },

    {
      name: "Kefi",
      category: "Café & Hospitality",
      location: "Modern Café Environment",
      image: "/projects/kefi/kefi-01.jpg",
      logo: "/brands/kefi-logo.png",
    },

    {
      name: "Jamun",
      category: "Restaurant Interiors",
      location: "Premium Dining Space",
      image: "/projects/jamun/jamun-01.jpg",
      logo: "/brands/jamun-logo.png",
    },

    {
      name: "Dasara",
      category: "Hospitality",
      location: "Fine Dining Experience",
      image: "/projects/dasara/dasara-01.jpg",
      logo: "/brands/dasara-logo.png",
    },

    {
      name: "Creamery",
      category: "Hospitality",
      location: "Dessert & Café Experience",
      image: "/projects/creamery/creamery-01.jpg",
      logo: "/brands/creamery-logo.png",
    },

    {
      name: "Reserve Bank of India",
      category: "Commercial",
      location: "Institutional Workspace",
      image: "/projects/rbi/rbi-01.jpg",
      logo: "/brands/rbi-logo.png",
    },

    {
      name: "Flipspaces",
      category: "Workspace Solutions",
      location: "Commercial Interiors",
      image: "/projects/flipspaces/flipspaces-01.jpg",
      logo: "/brands/flipspaces-logo.png",
    },

    {
      name: "UTK",
      category: "Commercial",
      location: "Execution & Furnishing",
      image: "/projects/utk/utk-01.jpg",
      logo: "/brands/utk-logo.png",
    },

    {
      name: "Neovantage",
      category: "Corporate Interiors",
      location: "Workspace Execution",
      image: "/projects/neovantage/neovantage-01.jpg",
      logo: "/brands/neovantage-logo.png",
    },

    {
      name: "Bajaj Electronics",
      category: "Retail",
      location: "Retail Experience",
      image: "/projects/bajaj/bajaj-01.jpg",
      logo: "/brands/bajaj-logo.png",
    },

    {
      name: "Airo",
      category: "Wellness & Specialty",
      location: "Custom Interior Environment",
      image: "/projects/airo/airo-01.jpg",
      logo: "/brands/airo-logo.png",
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
            A curated portfolio of hospitality, commercial,
            retail and bespoke interior execution projects
            crafted across evolving environments.
          </p>

        </div>

      </section>

      {/* PROJECT GRID */}

      <section className="px-6 md:px-20 pb-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white rounded-[36px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-500"
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  className="h-[340px] w-full object-cover"
                />

                {/* CATEGORY */}

                <div className="absolute top-5 left-5 bg-black/70 backdrop-blur-md text-white text-xs tracking-[3px] uppercase px-4 py-2 rounded-full">

                  {project.category}

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8">

                {/* LOGO */}

                <div className="h-24 flex items-center justify-center mb-6">

                  <img
                    src={project.logo}
                    alt={project.name}
                    className="max-h-20 w-auto object-contain"
                  />

                </div>

                {/* TITLE */}

                <h2 className="text-3xl font-semibold mb-3 leading-tight text-center">
                  {project.name}
                </h2>

                {/* LOCATION */}

                <p className="text-[#7ED321] font-semibold tracking-[2px] uppercase text-sm mb-5 text-center">

                  {project.location}

                </p>

                {/* DESCRIPTION */}

                <p className="text-gray-700 leading-relaxed text-center">
                  Bespoke furniture and interior execution
                  tailored around detailing, functionality
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