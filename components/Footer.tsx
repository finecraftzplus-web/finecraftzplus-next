export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6 md:px-20">

      <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">

        {/* Brand */}

        <div>

          <img
            src="/logos/logo-main.png"
            alt="FinecraftzPlus"
            className="h-16 w-auto object-contain mb-6"
          />

          <p className="text-gray-400 leading-relaxed">
            Bespoke interiors, premium furniture and execution
            solutions for hospitality, commercial and residential spaces.
          </p>

        </div>

        {/* Navigation */}

        <div>

          <h3 className="text-lg font-semibold mb-5">
            Navigation
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <a href="/" className="hover:text-[#7ED321] transition">
                Home
              </a>
            </li>

            <li>
              <a href="/solutions" className="hover:text-[#7ED321] transition">
                Solutions
              </a>
            </li>

            <li>
              <a href="/projects" className="hover:text-[#7ED321] transition">
                Projects
              </a>
            </li>

            <li>
              <a href="/products" className="hover:text-[#7ED321] transition">
                Products
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-[#7ED321] transition">
                About
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-[#7ED321] transition">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-lg font-semibold mb-5">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400 leading-relaxed">

            <li>
              Hyderabad, Telangana
            </li>

            <li>
              <a
                href="https://wa.me/919177000010"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7ED321] transition"
              >
                +91 9177000010
              </a>
            </li>

            <li>
              <a
                href="mailto:finecraftzplus@gmail.com"
                className="hover:text-[#7ED321] transition"
              >
                finecraftzplus@gmail.com
              </a>
            </li>

          </ul>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-lg font-semibold mb-5">
            Social
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <a
                href="https://www.instagram.com/finecraftz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7ED321] transition"
              >
                Instagram
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#7ED321] transition">
                Facebook
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#7ED321] transition">
                LinkedIn
              </a>
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom Strip */}

      <div className="pt-8 flex flex-col md:flex-row justify-between gap-5 text-sm text-gray-500">

        <p>
          © 2026 FinecraftzPlus. All Rights Reserved.
        </p>

        <div className="flex gap-6">

          <a href="/privacy-policy" className="hover:text-[#7ED321] transition">
            Privacy Policy
          </a>

          <a href="/terms" className="hover:text-[#7ED321] transition">
            Terms
          </a>

          <a href="/disclaimer" className="hover:text-[#7ED321] transition">
            Disclaimer
          </a>

        </div>

      </div>

    </footer>
  );
}