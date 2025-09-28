import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aevus ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you use our smart curriculum 
                activity and attendance management service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Student Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Student identification numbers and basic demographic information</li>
                  <li>Attendance records and participation data</li>
                  <li>Academic performance and learning activity engagement</li>
                  <li>Device identifiers for proximity-based attendance tracking</li>
                  <li>Biometric data (facial recognition) when enabled and consented to</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground">Institutional Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Institution name, address, and contact information</li>
                  <li>Staff and administrator account details</li>
                  <li>Curriculum and scheduling information</li>
                  <li>Usage analytics and system performance data</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>IP addresses, browser types, and device information</li>
                  <li>Log data including access times and pages viewed</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Location data (when location services are enabled)</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide and maintain our attendance tracking and curriculum management services</li>
                  <li>Generate personalized learning recommendations and activities</li>
                  <li>Create attendance reports and analytics for educational institutions</li>
                  <li>Improve our services through usage analysis and feedback</li>
                  <li>Ensure system security and prevent unauthorized access</li>
                  <li>Comply with legal obligations and educational regulations</li>
                  <li>Communicate with users about service updates and support</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We process personal information based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Legitimate Interest:</strong> To provide educational services and improve learning outcomes</li>
                <li><strong>Consent:</strong> For biometric data collection and non-essential features</li>
                <li><strong>Legal Obligation:</strong> To comply with educational privacy laws and regulations</li>
                <li><strong>Contract:</strong> To fulfill our service agreement with educational institutions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Information Sharing and Disclosure</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent student personal information. We may share information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>With the student's educational institution and authorized personnel</li>
                  <li>With parents/guardians as permitted by educational privacy laws</li>
                  <li>With service providers who assist in delivering our services (under strict confidentiality)</li>
                  <li>When required by law, court order, or government regulation</li>
                  <li>To protect the rights, property, or safety of Aevus, users, or others</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and privacy</li>
                <li>Incident response procedures for potential data breaches</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, 
                comply with legal obligations, and resolve disputes. Student records are typically retained according to 
                institutional policies and applicable educational regulations. Upon request or contract termination, 
                we will securely delete or return data as required.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Your Rights</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data under certain circumstances</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Restriction:</strong> Request limitation of processing under certain conditions</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Children's Privacy (COPPA Compliance)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are designed for educational use and may be used by children under 13. We comply with the 
                Children's Online Privacy Protection Act (COPPA) and only collect, use, and disclose children's personal 
                information with appropriate consent from schools acting as agents for parents or direct parental consent 
                where required.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are located outside the United States, please note that we may transfer your information to and 
                process it in the United States. We ensure appropriate safeguards are in place for international transfers 
                in compliance with applicable data protection laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. 
                We will notify you of any material changes by email or through our service. Your continued use of our 
                services after such notification constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                <br />
                Email: privacy@aevus.com
                <br />
                Data Protection Officer: dpo@aevus.com
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

export default PrivacyPolicy;