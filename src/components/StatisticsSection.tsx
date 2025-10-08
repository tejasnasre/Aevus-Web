import { motion } from "framer-motion";
import { Users, School, Clock, TrendingUp } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Users",
      description: "Students & Teachers",
    },
    {
      icon: School,
      value: "200+",
      label: "Institutions",
      description: "Colleges & Schools",
    },
    {
      icon: Clock,
      value: "30hrs",
      label: "Time Saved",
      description: "Per Teacher/Month",
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Productivity Boost",
      description: "Student Engagement",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
