import Screenshot1 from "@/assets/solution-main/start-session.png";
import Screenshot2 from "@/assets/solution-main/otp-screen.png";
import Screenshot3 from "@/assets/solution-main/student-add-otp.png";
import Screenshot4 from "@/assets/solution-main/download-the-xlsx.png";

export const mockRootProps = {
  screenshots: [
    {
      src: Screenshot1,
      title: "Teacher Starts Session",
      description:
        "Teacher initiates the attendance session and generates a time-bound OTP",
      featureType: "session_start" as const,
      step: 1,
    },
    {
      src: Screenshot2,
      title: "Student Enters OTP",
      description:
        "Students enter the OTP shared by teacher to begin attendance verification",
      featureType: "otp_entry" as const,
      step: 2,
    },
    {
      src: Screenshot3,
      title: "Multi-Factor Verification",
      description:
        "System verifies attendance code, biometric auth, GPS proximity, and location",
      featureType: "verification" as const,
      step: 3,
    },
    {
      src: Screenshot4,
      title: "Device Verification & Export",
      description:
        "Final device verification completed, teacher can download attendance as XLSX",
      featureType: "export" as const,
      step: 4,
    },
  ],
};
