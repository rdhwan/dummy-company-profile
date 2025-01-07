import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const navItems = [
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <footer className="bg-[#0F172A] py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <Link
            to="/"
            className="flex justify-center flex-row gap-2 text-2xl font-bold text-white"
          >
            <img src="/logo.png" className="w-8" />
            <div>
              Crypto
              <span className="text-[#00CECE]">Scope</span>
            </div>
          </Link>
          <p className="mt-2 text-sm text-[#E2E8F0]">
            © {new Date().getFullYear()} Fathan Ridhwan.
          </p>
        </div>
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {navItems.map((item) => (
            <Link
              to={item.href}
              className="text-[#E2E8F0] hover:text-[#00CECE] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex space-x-4 mt-8 md:mt-0">
          <a
            href="#"
            className="text-[#E2E8F0] hover:text-[#00CECE] transition-colors"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#"
            className="text-[#E2E8F0] hover:text-[#00CECE] transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="text-[#E2E8F0] hover:text-[#00CECE] transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
