import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="gradient-primary p-2 rounded-lg shadow-soft">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Aevus</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('#features')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('#rbac')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              RBAC System
            </button>
            <button 
              onClick={() => scrollToSection('#attendance')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Attendance Flow
            </button>
            <button 
              onClick={() => scrollToSection('#screens')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              App Screens
            </button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('#features')}
                className="text-muted-foreground hover:text-foreground transition-smooth text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('#rbac')}
                className="text-muted-foreground hover:text-foreground transition-smooth text-left"
              >
                RBAC System
              </button>
              <button 
                onClick={() => scrollToSection('#attendance')}
                className="text-muted-foreground hover:text-foreground transition-smooth text-left"
              >
                Attendance Flow
              </button>
              <button 
                onClick={() => scrollToSection('#screens')}
                className="text-muted-foreground hover:text-foreground transition-smooth text-left"
              >
                App Screens
              </button>
              <Button variant="default" size="sm" className="w-fit">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;