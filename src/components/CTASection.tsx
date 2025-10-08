import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join the future of educational management. Automate attendance,
            boost productivity, and empower students with personalized learning
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"
                    fill="#32BBFF"
                  />
                  <path
                    d="M14.5 12.707l3.842 3.842-10.85 6.256a1.007 1.007 0 01-.883.009L14.5 12.707z"
                    fill="#F4B400"
                  />
                  <path
                    d="M18.342 16.549l3.377-1.947a1 1 0 000-1.737l-3.377-1.947L14.5 14.76l3.842 1.789z"
                    fill="#F43249"
                  />
                  <path
                    d="M14.5 11.293L6.609 1.186a1.007 1.007 0 01.883.009l10.85 6.256-3.842 3.842z"
                    fill="#00D95F"
                  />
                </svg>
                <span>Download on Google Play</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 py-6 text-lg font-semibold transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>Free trial available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>24/7 support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
