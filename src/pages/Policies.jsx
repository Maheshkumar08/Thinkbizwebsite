import React from "react";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const Policies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold text-orange-500 mb-2 text-center">
          Privacy Policy
        </h1>

        {/* <p className="text-center text-sm text-gray-300 mb-6">
          <strong>Effective Date:</strong> 9th June 2025
        </p> */}

        <p className="text-white mb-8 leading-relaxed text-center">
          Welcome to <strong>Thinkbiz High Tech </strong>! This Privacy Policy
          explains how Thinkbiz High Tech (“we”, “our”, or “us”) collects, uses,
          shares, and protects information about you when you use our website
          <strong> www.Thinkbiz High Tech.com</strong>.
          <br />
          <br />
          By using this website, you agree to the terms of this Privacy Policy.
        </p>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>

          <h3 className="font-semibold mb-2">1.1 Information You Provide</h3>
          <ul className="list-disc pl-8 space-y-2 mb-4">
            <li>
              <strong>Personal Details:</strong> Name, email, phone number,
              business name
            </li>
            <li>
              <strong>Business Information:</strong> Category, address, service
              details, photos
            </li>
            <li>
              <strong>Feedback & Reviews:</strong> Ratings, reviews, comments
            </li>
          </ul>

          <h3 className="font-semibold mb-2">
            1.2 Information We Collect Automatically
          </h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              <strong>Device & Usage Data:</strong> IP address, browser type,
              operating system, pages visited
            </li>
            <li>
              <strong>Location Data:</strong> Approximate location via IP for
              showing relevant listings
            </li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Display accurate business listings and local services</li>
            <li>Enable search functionality and geo-targeted results</li>
            <li>Improve user experience and personalize content</li>
            <li>
              Send important updates or promotional communications (with
              consent)
            </li>
            <li>Detect fraud or misuse of the platform</li>
            <li>Provide customer support and respond to queries</li>
          </ul>
        </section>

        {/* Sharing */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            3. Sharing of Information
          </h2>
          <p className="mb-4">We do not sell your personal information.</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Service providers (hosting, analytics, email, payments)</li>
            <li>Legal authorities when required by law</li>
            <li>
              Business listings when you choose to contact a business directly
            </li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            4. Cookies & Tracking Technologies
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Understand user behavior</li>
            <li>Improve website speed and performance</li>
            <li>Save user preferences</li>
          </ul>
          <p className="mt-3">
            You can control or disable cookies through your browser settings.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We use appropriate technical and organizational measures to protect
            your data. However, no internet transmission is 100% secure.
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt-out of promotional emails</li>
            <li>Disable cookies or location tracking</li>
          </ul>
          <p className="mt-3">
            Contact us at: <strong>info@thinkbizhightech.com</strong>
          </p>
        </section>

        {/* Children */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">7. Children’s Privacy</h2>
          <p>
            Thinkbiz High Tech is not intended for children under the age of 13.
            We do not knowingly collect data from children.
          </p>
        </section>

        {/* Third Party */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
          <p>
            We may link to third-party websites. We are not responsible for
            their privacy practices.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this policy periodically. Continued use of the website
            indicates acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="font-semibold">
            📧info@thinkbizhightech.com <br />
            📞 +91-85120 01218
          </p>
        </section>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default Policies;
