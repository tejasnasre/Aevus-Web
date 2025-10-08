import { motion } from "framer-motion";
import { useState } from "react";
import { UserCircle, Users2, Building2, GraduationCap } from "lucide-react";
import AdminDashboard from "@/assets/admin/AdminDashboard.png";
import AdminProfile from "@/assets/admin/AdminProfilepage.png";
import AdminQuickActions from "@/assets/admin/AdminQuickActions.png";
import HODDashboard from "@/assets/hod/HODDashboard.png";
import HODProfile from "@/assets/hod/hodprofile.png";
import HODClassManagement from "@/assets/hod/hodclassmanagementpage.png";
import TeacherScreen1 from "@/assets/teacher/Screenshot_2025-09-29-23-26-04-91_8083367b75d30e56c741c89a674caf51-portrait.png";
import TeacherScreen2 from "@/assets/teacher/Screenshot_2025-09-29-23-26-12-83_8083367b75d30e56c741c89a674caf51-portrait.png";
import SignIn from "@/assets/auth/SignIn.png";

const RoleBasedFeatures = () => {
  const [activeRole, setActiveRole] = useState("admin");

  const roles = [
    {
      id: "admin",
      icon: Building2,
      title: "Admin",
      description: "Complete institutional oversight",
      features: [
        "Manage all students and teachers",
        "View institution-wide analytics",
        "Configure system settings",
        "Generate comprehensive reports",
        "Monitor attendance trends",
        "Quick actions dashboard",
      ],
      images: [AdminDashboard, AdminProfile, AdminQuickActions],
    },
    {
      id: "hod",
      icon: Users2,
      title: "HOD",
      description: "Department management",
      features: [
        "Manage department classes",
        "Oversee teachers and students",
        "Create and manage subjects",
        "View department analytics",
        "Handle class assignments",
        "Monitor subject progress",
      ],
      images: [HODDashboard, HODProfile, HODClassManagement],
    },
    {
      id: "teacher",
      icon: UserCircle,
      title: "Teacher",
      description: "Classroom control",
      features: [
        "Mark attendance instantly",
        "View class schedules",
        "Track student presence",
        "Generate QR codes",
        "Real-time attendance display",
        "Student performance tracking",
      ],
      images: [TeacherScreen1, TeacherScreen2, SignIn],
    },
    {
      id: "student",
      icon: GraduationCap,
      title: "Student",
      description: "Personalized learning",
      features: [
        "Automated check-in",
        "View daily schedule",
        "Get personalized tasks",
        "Track career goals",
        "Manage free periods",
        "View attendance records",
      ],
      images: [SignIn, TeacherScreen1, HODDashboard],
    },
  ];

  const activeRoleData = roles.find((role) => role.id === activeRole);

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
            Designed for Every Role
          </h2>
          <p className="text-lg text-gray-600">
            Tailored experiences for admins, HODs, teachers, and students
          </p>
        </motion.div>

        {/* Role Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                  activeRole === role.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{role.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Content */}
        {activeRoleData && (
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Features List */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeRoleData.title} Dashboard
                </h3>
                <p className="text-gray-600 mb-6">
                  {activeRoleData.description}
                </p>

                <ul className="space-y-3">
                  {activeRoleData.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Screenshots */}
              <div className="flex gap-4 justify-center items-center flex-wrap">
                {activeRoleData.images.slice(0, 2).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-gray-50 rounded-2xl p-4"
                  >
                    <img
                      src={image}
                      alt={`${activeRoleData.title} screenshot ${index + 1}`}
                      className="w-64 h-auto rounded-xl object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RoleBasedFeatures;
