import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Uniwik",
  description:
    "Privacy Policy for Uniwik by Sattnava Technologies Private Limited.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Simple Header */}
      <header className="border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/Uniwik-logo-black.svg"
              alt="Uniwik"
              width={110}
              height={28}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Text Content */}
      <main className="flex-1 py-12 sm:py-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 text-slate-800 text-base leading-relaxed space-y-8 font-sans">
          {/* Document Title */}
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <h1 className="text-3xl font-bold text-slate-950 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Effective Date: 16 August 2026
            </p>
          </div>

          {/* Intro */}
          <div className="space-y-4">
            <p>
              Sattnava Technologies Private Limited (“Sattnava”, “we”, “us” or “our”) operates Uniwik (“Uniwik”, “Service”, “Platform” or “Website”).
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, disclose and protect personal information when you visit our website, join our waitlist, use Uniwik or otherwise interact with us.
            </p>
            <p>
              By using the Service, you acknowledge that you have read this Privacy Policy.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">1. Who We Are</h2>
            <p>Uniwik is a product of:</p>
            <p className="font-semibold text-slate-950">Sattnava Technologies Private Limited</p>
            <p>CIN: U62099HR2025PTC134974</p>
            <p>
              Registered Office: Plot No. 251 HSIIDC, Industrial Area, Alipur, Barwala, Panchkula – 134118, Haryana, India.
            </p>
            <p>
              For privacy questions, contact us at: <a href="mailto:privacy@uniwik.com" className="text-[#0084ff] underline">privacy@uniwik.com</a>
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950">2. Information We May Collect</h2>
            <p>Depending on how you use Uniwik, we may collect the following information:</p>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900">Information you provide</h3>
              <p>This may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Account information</li>
                <li>Information you provide when contacting us</li>
                <li>Information you provide when joining a waitlist or requesting early access</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900">Saved content and links</h3>
              <p>If you use Uniwik’s saving features, we may process:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>URLs or links you choose to save</li>
                <li>Titles and other publicly available metadata associated with saved links</li>
                <li>Your collections and organization of saved items</li>
                <li>Notes or other information you voluntarily attach to saved items</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900">Technical information</h3>
              <p>We may automatically receive limited technical information such as:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address</li>
                <li>Browser and device type</li>
                <li>Operating system</li>
                <li>Approximate location derived from IP address</li>
                <li>Pages visited</li>
                <li>Date and time of access</li>
                <li>Diagnostic and security information</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900">Cookies and similar technologies</h3>
              <p>We may use cookies, local storage and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Keep the website functioning</li>
                <li>Maintain sessions</li>
                <li>Remember preferences</li>
                <li>Understand website usage</li>
                <li>Improve security and performance</li>
                <li>Measure the effectiveness of our website and marketing</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Some functionality may not work correctly if essential cookies are disabled.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">3. How We Use Information</h2>
            <p>We may use personal information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and operate Uniwik</li>
              <li>Create and maintain user accounts</li>
              <li>Save and organize content requested by users</li>
              <li>Send account, security and service-related communications</li>
              <li>Respond to enquiries and support requests</li>
              <li>Provide early-access or waitlist communications</li>
              <li>Improve our products and services</li>
              <li>Understand how users interact with the Service</li>
              <li>Detect fraud, abuse and security threats</li>
              <li>Maintain and protect our systems</li>
              <li>Comply with legal obligations</li>
              <li>Enforce our Terms of Service</li>
            </ul>
            <p>
              We will not use personal information for purposes that are incompatible with the purpose for which it was collected without an appropriate legal basis or notice where required by applicable law.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">4. Legal Bases for Processing</h2>
            <p>
              Where required by applicable law, we process personal information on one or more of the following bases:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your consent</li>
              <li>Performance of a contract or provision of requested services</li>
              <li>Compliance with legal obligations</li>
              <li>Legitimate interests, where permitted by law</li>
              <li>Protection of our users, systems and legal rights</li>
            </ul>
            <p>
              Where consent is the legal basis, you may withdraw consent subject to applicable law.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">5. Third-Party Services</h2>
            <p>We may use third-party service providers for services such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cloud hosting</li>
              <li>Authentication</li>
              <li>Email delivery</li>
              <li>Analytics</li>
              <li>Security</li>
              <li>Error monitoring</li>
              <li>Payment processing, when applicable</li>
            </ul>
            <p>
              These providers may process information on our behalf and are expected to protect it according to applicable contractual and legal requirements.
            </p>
            <p>
              We do not sell personal information simply because you use Uniwik.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">6. Links to Other Websites</h2>
            <p>Uniwik allows users to save or access links to third-party websites.</p>
            <p>
              Those websites are controlled by their respective operators and have their own privacy policies and terms.
            </p>
            <p>
              We are not responsible for the privacy practices, security, content or policies of third-party websites.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">7. Data Retention</h2>
            <p>
              We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing the Service, maintaining business records, resolving disputes, preventing fraud and complying with legal obligations.
            </p>
            <p>
              Retention periods may vary depending on the type of information and the purpose for which it is processed.
            </p>
            <p>
              When information is no longer required, we may delete or anonymize it, subject to applicable legal requirements.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">8. Data Security</h2>
            <p>
              We use reasonable technical and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration or disclosure.
            </p>
            <p>
              However, no internet transmission or storage system can be guaranteed to be completely secure.
            </p>
            <p>
              You should use strong, unique passwords and protect your account credentials.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">9. International Data Transfers</h2>
            <p>
              Uniwik is operated from India and may use service providers located in other countries.
            </p>
            <p>
              Where personal information is transferred internationally, we will take measures required by applicable data protection laws.
            </p>
            <p>
              Where laws such as the GDPR apply, we will use legally recognized transfer mechanisms where required.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">10. Your Privacy Rights</h2>
            <p>Depending on your location and applicable law, you may have rights including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to access personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete personal information</li>
              <li>Right to withdraw consent</li>
              <li>Right to restrict or object to certain processing</li>
              <li>Right to data portability</li>
              <li>Right to opt out of certain marketing communications</li>
              <li>Right to lodge a complaint with the applicable data protection authority</li>
            </ul>
            <p>
              The exact rights available to you depend on the law applicable to your location.
            </p>
            <p>
              For privacy requests, contact: <a href="mailto:privacy@uniwik.com" className="text-[#0084ff] underline">privacy@uniwik.com</a>
            </p>
            <p>
              We may need to verify your identity before completing certain requests.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">11. European Economic Area and UK Users</h2>
            <p>
              Where the GDPR or UK GDPR applies, you may have additional rights regarding your personal data.
            </p>
            <p>
              Where required, we will provide appropriate information regarding our legal basis for processing, international transfers, retention and your rights.
            </p>
            <p>
              You may also have the right to complain to your local supervisory authority.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">12. California Users</h2>
            <p>
              Where applicable California privacy law applies to us, California residents may have rights relating to access, deletion, correction and certain disclosures or uses of personal information.
            </p>
            <p>
              These rights are subject to applicable legal conditions and exemptions.
            </p>
            <p>
              We will not discriminate against you for exercising privacy rights available to you under applicable law.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">13. Children’s Privacy</h2>
            <p>Uniwik is not directed toward children.</p>
            <p>
              We do not knowingly collect personal information from children where prohibited by applicable law.
            </p>
            <p>
              If you believe that a child has provided personal information to us without appropriate authorization, contact us at <a href="mailto:privacy@uniwik.com" className="text-[#0084ff] underline">privacy@uniwik.com</a> so that we can take appropriate action.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">14. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time.</p>
            <p>
              When we make material changes, we may provide additional notice where required by law.
            </p>
            <p>
              The updated version will be posted on this page with a revised Effective Date.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-950">15. Contact Us</h2>
            <p>For privacy questions, requests or complaints:</p>
            <p className="font-semibold text-slate-950">Sattnava Technologies Private Limited</p>
            <p>
              Plot No. 251 HSIIDC, Industrial Area, Alipur, Barwala, Panchkula – 134118, Haryana, India.
            </p>
            <div className="pt-2 space-y-1">
              <p>Email: <a href="mailto:privacy@uniwik.com" className="text-[#0084ff] underline">privacy@uniwik.com</a></p>
              <p>Website: <a href="https://www.uniwik.com/" target="_blank" rel="noopener noreferrer" className="text-[#0084ff] underline">https://www.uniwik.com/</a></p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
