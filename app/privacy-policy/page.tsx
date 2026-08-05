import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | White Walls Interior Design",
  description: "Privacy Policy for White Walls Interior Design, Aizawl, Mizoram.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="prose-page">
      <Link className="back back-top" href="/">
        ← Back
      </Link>

      <h1>Privacy Policy</h1>
      <p className="meta">Last updated: April 2026</p>

      <p>
        White Walls (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the website{" "}
        <strong>whitewalls.in</strong>. This Privacy Policy explains how we collect, use, and
        protect information when you visit our website or contact us for interior design services.
        By using our website, you agree to the practices described in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information when you interact with us:</p>
      <ul>
        <li><strong>Contact information</strong> — your name, phone number, and email address when you reach out to us directly.</li>
        <li><strong>Enquiry details</strong> — information you voluntarily share about your interior design project or requirements.</li>
        <li><strong>Usage data</strong> — anonymous technical information such as your browser type, device type, pages visited, and time spent on the site, collected via standard web analytics tools.</li>
      </ul>
      <p>
        We do not operate any account registration system, and we do not collect payment
        information through this website.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>Information we collect is used solely to:</p>
      <ul>
        <li>Respond to your enquiries and provide information about our services.</li>
        <li>Schedule consultations or site visits.</li>
        <li>Improve the content and performance of our website.</li>
        <li>Comply with any applicable legal obligations.</li>
      </ul>
      <p>
        We will never sell, rent, or share your personal information with third parties for
        marketing purposes.
      </p>

      <h2>3. Cookies and Analytics</h2>
      <p>
        Our website may use cookies — small text files stored on your device — to understand
        how visitors use the site. These cookies do not identify you personally. You can
        disable cookies through your browser settings; however, some parts of the website
        may not function as intended if you do so.
      </p>
      <p>
        We may use a third-party analytics service (such as Google Analytics) to analyse
        website traffic in aggregate. This service may set its own cookies. Please refer to
        Google&apos;s Privacy Policy for details on how Google handles that data.
      </p>

      <h2>4. Third-Party Links</h2>
      <p>
        Our website contains links to external websites, including our social media pages
        (Facebook, Instagram) and partner websites. We are not responsible for the privacy
        practices of those sites. We encourage you to read their privacy policies before
        providing any personal information.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We take reasonable precautions to protect any personal information you share with
        us. Contact details received via phone or email are kept confidential and accessed
        only by authorised personnel at White Walls. We do not store sensitive personal data
        on our website servers.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain contact and project enquiry information only for as long as necessary to
        provide our services or as required by law. You may request deletion of your
        personal information at any time by contacting us.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request access to the personal information we hold about you.</li>
        <li>Request correction of inaccurate information.</li>
        <li>Request deletion of your personal information.</li>
        <li>Withdraw consent for us to contact you at any time.</li>
      </ul>
      <p>To exercise any of these rights, please contact us using the details below.</p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Our website is not directed at children under 13 years of age. We do not knowingly
        collect personal information from children. If you believe a child has provided us
        with personal information, please contact us and we will promptly delete it.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on
        this page with an updated date. We encourage you to review this page periodically.
        Continued use of the website after changes are posted constitutes your acceptance
        of the updated policy.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or how we handle
        your information, please get in touch:
      </p>
      <address>
        <strong>White Walls</strong><br />
        Gr. Floor, Solomon&apos;s Cave,<br />
        Tuikual South, Aizawl,<br />
        Mizoram &mdash; India<br />
        <br />
        Phone: <a href="tel:9654956742">9654 956 742</a>
        {" / "}
        <a href="tel:9862351441">9862 351 441</a><br />
        Email: <a href="mailto:kimi@whitewalls.in">kimi@whitewalls.in</a>
      </address>

      <Link className="back" href="/">
        ← Back
      </Link>
    </main>
  );
}
