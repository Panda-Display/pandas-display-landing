import React from "react";
import Layout from "../App";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="bg-white flex justify-center items-center py-20 sm:py-25">
        <div className="w-[90%] sm:w-[80%] max-w-4xl space-y-[55px]">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-text">
              Privacy Policy – Panda Display Limited
            </h1>
            <p className="text-footer-grey text-sm sm:text-base">
              Effective Date: January 12, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="text-text leading-relaxed space-y-4">
            <p>
              Panda Display Limited ("we," "our," or "us") is committed to
              protecting your personal data and respecting your privacy. This
              Privacy Policy explains how we collect, use, store, and protect
              your information when you interact with our website, products, and
              services.
            </p>
            <p>
              By using our website and services, you consent to the practices
              described in this Policy.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              1. Who We Are
            </h2>
            <p className="text-text leading-relaxed">
              Panda Display Limited is a Nigerian-based company providing LED
              display screen sales, rentals, installations, servicing, and
              maintenance. While we primarily operate in Nigeria, we also serve
              clients in other countries.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              2. Information We Collect
            </h2>
            <p className="text-text leading-relaxed">
              We may collect the following types of personal and business
              information:
            </p>

            {/* Subsection a */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg sm:text-xl text-text">
                a. Information You Provide Directly
              </h3>
              <ul className="list-disc list-inside space-y-2 text-text ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Project details</li>
                <li>Billing and payment information</li>
                <li>Messages sent via contact forms or email</li>
              </ul>
            </div>

            {/* Subsection b */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg sm:text-xl text-text">
                b. Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside space-y-2 text-text ml-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on our website</li>
              </ul>
              <p className="text-text leading-relaxed">
                This data helps us understand how visitors use our website and
                improve performance.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              3. How We Use Your Information
            </h2>
            <p className="text-text leading-relaxed">
              We use your data for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>To respond to inquiries and provide customer support</li>
              <li>To process orders, rentals, and service requests</li>
              <li>To issue invoices and receive payments</li>
              <li>To improve our website and services</li>
              <li>
                To send service updates, quotations, and project communications
              </li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              We <strong>do not sell, rent, or trade your personal information</strong> to third parties.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              4. Legal Basis for Data Processing
            </h2>
            <p className="text-text leading-relaxed">
              We process your personal data based on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Your <strong>consent</strong></li>
              <li>The need to <strong>perform a contract</strong></li>
              <li>Compliance with <strong>legal obligations</strong></li>
              <li>Our <strong>legitimate business interests</strong></li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              This applies under the <strong>Nigeria Data Protection Act (NDPA)</strong> and
              international data protection principles where applicable.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              5. Cookies & Tracking Technologies
            </h2>
            <p className="text-text leading-relaxed">
              Our website may use cookies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Improve website functionality</li>
              <li>Track website traffic</li>
              <li>Remember user preferences</li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              You may disable cookies through your browser settings. However,
              some website features may not function properly if cookies are
              disabled.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              6. Data Sharing & Third Parties
            </h2>
            <p className="text-text leading-relaxed">
              We may share your data only with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Payment processors</li>
              <li>Website hosting providers</li>
              <li>IT and service support partners</li>
              <li>Legal or regulatory authorities (when required by law)</li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              All third parties are required to handle your data securely and
              lawfully.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              7. Data Storage & Security
            </h2>
            <p className="text-text leading-relaxed">
              We implement industry-standard security measures to protect your
              personal data from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Unauthorized access</li>
              <li>Loss or misuse</li>
              <li>Alteration or disclosure</li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              However, no online transmission is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              8. Data Retention
            </h2>
            <p className="text-text leading-relaxed">
              We retain personal data only for as long as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>It is necessary to provide our services</li>
              <li>Required for accounting or legal purposes</li>
              <li>You maintain an active relationship with us</li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              When data is no longer required, it is securely deleted.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              9. Your Rights Under Data Protection Laws
            </h2>
            <p className="text-text leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              Requests can be made by contacting us using the details below.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              10. International Data Transfers
            </h2>
            <p className="text-text leading-relaxed">
              If you are accessing our services from outside Nigeria, your data
              may be transferred to and processed in Nigeria. By using our
              services, you consent to this transfer in compliance with this
              Privacy Policy.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              11. Third-Party Websites
            </h2>
            <p className="text-text leading-relaxed">
              Our website may contain links to external websites. Panda Display
              Limited is not responsible for the privacy practices or content of
              third-party websites.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              12. Children's Privacy
            </h2>
            <p className="text-text leading-relaxed">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal data from minors.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              13. Changes to This Privacy Policy
            </h2>
            <p className="text-text leading-relaxed">
              We may update this Privacy Policy at any time. Changes will be
              published on this page with an updated effective date. Continued
              use of our website indicates acceptance of the updated policy.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              14. Contact Information
            </h2>
            <p className="text-text leading-relaxed">
              For questions, data requests, or privacy concerns, contact:
            </p>
            <div className="text-text leading-relaxed space-y-2 pl-4">
              <p className="font-semibold">Panda Display Limited</p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:pandadisplayglobal@gmail.com"
                  className="text-primary hover:underline"
                >
                  pandadisplayglobal@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span> 08185088668,
                08091205298
              </p>
              <p>
                <span className="font-semibold">Office Address:</span> 5 Olumo
                Close, Aso Drive
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
