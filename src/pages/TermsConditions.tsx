import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsConditions = () => {
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
            <h1 className="text-4xl font-bold text-foreground">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Agreement Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Aevus 
                regarding your use of our smart curriculum activity and attendance management platform. By accessing 
                or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Platform Access and Usage</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Authorized Users</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Educational institution administrators and authorized staff</li>
                  <li>Teachers and faculty members with proper credentials</li>
                  <li>Students enrolled in participating institutions</li>
                  <li>Parents/guardians with appropriate access permissions</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground">Usage Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Must be affiliated with a registered educational institution</li>
                  <li>Required to maintain current and accurate account information</li>
                  <li>Must comply with institutional policies and procedures</li>
                  <li>Responsible for all activities conducted under your account</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Service Features and Functionality</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Attendance Tracking</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>QR code-based attendance marking</li>
                  <li>Bluetooth and Wi-Fi proximity detection</li>
                  <li>Facial recognition technology (where consented)</li>
                  <li>Real-time attendance dashboard and reporting</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground">Curriculum Management</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Personalized learning activity recommendations</li>
                  <li>Integration with existing timetable systems</li>
                  <li>Progress tracking and analytics</li>
                  <li>Goal-based learning path optimization</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Institution Responsibilities</h2>
              
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Educational institutions agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Obtain necessary consents for student data collection and processing</li>
                  <li>Ensure compliance with applicable privacy laws (FERPA, GDPR, etc.)</li>
                  <li>Provide adequate training to staff and users</li>
                  <li>Maintain appropriate data security measures</li>
                  <li>Regularly review and update user access permissions</li>
                  <li>Report any suspected security incidents promptly</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Student and Parent Rights</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Student Rights</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Right to accurate attendance records</li>
                  <li>Access to their own educational data and progress</li>
                  <li>Privacy protection in accordance with applicable laws</li>
                  <li>Opt-out options for non-essential features</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground">Parent/Guardian Rights</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access to their child's attendance and progress data</li>
                  <li>Right to review and request correction of inaccurate information</li>
                  <li>Notification of significant changes in data processing</li>
                  <li>Right to request deletion of data under certain circumstances</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Prohibited Activities</h2>
              
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Users are strictly prohibited from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Attempting to circumvent attendance tracking systems</li>
                  <li>Sharing login credentials or allowing unauthorized access</li>
                  <li>Accessing data beyond their authorized scope</li>
                  <li>Using the platform for non-educational commercial purposes</li>
                  <li>Introducing malware, viruses, or harmful code</li>
                  <li>Reverse engineering or attempting to extract source code</li>
                  <li>Violating any applicable laws, regulations, or institutional policies</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Service Level and Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to maintain 99.9% uptime, Aevus does not guarantee uninterrupted service availability. 
                Scheduled maintenance, emergency updates, and unforeseen technical issues may cause temporary service 
                interruptions. We will provide advance notice of planned maintenance when possible and work to minimize 
                any disruption to educational activities.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Data Ownership and Portability</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Data ownership and portability provisions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Educational institutions retain ownership of all student and institutional data</li>
                  <li>Students and parents maintain rights to their personal information</li>
                  <li>Data export capabilities available in standard formats</li>
                  <li>Secure data deletion upon contract termination</li>
                  <li>Transition assistance for migrating to alternative platforms</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Billing and Payment (For Paid Services)</h2>
              <p className="text-muted-foreground leading-relaxed">
                For institutions using paid service tiers, billing occurs monthly or annually as selected. Payment is 
                due within 30 days of invoice date. Late payments may result in service suspension. Institutions may 
                cancel their subscription with 30 days written notice, with access continuing through the end of the 
                current billing period.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Liability and Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aevus provides services "as is" and limits liability to the maximum extent permitted by law. Educational 
                institutions agree to indemnify Aevus against claims arising from their use of the platform, violation 
                of these terms, or breach of applicable laws. Our total liability shall not exceed the amount paid for 
                services in the preceding 12 months.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with 
                the rules of the American Arbitration Association. The arbitration shall take place in San Francisco, 
                California, and be conducted in English. Both parties waive their right to a jury trial.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Modifications and Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aevus reserves the right to modify these Terms at any time. Material changes will be communicated via 
                email or platform notification at least 30 days before taking effect. Continued use of the service 
                after the effective date constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms and Conditions, please contact:
                <br />
                Email: legal@aevus.com
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: San Francisco, CA
                <br />
                Business Hours: Monday-Friday, 9 AM - 6 PM PST
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;