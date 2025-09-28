import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Wifi, Camera, Monitor, Target, Calendar, Shield, Zap } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const Features = () => {
  const features = [
    {
      icon: QrCode,
      title: "QR Code Attendance",
      description: "Students scan QR codes for instant, contactless attendance marking with 99% accuracy.",
    },
    {
      icon: Wifi,
      title: "Proximity Detection",
      description: "Bluetooth and Wi-Fi proximity sensors automatically detect student presence in real-time.",
    },
    {
      icon: Camera,
      title: "Face Recognition",
      description: "Advanced AI-powered facial recognition for seamless and secure attendance tracking.",
    },
    {
      icon: Monitor,
      title: "Real-time Display",
      description: "Live attendance dashboard displayed on classroom screens for instant visibility.",
    },
    {
      icon: Target,
      title: "Personalized Activities",
      description: "AI suggests relevant academic tasks during free periods based on student goals.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Integrates with timetables to create optimized daily routines for each student.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security ensuring student data privacy and GDPR compliance.",
    },
    {
      icon: Zap,
      title: "Minimal Setup",
      description: "Deploy in minutes with existing hardware - no complex infrastructure required.",
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for
            <span className="block gradient-primary bg-clip-text text-transparent">
              Modern Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of classroom management with our comprehensive suite of 
            automated attendance and personalized learning tools.
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={dashboardImage}
              alt="Dashboard showing real-time attendance analytics and student activities"
              className="w-full rounded-2xl shadow-large"
            />
            <div className="absolute inset-0 gradient-secondary opacity-10 rounded-2xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-medium transition-smooth border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="gradient-primary p-3 rounded-lg w-fit shadow-soft">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;