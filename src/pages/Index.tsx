import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RBACFlow from "@/components/RBACFlow";
import AttendanceFlow from "@/components/AttendanceFlow";
import AppScreensGallery from "@/components/AppScreensGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <RBACFlow />
        <AttendanceFlow />
        <AppScreensGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
