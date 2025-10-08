import { motion } from "framer-motion";
import { FileText, CheckCircle2 } from "lucide-react";

const NEPAlignment = () => {
  const nepPoints = [
    "Emphasizes personalized and experiential learning",
    "Encourages holistic development of students",
    "Promotes use of technology in education",
    "Focuses on continuous assessment and feedback",
    "Supports competency-based learning approaches",
    "Advocates for student-centric pedagogy",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full mb-6">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                NEP 2020 Compliant
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aligned with NEP 2020
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our solution supports the National Education Policy 2020
              recommendations, emphasizing personalized and experiential
              learning for holistic student development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Key NEP 2020 Alignments
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {nepPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-blue-100">
              <p className="text-gray-600 italic">
                "The app bridges the gap between traditional attendance systems
                and modern educational needs, while supporting NEP 2020's vision
                of flexible, personalized learning experiences."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NEPAlignment;
