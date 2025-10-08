import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Calendar,
  TrendingUp,
  BookOpen,
  Award,
} from "lucide-react";

const PersonalizedLearning = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description:
        "Get personalized task suggestions based on your interests, strengths, and learning patterns",
    },
    {
      icon: Target,
      title: "Career Goal Alignment",
      description:
        "Activities aligned with your long-term academic and career aspirations",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Automatically generates daily routines combining class schedule and personal development time",
    },
    {
      icon: BookOpen,
      title: "Free Period Optimization",
      description:
        "Turn idle time into productive learning sessions with structured activities",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your growth and achievements across all activities",
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Build valuable skills through curated tasks and challenges",
    },
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
            Personalized Learning Experience
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our app suggests personalized academic tasks during free periods
            based on student interests, strengths, and career goals. It
            generates a daily routine that combines class schedule, free time,
            and long-term personal goals.
          </p>
        </motion.div>

        {/* Main Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Profile Setup",
                description:
                  "Students input their interests, career goals, and learning preferences",
              },
              {
                step: "02",
                title: "Smart Analysis",
                description:
                  "AI analyzes schedule and recommends personalized activities for free periods",
              },
              {
                step: "03",
                title: "Daily Routine",
                description:
                  "Get a complete daily plan integrating classes and personal development time",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-100 mb-3">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalizedLearning;
