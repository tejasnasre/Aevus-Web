import { motion } from "framer-motion";
import { CheckCircle, Calendar, Target, Users, BookOpen, Zap } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Automated Attendance",
      description: "Mark attendance automatically using QR, Bluetooth, or face recognition"
    },
    {
      icon: Target,
      title: "Personalized Tasks",
      description: "Get task suggestions based on interests and career goals"
    },
    {
      icon: Calendar,
      title: "Real-time Display",
      description: "View live attendance on classroom screens instantly"
    },
    {
      icon: BookOpen,
      title: "Daily Routine",
      description: "Combine class schedule with personal development activities"
    },
    {
      icon: Users,
      title: "Career Alignment",
      description: "Activities aligned with long-term academic and career goals"
    },
    {
      icon: Zap,
      title: "Minimal Infrastructure",
      description: "Easy to use with basic training for students and staff"
    }
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
            Expected Outcomes
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to transform your institution's attendance and student productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mb-6 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;