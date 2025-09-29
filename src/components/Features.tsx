import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Shield, Smartphone, Brain, Database } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "Advanced security with BLE proximity detection, GPS validation, and biometric authentication for fraud-proof attendance."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Intelligent recommendations and personalized learning suggestions powered by advanced AI algorithms."
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Comprehensive RBAC system with hierarchical permissions for administrators, HODs, teachers, and students."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Native mobile experience with offline synchronization and cross-platform compatibility."
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Live attendance monitoring with instant notifications and comprehensive analytics dashboard."
    },
    {
      icon: Database,
      title: "Smart Data Management",
      description: "Secure cloud storage with intelligent data processing and comprehensive reporting capabilities."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive attendance management with cutting-edge technology and user-centric design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <Card key={index} className="transition-smooth hover:shadow-medium">
                <CardHeader>
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;