import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 gradient-primary rounded-full"></div>
                <span className="text-sm font-medium text-accent-foreground">
                  Next-Gen Educational Technology
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Smart Curriculum
                <span className="block gradient-primary bg-clip-text text-transparent">
                  Activity & Attendance
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Revolutionize classroom management with automated attendance tracking 
                and personalized learning activities. Transform idle time into productive 
                educational moments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5min</div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Modern classroom with students using technology for attendance"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 gradient-secondary opacity-20"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-medium border">
              <div className="text-sm font-medium text-card-foreground">
                ✅ Real-time Tracking
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-medium border">
              <div className="text-sm font-medium text-card-foreground">
                🎯 Personalized Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;