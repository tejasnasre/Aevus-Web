import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Users, BookOpen, ArrowRight } from "lucide-react";
import studentsImage from "@/assets/students-learning.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 30+ Minutes Daily",
      description: "Eliminate manual attendance taking and redirect valuable time to actual teaching and learning.",
      stat: "30min",
      statLabel: "Saved per class"
    },
    {
      icon: TrendingUp,
      title: "Boost Academic Performance",
      description: "Structured free-period activities improve student engagement and learning outcomes by 40%.",
      stat: "40%",
      statLabel: "Performance increase"
    },
    {
      icon: Users,
      title: "Enhance Student Engagement",
      description: "Personalized learning recommendations keep students motivated and focused on their goals.",
      stat: "85%",
      statLabel: "Student satisfaction"
    },
    {
      icon: BookOpen,
      title: "Maximize Learning Time",
      description: "Transform idle periods into productive learning sessions aligned with curriculum goals.",
      stat: "100%",
      statLabel: "Time utilization"
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Transform Your
                <span className="block gradient-primary bg-clip-text text-transparent">
                  Educational Impact
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover how Aevus revolutionizes classroom efficiency while creating 
                meaningful learning opportunities for every student.
              </p>
            </div>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-soft bg-card/30 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="gradient-primary p-2 rounded-lg shadow-soft">
                        <benefit.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{benefit.title}</CardTitle>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                            {benefit.stat}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {benefit.statLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="hero" size="xl" className="group">
              See All Benefits
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={studentsImage}
                alt="Students engaged in productive learning activities during free period"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 gradient-secondary opacity-20"></div>
            </div>

            {/* Floating stats */}
            <div className="absolute top-8 right-8 bg-card p-6 rounded-xl shadow-medium border">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                  99.2%
                </div>
                <div className="text-sm text-muted-foreground">Attendance Accuracy</div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-card p-6 rounded-xl shadow-medium border">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Schools Using</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;