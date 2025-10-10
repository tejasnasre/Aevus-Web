import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Challenge We're Solving
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Many educational institutions still depend on manual attendance systems, which are time-consuming and error-prone. Teachers spend a significant portion of class time marking attendance, reducing valuable instructional hours. Additionally, students often waste free periods with unproductive activities due to a lack of structured guidance.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            This issue impacts both administrative efficiency and student development. Automating attendance saves teachers' time and ensures more accurate records. Additionally, providing students with structured personal development activities during free time helps improve productivity, goal clarity, and learning outcomes. Institutions can also gain better insight into student behavior and engagement, allowing for more targeted support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;