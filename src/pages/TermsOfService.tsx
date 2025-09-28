import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Aevus ("the Service"), you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aevus provides smart curriculum activity and attendance management solutions for educational institutions. 
                Our services include automated attendance tracking, personalized learning recommendations, real-time 
                analytics, and educational workflow management.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. User Accounts and Registration</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  To access certain features of our Service, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security and confidentiality of your login credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Educational Institution Responsibilities</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Educational institutions using Aevus agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Ensure proper consent for student data collection and processing</li>
                  <li>Comply with applicable educational privacy laws (FERPA, COPPA, etc.)</li>
                  <li>Provide appropriate training to staff using the platform</li>
                  <li>Maintain appropriate security measures for student data</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Acceptable Use Policy</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the integrity of our Service</li>
                  <li>Use the Service for any commercial purpose without authorization</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Data and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                Privacy Policy, which is incorporated into these Terms by reference. We implement appropriate security 
                measures to protect student and institutional data in compliance with applicable privacy laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service and its original content, features, and functionality are owned by Aevus and are protected 
                by international copyright, trademark, patent, trade secret, and other intellectual property laws. 
                You may not modify, distribute, or create derivative works based on our Service without explicit permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. We may 
                temporarily suspend the Service for maintenance, updates, or other operational reasons. We will provide 
                reasonable notice when possible.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Aevus shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including loss of profits, data, or use, incurred by you or any third 
                party, whether in an action of contract or tort, arising from your access to or use of the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, 
                for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, 
                or for any other reason in our sole discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                via email or through the Service. Your continued use of the Service after such notification constitutes 
                acceptance of the new Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@aevus.com
                <br />
                Address: San Francisco, CA
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;