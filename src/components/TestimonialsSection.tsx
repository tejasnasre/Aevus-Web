import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Principal, St. Xavier's College",
      image: "👨‍💼",
      rating: 5,
      text: "Aevus has revolutionized how we manage attendance. We've saved countless hours and improved accuracy significantly. The personalized learning feature is a game-changer for student productivity.",
    },
    {
      name: "Prof. Priya Sharma",
      role: "HOD Computer Science, Mumbai University",
      image: "👩‍🏫",
      rating: 5,
      text: "The department management features are exceptional. Managing multiple classes and tracking student progress has never been easier. Highly recommended for all educational institutions.",
    },
    {
      name: "Amit Patel",
      role: "Teacher, Delhi Public School",
      image: "👨‍🏫",
      rating: 5,
      text: "As a teacher, I love how quickly I can mark attendance. The QR code feature is brilliant! I can now spend more time teaching and less time on administrative tasks.",
    },
    {
      name: "Sneha Reddy",
      role: "Student, Engineering College",
      image: "👩‍🎓",
      rating: 5,
      text: "The personalized task recommendations during free periods have helped me stay productive. The app aligns perfectly with my career goals and keeps me on track.",
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
            Loved by Educators & Students
          </h2>
          <p className="text-lg text-gray-600">
            See what our users have to say about transforming their educational
            experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />

              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {testimonial.role}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
