import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loc = useLocation();

  const navItems = [
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <header className="fixed w-full bg-[#0F172A]/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-white hover:text-[#00CECE] transition-colors",
                {
                  "text-[#00CECE]": loc.pathname === item.href,
                }
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link to={"/getting-started"}>
            <Button className="hidden md:block bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white">
              Get Started
            </Button>
          </Link>

          {/* sidebar */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col justify-between w-[300px] bg-[#0F172A] text-white rounded-l-2xl"
            >
              <nav className="flex flex-col space-y-4 mt-16">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-white hover:text-[#00CECE] transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link to={"/getting-started"}>
                <Button className="w-full bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white">
                  Get Started
                </Button>
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
