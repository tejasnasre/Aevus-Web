import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Crown, GraduationCap, Users, User } from "lucide-react";

const RBACFlow = () => {
  const roles = [
    {
      icon: Crown,
      title: "Admin",
      description: "Complete system control with full access to all features and user management",
      permissions: ["User Management", "System Settings", "Analytics", "Backup & Restore"],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: GraduationCap,
      title: "HOD (Head of Department)",
      description: "Departmental oversight with teacher management and department-wide analytics",
      permissions: ["Teacher Management", "Department Analytics", "Schedule Management", "Report Generation"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Users,
      title: "Teacher",
      description: "Classroom management with student attendance and academic tracking capabilities",
      permissions: ["Attendance Management", "Student Progress", "Class Scheduling", "Grade Management"],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: User,
      title: "Student",
      description: "Personal dashboard with attendance tracking and academic progress monitoring",
      permissions: ["View Attendance", "Academic Progress", "Schedule Access", "Profile Management"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section id="rbac" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Role-Based Access Control System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hierarchical permission structure ensuring secure and appropriate access for every user level
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {roles.map((role, index) => {
              const Icon = role.icon;
              
              return (
                <div key={index} className="relative">
                  <Card className={`transition-smooth hover:shadow-medium ${role.borderColor} border-2`}>
                    <CardHeader className={`${role.bgColor} rounded-t-lg`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${role.bgColor} rounded-lg flex items-center justify-center border ${role.borderColor}`}>
                          <Icon className={`h-6 w-6 ${role.color}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className={`${role.color} text-xl`}>{role.title}</CardTitle>
                          <CardDescription className="mt-1 text-muted-foreground">
                            {role.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {role.permissions.map((permission, permIndex) => (
                          <Badge 
                            key={permIndex} 
                            variant="secondary" 
                            className="justify-center py-2 text-xs"
                          >
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow connector */}
                  {index < roles.length - 1 && (
                    <div className="flex justify-center py-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <ArrowDown className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-foreground">Secure Access</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Each role has precisely defined permissions, ensuring data security and appropriate access levels.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-foreground">Scalable Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Hierarchical design that adapts to institutions of any size, from small schools to large universities.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-foreground">Easy Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Intuitive role assignment and permission management with comprehensive audit trails.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RBACFlow;