import { motion } from "framer-motion";
import { useState } from "react";
import AdminDashboard from "@/assets/admin/AdminDashboard.png";
import AdminProfile from "@/assets/admin/AdminProfilepage.png";
import AdminQuickActions from "@/assets/admin/AdminQuickActions.png";
import AdminStudentMgmt from "@/assets/admin/AdminStudentManagement.png";
import AdminTeacherMgmt from "@/assets/admin/AdminTeacherManagement.png";
import HODDashboard from "@/assets/hod/HODDashboard.png";
import HODProfile from "@/assets/hod/hodprofile.png";
import HODClassMgmt from "@/assets/hod/hodclassmanagementpage.png";
import TeacherScreen1 from "@/assets/teacher/Screenshot_2025-09-29-23-26-04-91_8083367b75d30e56c741c89a674caf51-portrait.png";
import TeacherScreen2 from "@/assets/teacher/Screenshot_2025-09-29-23-26-12-83_8083367b75d30e56c741c89a674caf51-portrait.png";
import TeacherScreen3 from "@/assets/teacher/Screenshot_2025-09-29-23-26-20-57_8083367b75d30e56c741c89a674caf51-portrait.png";
import SignIn from "@/assets/auth/SignIn.png";
import Welcome from "@/assets/auth/Welcome.png";

const DeviceShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const screenshots = [
    { src: AdminDashboard, category: "admin", title: "Admin Dashboard" },
    { src: AdminProfile, category: "admin", title: "Admin Profile" },
    { src: AdminQuickActions, category: "admin", title: "Quick Actions" },
    { src: AdminStudentMgmt, category: "admin", title: "Student Management" },
    { src: AdminTeacherMgmt, category: "admin", title: "Teacher Management" },
    { src: HODDashboard, category: "hod", title: "HOD Dashboard" },
    { src: HODProfile, category: "hod", title: "HOD Profile" },
    { src: HODClassMgmt, category: "hod", title: "Class Management" },
    { src: TeacherScreen1, category: "teacher", title: "Teacher Attendance" },
    { src: TeacherScreen2, category: "teacher", title: "Teacher Dashboard" },
    { src: TeacherScreen3, category: "teacher", title: "Class Details" },
    { src: SignIn, category: "auth", title: "Sign In" },
    { src: Welcome, category: "auth", title: "Welcome Screen" },
  ];

  const filteredScreenshots =
    activeCategory === "all"
      ? screenshots
      : screenshots.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience It on Android
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Intuitive interfaces designed for Admin, HOD, Teacher, and Student
            roles. Seamless experience optimized for Android devices.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { id: "all", label: "All" },
              { id: "admin", label: "Admin" },
              { id: "hod", label: "HOD" },
              { id: "teacher", label: "Teacher" },
              { id: "auth", label: "Auth" },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 px-8 py-4 rounded-full border border-green-200 cursor-pointer hover:shadow-lg transition-shadow">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"
                fill="#32BBFF"
              />
              <path
                d="M14.5 12.707l3.842 3.842-10.85 6.256a1.007 1.007 0 01-.883.009L14.5 12.707z"
                fill="#F4B400"
              />
              <path
                d="M18.342 16.549l3.377-1.947a1 1 0 000-1.737l-3.377-1.947L14.5 14.76l3.842 1.789z"
                fill="#F43249"
              />
              <path
                d="M14.5 11.293L6.609 1.186a1.007 1.007 0 01.883.009l10.85 6.256-3.842 3.842z"
                fill="#00D95F"
              />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-900">
                Coming Soon
              </span>
              <span className="text-xs text-gray-600">
                Get it on Google Play
              </span>
            </div>
          </div>
        </motion.div>

        {/* Screenshots Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredScreenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="w-full h-auto rounded-xl object-contain"
                  />
                  <p className="mt-3 text-sm font-medium text-gray-700 text-center">
                    {screenshot.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
