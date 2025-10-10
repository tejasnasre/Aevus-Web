import { Button } from "@/components/ui/button";
import { Mail, Smartphone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/adaptive-icon.png" 
                alt="Aevus Logo" 
                className="w-14 h-14 rounded-xl shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900">Aevus</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Smart Attendance & Student Productivity Android App. Automate
              attendance, boost productivity, and empower students with
              personalized learning experiences.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 text-lg">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span>Privacy Policy</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span>Terms of Service</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span>Terms & Conditions</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 mb-12 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-3xl font-bold text-gray-900 mb-3">White Label Solutions Available</h4>
              <p className="text-gray-600 text-lg mb-2">
                Transform your institution with our customizable attendance and productivity platform.
              </p>
              <p className="text-sm text-gray-500">
                We offer white label solutions tailored to your institution's branding and requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gray-100 text-gray-500 rounded-full px-8 py-6 text-base font-semibold cursor-not-allowed"
                disabled
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Coming Soon
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-base font-semibold transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              Made with <span className="text-red-500">❤️</span> for Educational Institutions by team Aevus
            </p>
            <p>Copyright © {currentYear} Aevus. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;