import { motion } from "framer-motion";
import { GraduationCap, Users, Building, Briefcase, School } from "lucide-react";

const StakeholdersSection = () => {
  const stakeholders = [
    { icon: GraduationCap, title: "Students", description: "Automated tracking and personalized learning" },
    { icon: Users, title: "Teachers", description: "Save time with automated attendance" },
    { icon: Building, title: "Administrators", description: "Real-time insights and analytics" },
    { icon: Briefcase, title: "Career Counselors", description: "Track student progress and goals" },
    { icon: School, title: "Education Departments", description: "Institution-wide monitoring" }
  ];

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
            Relevant Stakeholders
          </h2>
          <p className="text-lg text-gray-600">
            Benefiting everyone in the educational ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{stakeholder.title}</h3>
                <p className="text-xs text-gray-600">{stakeholder.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StakeholdersSection;