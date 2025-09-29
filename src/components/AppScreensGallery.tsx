import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { Monitor, Smartphone, Users, Shield } from "lucide-react";

const AppScreensGallery = () => {
  const [activeCategory, setActiveCategory] = useState('admin');

  const screenCategories = {
    admin: {
      title: 'Admin Dashboard',
      description: 'Complete system oversight and management interface',
      screens: [
        {
          name: 'Dashboard Overview',
          image: '/src/assets/admin/AdminDashboard.png',
          description: 'Main dashboard with system analytics and overview'
        },
        {
          name: 'Profile Management',
          image: '/src/assets/admin/AdminProfilepage.png',
          description: 'Admin profile settings and configuration'
        },
        {
          name: 'Quick Actions',
          image: '/src/assets/admin/AdminQuickActions.png',
          description: 'Fast access to common administrative tasks'
        },
        {
          name: 'Student Management',
          image: '/src/assets/admin/AdminStudentManagement.png',
          description: 'Comprehensive student data management'
        },
        {
          name: 'Teacher Management',
          image: '/src/assets/admin/AdminTeacherManagement.png',
          description: 'Teacher approval and management system'
        },
        {
          name: 'HOD Management',
          image: '/src/assets/admin/HODpageInAdminTab.png',
          description: 'Head of Department oversight and controls'
        }
      ]
    },
    auth: {
      title: 'Authentication Flow',
      description: 'Secure login and onboarding experience',
      screens: [
        {
          name: 'Welcome Screen',
          image: '/src/assets/auth/Welcome.png',
          description: 'App introduction and welcome message'
        },
        {
          name: 'Sign In',
          image: '/src/assets/auth/SignIn.png',
          description: 'Secure authentication interface'
        },
        {
          name: 'Sign Up',
          image: '/src/assets/auth/Signup.png',
          description: 'New user registration process'
        },
        {
          name: 'Permissions',
          image: '/src/assets/auth/Permission-Screen.png',
          description: 'App permissions and privacy settings'
        },
        {
          name: 'Location Access',
          image: '/src/assets/auth/Location-Permission.png',
          description: 'Location services permission request'
        }
      ]
    }
  };

  return (
    <section id="screens" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            App Interface Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the intuitive design and powerful features across all user roles
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {Object.entries(screenCategories).map(([key, category]) => (
              <Button
                key={key}
                onClick={() => setActiveCategory(key)}
                variant={activeCategory === key ? "default" : "outline"}
                className="transition-smooth"
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Current Category Info */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            {screenCategories[activeCategory as keyof typeof screenCategories].title}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {screenCategories[activeCategory as keyof typeof screenCategories].description}
          </p>
        </div>

        {/* Screens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {screenCategories[activeCategory as keyof typeof screenCategories].screens.map((screen, index) => (
            <Card key={index} className="transition-smooth hover:shadow-medium">
              <CardHeader className="pb-4">
                <div className="w-full aspect-[9/16] bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={screen.image}
                    alt={screen.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement!;
                      const placeholder = document.createElement('div');
                      placeholder.className = 'w-full h-full flex items-center justify-center bg-muted';
                      placeholder.innerHTML = `
                        <div class="text-center p-8">
                          <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <p class="text-foreground font-medium">${screen.name}</p>
                          <p class="text-muted-foreground text-sm mt-2">Screen Preview</p>
                        </div>
                      `;
                      parent.appendChild(placeholder);
                    }}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-foreground mb-2">{screen.name}</CardTitle>
                <CardDescription>{screen.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Intuitive Design",
              description: "User-friendly interface across all roles",
              icon: Monitor
            },
            {
              title: "Mobile-First",
              description: "Optimized for smartphones and tablets",
              icon: Smartphone
            },
            {
              title: "Role-Based UI",
              description: "Customized interface for each user type",
              icon: Users
            },
            {
              title: "Secure Access",
              description: "Protected screens with proper authentication",
              icon: Shield
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppScreensGallery;