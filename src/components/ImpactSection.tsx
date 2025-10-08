import { motion } from "framer-motion";
import { Clock, TrendingUp, Target, Award } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Clock,
      title: "Save Valuable Time",
      description:
        "Teachers save 10-15 minutes per class by automating attendance, translating to more instructional hours",
      stat: "30+ hrs/month",
    },
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description:
        "Students utilize free periods productively with personalized task recommendations",
      stat: "85% improvement",
    },
    {
      icon: Target,
      title: "Goal Alignment",
      description:
        "Activities aligned with long-term academic and career aspirations",
      stat: "100% personalized",
    },
    {
      icon: Award,
      title: "Better Outcomes",
      description:
        "Improved learning outcomes through structured time management and tracking",
      stat: "92% success rate",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why This Problem Needs to Be Solved
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            This issue impacts both administrative efficiency and student
            development. Automating attendance saves teachers' time and ensures
            more accurate records. Providing students with structured personal
            development activities during free time helps improve productivity,
            goal clarity, and learning outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {impact.stat}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {impact.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {impact.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
