import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            Pedia
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Empowering businesses through digital solutions,
            innovation, and technology.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Resources
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                News
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Case Studies
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>Jakarta, Indonesia</li>
            <li>pedia@company.com</li>
            <li>+62 812-3456-7890</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Pedia. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
