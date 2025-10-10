import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the automated attendance system work?",
      answer:
        "Teachers start a session and generate a time-bound OTP. Students enter the OTP to begin verification. The system then performs multi-factor verification including attendance code validation, biometric authentication, GPS proximity check, location verification, and device verification. Once verified, attendance is marked and teachers can download reports in XLSX format.",
    },
    {
      question: "What infrastructure is needed to use Aevus?",
      answer:
        "Minimal infrastructure is required. You need Android devices for users with biometric sensors (fingerprint) and GPS capability. Optionally, a display screen can be used for real-time attendance visualization. The app syncs data when connected to the internet.",
    },
    {
      question: "How are personalized tasks generated for students?",
      answer:
        "Our AI analyzes each student's profile, including their interests, academic strengths, career goals, and schedule. During free periods, it suggests relevant learning activities, practice exercises, or skill-building tasks aligned with their objectives.",
    },
    {
      question: "Is the app compliant with data privacy regulations?",
      answer:
        "Yes, we take data privacy seriously. All student and staff data is encrypted and stored securely. We comply with applicable data protection regulations and give institutions full control over their data.",
    },
    {
      question: "What verification methods are currently available?",
      answer:
        "Currently, we use a comprehensive verification system including time-bound OTP, attendance code validation, biometric fingerprint authentication, GPS proximity check, location verification, and device verification. Additional methods like QR code scanning and face recognition are planned for future releases.",
    },
    {
      question: "Can teachers export attendance data?",
      answer:
        "Yes, teachers can download attendance reports in XLSX (Excel) format for easy record-keeping, analysis, and sharing with administration. The export includes all verification details and timestamps.",
    },
    {
      question: "How does Aevus align with NEP 2020?",
      answer:
        "Aevus supports NEP 2020's emphasis on personalized learning, experiential education, and technology integration. Our personalized task recommendations and holistic student development features directly align with NEP 2020 goals.",
    },
    {
      question: "What training is required for staff?",
      answer:
        "The app is designed to be intuitive and requires minimal training. We provide onboarding sessions, video tutorials, and 24/7 support to ensure smooth adoption.",
    },
    {
      question: "Can the app handle multiple campuses or departments?",
      answer:
        "Yes, Aevus is designed to scale from single classrooms to multiple campuses. The admin dashboard provides institution-wide oversight while HODs manage their departments independently.",
    },
  ];

  return (
    <section id="support" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Aevus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="mailto:support@aevus.app"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Contact our support team
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
