import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 leading-tight"
          >
            Smart Attendance & Student Productivity
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Android App
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            Automate attendance with QR codes, Bluetooth, or face recognition.
            Transform free periods into productive learning time with AI-powered
            personalized tasks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <a 
              href="https://github.com/tejasnasre/Aevus/releases/download/v1.0.0-beta/aevus-arm64-v8a.apk"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 px-8 py-4 rounded-full border border-green-200 cursor-pointer hover:shadow-lg transition-shadow"
            >
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
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-gray-900">
                  Download Now
                </span>
                <span className="text-xs text-gray-600">
                  Get it on Google Play
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-green-600"
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
              <span>Automated Attendance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-blue-600"
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
              <span>AI-Powered Tasks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-purple-600"
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
              <span>NEP 2020 Aligned</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
