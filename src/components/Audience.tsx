import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Building, Briefcase, Shield } from "lucide-react";

const Audience = () => {
  const stakeholders = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Experience seamless attendance and personalized learning activities during free periods.",
      benefits: [
        "Effortless attendance marking",
        "Personalized learning recommendations", 
        "Better time management",
        "Goal-aligned activities"
      ]
    },
    {
      icon: Users,
      title: "Teachers",
      description: "Focus on teaching while automated systems handle attendance and provide student insights.",
      benefits: [
        "Save 30+ minutes per class",
        "Real-time attendance data",
        "Student engagement insights",
        "Reduced administrative burden"
      ]
    },
    {
      icon: Building,
      title: "Administrators",
      description: "Gain comprehensive oversight with detailed analytics and automated reporting systems.",
      benefits: [
        "Institution-wide analytics",
        "Automated compliance reports",
        "Resource optimization",
        "Performance tracking"
      ]
    },
    {
      icon: Briefcase,
      title: "Career Counselors",
      description: "Access student activity data to provide targeted career guidance and support.",
      benefits: [
        "Student behavior insights",
        "Learning pattern analysis",
        "Goal alignment tracking",
        "Personalized guidance data"
      ]
    },
    {
      icon: Shield,
      title: "Education Departments",
      description: "Monitor institutional compliance and educational effectiveness across regions.",
      benefits: [
        "Regional oversight",
        "Compliance monitoring",
        "Performance benchmarking",
        "Policy impact analysis"
      ]
    }
  ];

  return (
    <section id="audience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for Every
            <span className="block gradient-primary bg-clip-text text-transparent">
              Education Stakeholder
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aevus serves the complete educational ecosystem, from individual students 
            to institutional administrators, creating value at every level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <Card 
              key={index} 
              className="hover:shadow-medium transition-smooth border-0 bg-card/50 backdrop-blur-sm group"
            >
              <CardHeader className="pb-4">
                <div className="gradient-primary p-4 rounded-xl w-fit shadow-soft group-hover:scale-110 transition-transform">
                  <stakeholder.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{stakeholder.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {stakeholder.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {stakeholder.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 gradient-primary rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="gradient-secondary p-8 rounded-2xl shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Institution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of educational institutions already benefiting from Aevus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                  2K+
                </div>
                <div className="text-sm text-muted-foreground">Teachers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;