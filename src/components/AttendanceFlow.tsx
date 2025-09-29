import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bluetooth, 
  MapPin, 
  Shield, 
  Camera, 
  CheckCircle, 
  ArrowRight,
  Clock
} from 'lucide-react';

const AttendanceFlow = () => {
  const steps = [
    {
      id: 'proximity',
      title: 'BLE Proximity Detection',
      icon: Bluetooth,
      description: 'Student device automatically detects teacher\'s Bluetooth beacon within classroom range',
      features: ['Automatic detection', 'Range validation', 'Low power usage', 'Secure pairing'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'location',
      title: 'GPS/Wi-Fi Validation',
      icon: MapPin,
      description: 'Confirms student is physically present within the designated classroom area',
      features: ['Geofencing technology', 'Wi-Fi verification', 'Indoor positioning', 'Location accuracy'],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'otp',
      title: 'Time-bound OTP Entry',
      icon: Shield,
      description: 'Teacher provides a time-sensitive OTP that students must enter to confirm attendance',
      features: ['Time-limited validity', 'Secure generation', 'Anti-fraud protection', 'Easy entry'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'verification',
      title: 'Biometric Verification',
      icon: Camera,
      description: 'Optional face recognition or fingerprint scan for additional security layer',
      features: ['Face recognition', 'Privacy protection', 'Quick verification', 'Fraud prevention'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section id="attendance" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Multi-Layer Attendance Flow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive 4-step verification process ensures fraud-proof attendance marking with multiple security layers
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="relative">
                  <Card className={`transition-smooth hover:shadow-medium ${step.borderColor} border-2 h-full`}>
                    <CardHeader className={`${step.bgColor} rounded-t-lg text-center`}>
                      <div className={`w-16 h-16 mx-auto mb-4 ${step.bgColor} rounded-lg flex items-center justify-center border-2 ${step.borderColor}`}>
                        <Icon className={`h-8 w-8 ${step.color}`} />
                      </div>
                      <CardTitle className={`${step.color} text-lg`}>
                        Step {index + 1}: {step.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-6">
                      <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </CardDescription>
                      
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className={`h-4 w-4 ${step.color}`} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Process Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">99.9% Fraud Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Multiple verification layers make attendance fraud virtually impossible while maintaining user convenience.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">Quick & Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Entire process completes in under 30 seconds, minimizing disruption to valuable class time.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">Real-time Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Instant attendance updates with live notifications to parents, teachers, and administrators.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceFlow;