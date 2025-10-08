import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Features" },
    { path: "/", label: "Solutions" },
    { path: "/", label: "Support" },
    { path: "/", label: "Download" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                size="sm" 
                className="ml-4 rounded-full px-6 bg-blue-500 hover:bg-blue-600 text-white"
              >
                Download
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 rounded-2xl bg-white border border-gray-200 shadow-xl p-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-left transition-colors ${
                    isActive(item.path)
                      ? "bg-blue-50 text-primary font-semibold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" className="w-full rounded-xl mt-2 bg-blue-500 text-white">
                Download
              </Button>
            </div>
          </motion.nav>
        )}
      </motion.header>
    </div>
  );
};

export default Header;