import React from "react";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const CancellationAndRefund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold text-orange-500 mb-2 text-center">
          Cancellation & Refund Policy
        </h1>

        {/* <p className="text-center text-sm text-gray-300 mb-6">
          <strong>Effective Date:</strong> 4th July 2025
        </p> */}

        <p className="text-white mb-8 leading-relaxed text-center">
          Thank you for choosing <strong>Thinkbhiz High Tech</strong> for your
          business listing and promotional needs. We strive to ensure a smooth
          and satisfactory experience for every user and business.
        </p>

        {/* 1. Subscription Plans */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Subscription Plans</h2>
          <p>
            Thinkbhiz High Tech offers both free and paid subscription plans
            including
            <strong> Basic, Standard, and Premium</strong>. Paid plans provide
            access to premium features and promotional benefits.
          </p>
        </section>

        {/* 2. Cancellation Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            2. Cancellation Policy
          </h2>

          <h3 className="font-semibold mb-2">Listing Cancellation</h3>
          <p className="mb-4">
            You may request cancellation of your listing or service plan at any
            time by contacting our support team.
          </p>

          <h3 className="font-semibold mb-2">Cancellation Window</h3>
          <p className="mb-4">
            To be eligible for a refund, cancellation requests must be submitted
            within <strong>3 days</strong> of the payment date.
          </p>

          <h3 className="font-semibold mb-2">After 3 Days</h3>
          <p>
            No refunds will be issued after 3 calendar days, as processing of
            listings, promotions, and assets begins immediately.
          </p>
        </section>

        {/* 3. Refund Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. Refund Policy</h2>

          <h3 className="font-semibold mb-2">Full Refund Eligibility</h3>
          <p className="mb-4">
            A 100% refund will be issued if cancellation is requested within 3
            days and no services have been initiated.
          </p>

          <h3 className="font-semibold mb-2">Partial Refund Eligibility</h3>
          <p className="mb-4">
            If services are partially completed, a pro-rated refund may be
            considered based on work done.
          </p>

          <h3 className="font-semibold mb-2">Non-Refundable Cases</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>Completed services</li>
            <li>Third-party integrations (WhatsApp API, GMB setup, etc.)</li>
            <li>Violation of terms or fraudulent information</li>
          </ul>
        </section>

        {/* 4. Refund Process */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Refund Process</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Approved refunds are processed within 7–10 business days</li>
            <li>Refunds are credited to the original payment method</li>
            <li>Email notification will be sent once refund is initiated</li>
          </ul>
        </section>

        {/* 5. Changes */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            5. Changes to This Policy
          </h2>
          <p>
            Thinkbhiz High Tech reserves the right to modify this policy at any
            time. Updates will be reflected on this page with a revised
            effective date.
          </p>
        </section>

        {/* 6. Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="font-semibold">
            📧 info@thinkbizhightech.com <br />
            📞 WhatsApp: +91-85120 01218 <br />
            🌐 www.Thinkbhiz High Tech.com
          </p>
        </section>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default CancellationAndRefund;
