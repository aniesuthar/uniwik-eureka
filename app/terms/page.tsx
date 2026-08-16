import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Uniwik",
  description:
    "Terms & Conditions for Uniwik by Sattnava Technologies Private Limited.",
};

export default function TermsPage() {
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
              TERMS &amp; CONDITIONS
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
              These Terms &amp; Conditions govern your access to and use of the Uniwik website, application and related services.
            </p>
            <p>
              By accessing or using Uniwik, you agree to these Terms. If you do not agree with these Terms, please do not use the Service.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">1. About Uniwik</h2>
            <p>
              Uniwik is a technology platform that allows users to save, organize and revisit products, brands, links and other content they discover online.
            </p>
            <p>
              Uniwik may retrieve publicly available information such as titles, images and other metadata associated with links saved by users.
            </p>
            <p>
              Uniwik does not own or control the third-party websites, brands or platforms linked through the Service.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">2. Eligibility</h2>
            <p>
              You may use Uniwik only if you are legally capable of entering into a binding agreement under the laws applicable to you.
            </p>
            <p>
              If you use Uniwik on behalf of a business or organization, you confirm that you have authority to accept these Terms on its behalf.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">3. User Accounts</h2>
            <p>Certain features may require you to create an account.</p>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Providing accurate information</li>
              <li>Keeping your account credentials secure</li>
              <li>Preventing unauthorized access to your account</li>
              <li>Notifying us if you believe your account has been compromised</li>
            </ul>
            <p>
              You are responsible for activity performed through your account, except where applicable law provides otherwise.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">4. Saving Links and Third-Party Content</h2>
            <p>Uniwik allows users to save links to third-party websites and platforms.</p>
            <p>Saving a link does not mean that Uniwik:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>owns the linked content;</li>
              <li>endorses the linked product or brand;</li>
              <li>guarantees the accuracy of the information; or</li>
              <li>has a relationship with the third-party website.</li>
            </ul>
            <p>Third-party websites may change, remove or restrict their content at any time.</p>
            <p>Uniwik is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Third-party products</li>
              <li>Product quality</li>
              <li>Product authenticity</li>
              <li>Prices</li>
              <li>Availability</li>
              <li>Shipping</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Refunds</li>
              <li>Warranties</li>
              <li>Third-party policies</li>
            </ul>
            <p>
              Any purchase or transaction made through a third-party website is between you and that third party.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">5. Link Metadata</h2>
            <p>Uniwik may automatically retrieve publicly available information associated with saved URLs.</p>
            <p>This may include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Page title</li>
              <li>Website/domain</li>
              <li>Preview image</li>
              <li>Platform information</li>
              <li>Other publicly available metadata</li>
            </ul>
            <p>Metadata may sometimes be unavailable, incomplete, inaccurate or outdated.</p>
            <p>
              Some websites may prevent automated access to their information. Therefore, Uniwik does not guarantee that every saved link will display a preview image, title or other metadata.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">6. User Content</h2>
            <p>Users may save links, create collections, add notes and provide other content through Uniwik.</p>
            <p>You remain responsible for the content you submit or save.</p>
            <p>You must have the necessary rights to submit any content that you upload or provide to Uniwik.</p>
            <p>You must not use Uniwik to store, share or distribute content that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>violates applicable law;</li>
              <li>infringes another person&apos;s intellectual property rights;</li>
              <li>violates privacy or publicity rights;</li>
              <li>contains malicious software;</li>
              <li>is fraudulent or deceptive; or</li>
              <li>is otherwise prohibited by applicable law.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">7. Intellectual Property</h2>
            <p>
              The Uniwik name, logo, software, website design, interface, original text, graphics and other materials created by Sattnava Technologies Private Limited are owned by or licensed to Sattnava Technologies Private Limited unless otherwise stated.
            </p>
            <p>
              You may not copy, reproduce, modify, distribute, sell, lease or reverse engineer our proprietary materials except where permitted by law or with our written permission.
            </p>
            <p>
              Third-party trademarks, logos and content remain the property of their respective owners.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">8. Copyright and Intellectual Property Complaints</h2>
            <p>
              If you believe that content accessible through Uniwik infringes your copyright or other intellectual property rights, you may contact us.
            </p>
            <p>Your complaint should include sufficient information to identify:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The copyrighted work or right involved</li>
              <li>The allegedly infringing material</li>
              <li>The relevant URL</li>
              <li>Your contact details</li>
              <li>An explanation of your rights and the basis of your complaint</li>
            </ul>
            <p>We may investigate and take appropriate action where required.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">9. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use Uniwik for unlawful purposes</li>
              <li>Attempt unauthorized access to our systems</li>
              <li>Interfere with the operation or security of the Service</li>
              <li>Upload malicious code</li>
              <li>Abuse or overload our systems</li>
              <li>Scrape or extract data in violation of our technical restrictions</li>
              <li>Impersonate another person or organization</li>
              <li>Infringe the rights of others</li>
              <li>Circumvent security measures</li>
              <li>Use the Service to commit fraud or facilitate unlawful activity</li>
            </ul>
            <p>
              We may restrict or terminate access where reasonably necessary to protect the Service, users or our legal rights, subject to applicable law.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">10. Service Availability</h2>
            <p>Uniwik is an evolving product.</p>
            <p>We may modify, update, suspend or discontinue features of the Service from time to time.</p>
            <p>We may also temporarily suspend access for maintenance, security updates or technical reasons.</p>
            <p>We do not guarantee that the Service will always be available, uninterrupted or error-free.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">11. Third-Party Services</h2>
            <p>
              Uniwik may use third-party services for hosting, authentication, analytics, communications, security, payments and other technical functions.
            </p>
            <p>Your use of third-party services may also be subject to their respective terms and policies.</p>
            <p>We are not responsible for the operation, availability or policies of third-party services.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">12. No Guarantee of Third-Party Information</h2>
            <p>Information obtained from third-party websites may change without notice.</p>
            <p>Uniwik does not guarantee the accuracy, completeness, reliability or current status of third-party information.</p>
            <p>Users should independently verify information before making purchasing or other decisions.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">13. Payments and Purchases</h2>
            <p>If Uniwik later provides payment, affiliate or commerce-related features, additional terms may apply.</p>
            <p>Unless expressly stated otherwise, Uniwik is not the seller of products displayed through third-party links.</p>
            <p>Any purchase made from a third-party merchant is governed by the merchant&apos;s terms, policies and applicable law.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">14. Disclaimer</h2>
            <p>To the maximum extent permitted by applicable law, Uniwik is provided on an “as is” and “as available” basis.</p>
            <p>We do not guarantee that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Uniwik will meet every user&apos;s requirements;</li>
              <li>the Service will always be available;</li>
              <li>information will always be accurate;</li>
              <li>third-party links will remain available;</li>
              <li>saved content will always remain accessible; or</li>
              <li>the Service will be free from errors or interruptions.</li>
            </ul>
            <p>Nothing in these Terms excludes rights or protections that cannot legally be excluded under applicable law.</p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">15. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Sattnava Technologies Private Limited and its officers, employees and service providers will not be responsible for indirect, incidental, special or consequential losses arising from your use of Uniwik.
            </p>
            <p>Where liability cannot legally be excluded, it will be limited to the maximum extent permitted by applicable law.</p>
            <p>Nothing in these Terms limits liability where such limitation is prohibited by law.</p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">16. Indemnification</h2>
            <p>
              To the extent permitted by applicable law, you agree to indemnify and hold harmless Sattnava Technologies Private Limited from claims, losses, liabilities and reasonable expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your violation of these Terms</li>
              <li>Your unlawful use of Uniwik</li>
              <li>Your violation of another person&apos;s rights</li>
              <li>Content you submit without having the necessary rights</li>
            </ul>
            <p>This does not apply to the extent that applicable law prohibits such indemnification.</p>
          </section>

          {/* Section 17 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">17. Suspension or Termination</h2>
            <p>You may stop using Uniwik at any time.</p>
            <p>We may suspend or terminate access where reasonably necessary because of:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violation of these Terms</li>
              <li>Fraudulent or unlawful activity</li>
              <li>Security concerns</li>
              <li>Abuse of the Service</li>
              <li>Legal or regulatory requirements</li>
            </ul>
            <p>Where required by applicable law, appropriate notice or procedures will be provided.</p>
          </section>

          {/* Section 18 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">18. Changes to These Terms</h2>
            <p>We may update these Terms as Uniwik develops.</p>
            <p>When material changes are made, we may provide reasonable notice where required by applicable law.</p>
            <p>The updated Terms will be posted on this page with a new Effective Date.</p>
          </section>

          {/* Section 19 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">19. Privacy</h2>
            <p>
              Your use of Uniwik is also subject to our Privacy Policy, which explains how we collect, use, store and protect personal information.
            </p>
          </section>

          {/* Section 20 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">20. Governing Law</h2>
            <p>These Terms are governed by the laws of India, except to the extent that mandatory laws of your jurisdiction apply.</p>
            <p>Nothing in these Terms is intended to remove or restrict mandatory consumer or legal protections that cannot legally be excluded.</p>
          </section>

          {/* Section 21 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">21. Dispute Resolution</h2>
            <p>If you have a dispute with Uniwik, we encourage you to contact us first so that we can attempt to resolve the issue.</p>
            <p>
              Subject to applicable law, disputes that cannot be resolved informally will be subject to the courts having appropriate jurisdiction in Haryana, India.
            </p>
            <p>Nothing in this clause prevents a consumer from exercising mandatory legal rights available in their jurisdiction.</p>
          </section>

          {/* Section 22 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">22. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.
            </p>
          </section>

          {/* Section 23 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">23. Entire Agreement</h2>
            <p>
              These Terms, together with the Privacy Policy and any additional terms applicable to specific features, constitute the terms governing your use of Uniwik, subject to applicable law.
            </p>
          </section>

          {/* Section 24 */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-950">24. Contact Us</h2>
            <p className="font-semibold text-slate-950">Sattnava Technologies Private Limited</p>
            <p>CIN: U62099HR2025PTC134974</p>
            <p>
              Registered Office:<br />
              Plot No. 251 HSIIDC, Industrial Area,<br />
              Alipur, Barwala, Panchkula – 134118,<br />
              Haryana, India.
            </p>
            <div className="pt-2 space-y-1">
              <p>General: <a href="mailto:support@uniwik.com" className="text-[#0084ff] underline">support@uniwik.com</a></p>
              <p>Legal: <a href="mailto:legal@uniwik.com" className="text-[#0084ff] underline">legal@uniwik.com</a></p>
              <p>Privacy: <a href="mailto:privacy@uniwik.com" className="text-[#0084ff] underline">privacy@uniwik.com</a></p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
