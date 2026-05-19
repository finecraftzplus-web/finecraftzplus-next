export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}

        <a href="/" className="flex items-center">

          <img
            src="/logos/logo-main.png"
            alt="FinecraftzPlus"
            className="h-16 md:h-20 w-auto object-contain"
          />

        </a>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10 text-[#222] text-sm uppercase tracking-[2px] font-semibold">

          <a href="/" className="hover:text-[#7ED321] transition duration-300">
            Home
          </a>

          <a href="/solutions" className="hover:text-[#7ED321] transition duration-300">
            Solutions
          </a>

          <a href="/products" className="hover:text-[#7ED321] transition duration-300">
            Products
          </a>

          <a href="/projects" className="hover:text-[#7ED321] transition duration-300">
            Projects
          </a>

          <a href="/about" className="hover:text-[#7ED321] transition duration-300">
            About
          </a>

          <a href="/contact" className="hover:text-[#7ED321] transition duration-300">
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}