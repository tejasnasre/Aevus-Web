import { motion } from "framer-motion";
import { QrCode, Wifi, Scan, CheckCircle } from "lucide-react";

const AttendanceMethods = () => {
  const methods = [
    {
      icon: QrCode,
      title: "QR Code Scanning",
      description:
        "Teachers generate unique QR codes for each class. Students scan to mark attendance instantly.",
      benefits: ["Quick & contactless", "Secure verification", "Works offline"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wifi,
      title: "Proximity Detection",
      description:
        "Automatic check-in using Bluetooth or Wi-Fi when students enter the classroom.",
      benefits: [
        "Hands-free attendance",
        "Real-time tracking",
        "No manual input",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Scan,
      title: "Face Recognition",
      description:
        "Biometric verification using advanced face recognition technology for maximum security.",
      benefits: ["Highly secure", "Prevents proxy", "Fast processing"],
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Multiple Attendance Methods
          </h2>
          <p className="text-lg text-gray-600">
            Choose the method that works best for your institution. All methods
            ensure accurate tracking and real-time updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
              >
                <div
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {method.description}
                </p>

                <div className="space-y-2">
                  {method.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Seamless Integration</h3>
            <p className="text-blue-50">
              All attendance methods automatically sync with the timetable and
              display real-time data on classroom screens. Requires minimal
              infrastructure and basic training for staff.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttendanceMethods;
