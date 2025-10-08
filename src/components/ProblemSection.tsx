import { motion } from "framer-motion";
import AdminStudentManagement from "@/assets/admin/AdminStudentManagement.png";

const ProblemSection = () => {
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
            Designed with purpose
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Many educational institutions still depend on manual attendance systems, which are time-consuming and error-prone. Teachers spend a significant portion of class time marking attendance, reducing valuable instructional hours. Additionally, students often waste free periods with unproductive activities due to a lack of structured guidance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center">
            <img 
              src={AdminStudentManagement} 
              alt="Student Management Dashboard"
              className="w-80 h-auto rounded-3xl object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;