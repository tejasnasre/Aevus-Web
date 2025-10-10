import { motion } from "framer-motion";
import { Play, KeyRound, ShieldCheck, Download } from "lucide-react";
import { mockRootProps } from "./AutomatedAttendanceMockData";

const SolutionSection = () => {
  const features = [
    {
      icon: Play,
      title: "Teacher Starts Session",
      description: "Teacher initiates the attendance session and generates a time-bound OTP",
      featureType: "session_start" as const,
    },
    {
      icon: KeyRound,
      title: "Student Enters OTP",
      description: "Students enter the OTP shared by teacher to begin attendance verification",
      featureType: "otp_entry" as const,
    },
    {
      icon: ShieldCheck,
      title: "Multi-Factor Verification",
      description: "System verifies attendance code, biometric auth, GPS proximity, and location",
      featureType: "verification" as const,
    },
    {
      icon: Download,
      title: "Device Verification & Export",
      description: "Final device verification completed, teacher can download attendance as XLSX",
      featureType: "export" as const,
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Automated Attendance Flow
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A complete attendance workflow from session start to export. Teacher initiates session with OTP, students verify through multiple security layers including biometric, GPS, and device verification.
          </p>
        </motion.div>

        {/* Feature Grid with Solution Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const screenshot = mockRootProps.screenshots.find(
              s => s.featureType === feature.featureType
            );
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
                  {screenshot?.step}
                </div>

                {/* Screenshot - No Background Box */}
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={screenshot?.src}
                    alt={screenshot?.title || feature.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105 shadow-xl"
                  />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-3 right-3">
                    <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Flow Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Verification Process</h3>
            <p className="text-gray-600 mb-4">
              Our multi-layered verification ensures accurate attendance with attendance code validation, biometric authentication, GPS proximity check, location verification, and device verification.
            </p>
            <p className="text-sm text-gray-500">
              Teachers can download attendance reports in XLSX format for easy record-keeping and analysis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;