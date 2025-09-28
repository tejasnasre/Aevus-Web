import { Button } from "@/components/ui/button";
import { GraduationCap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Revolutionize
              <span className="block gradient-primary bg-clip-text text-transparent">
                Your Classroom?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the education revolution with SmartAttend. Start your free trial today 
              and experience the future of classroom management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="border-t border-border pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="gradient-primary p-2 rounded-lg shadow-soft">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">SmartAttend</h3>
                  <p className="text-xs text-muted-foreground">Smart Curriculum & Attendance</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Transforming education through intelligent attendance tracking and 
                personalized learning experiences.
              </p>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">Features</a></li>
                <li><a href="#benefits" className="text-muted-foreground hover:text-foreground transition-smooth">Benefits</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Integrations</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Press</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">contact@smartattend.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 SmartAttend. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;