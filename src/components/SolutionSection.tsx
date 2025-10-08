import { motion } from "framer-motion";
import { QrCode, Wifi, Scan } from "lucide-react";
import TeacherScreen from "@/assets/teacher/Screenshot_2025-09-29-23-26-04-91_8083367b75d30e56c741c89a674caf51-portrait.png";

const SolutionSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Automated Attendance
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Automatically marks student attendance based on the daily timetable using QR code, Bluetooth/Wi-Fi proximity, or face recognition. Displays real-time attendance on a classroom screen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center">
            <img 
              src={TeacherScreen} 
              alt="Teacher Attendance Screen"
              className="w-80 h-auto rounded-3xl object-contain"
            />
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: QrCode,
              title: "QR Code Scanning",
              description: "Quick attendance marking with secure QR codes"
            },
            {
              icon: Wifi,
              title: "Proximity Detection",
              description: "Automatic check-in via Bluetooth/Wi-Fi"
            },
            {
              icon: Scan,
              title: "Face Recognition",
              description: "Biometric verification for added security"
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;