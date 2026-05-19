export default function ProductsPage() {
  return (
    <main className="bg-[#F5F1E8] text-[#1E1E1E] pt-32">

      {/* HERO */}

      <section className="px-6 md:px-20 pb-20">

        <div className="max-w-5xl">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
            PRODUCTS
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            Bespoke Furniture
            <br />
            Crafted Around Spaces.
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl">
            Curated furniture collections across hospitality,
            residential and commercial environments.
          </p>

        </div>

      </section>

      {/* PRODUCT GRID */}

      <section className="px-6 md:px-20 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Sofas",
            "Dining Sets",
            "Bar Stools",
            "Restaurant Seating",
            "Outdoor Furniture",
            "Custom Tables",
            "Benches",
            "Workstations",
            "Reception Counters",
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
            >

              <img
                src="/images/hero-main.jpg"
                alt={item}
                className="h-[260px] w-full object-cover"
              />

              <div className="p-8">

                <p className="text-[#7ED321] text-sm font-bold tracking-[4px] mb-4">
                  FINECRAFTZPLUS
                </p>

                <h2 className="text-3xl font-semibold mb-4">
                  {item}
                </h2>

                <a
                  href="https://wa.me/919177000010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#7ED321] hover:bg-[#6CB71B] transition px-6 py-3 rounded-full font-semibold text-black"
                >
                  Enquire
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}