import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr]">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold">WorkShelf</h2>

            <p className="mt-4 max-w-sm text-base leading-7 text-slate-400">
              Your one-stop marketplace for books, office supplies, and
              business essentials.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold">Company</h3>

            <ul className="mt-8 space-y-4 text-slate-400">
              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold">Products</h3>

            <ul className="mt-8 space-y-4 text-slate-400">
              <li>
                <Link
                  to="/products"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Books
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Office Supplies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Furniture
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Electronics
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold">Support</h3>

            <ul className="mt-8 space-y-4 text-slate-400">
              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold">Socials</h3>

            <ul className="mt-8 space-y-4 text-slate-400">
              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-700"></div>

        {/* Copyright */}
        <p className="mt-4 text-center text-sm text-slate-400">
          © 2026 WorkShelf. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;