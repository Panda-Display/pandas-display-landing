import React from "react";
import Layout from "../App";

const TermsAndConditions = () => {
  return (
    <Layout>
      <section className="bg-white flex justify-center items-center py-20 sm:py-25">
        <div className="w-[90%] sm:w-[80%] max-w-4xl space-y-[55px]">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-text">
              Terms & Conditions – Panda Display Limited
            </h1>
            <p className="text-footer-grey text-sm sm:text-base">
              Effective Date: January 12, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="text-text leading-relaxed space-y-4">
            <p>
              Welcome to <strong>Panda Display Limited</strong>. By accessing our website,
              engaging our services, or purchasing our products, you agree to
              comply with and be legally bound by these Terms and Conditions. If
              you do not agree, please discontinue use immediately.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              1. Company Information
            </h2>
            <p className="text-text leading-relaxed">
              Panda Display Limited is a digital display solutions company
              primarily operating in Nigeria, providing LED screen sales,
              rentals, installations, servicing, and maintenance. While our
              operations are based in Nigeria, we are open to working with
              clients in other countries under mutually agreed terms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              2. Use of Website
            </h2>
            <p className="text-text leading-relaxed">
              You agree to use this website for lawful purposes only. You must
              not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Interfere with website security or functionality</li>
              <li>Attempt unauthorized access</li>
              <li>Upload malware, spam, or harmful content</li>
              <li>Use the site for deceptive or fraudulent purposes</li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              We reserve the right to block access for any misuse of the
              platform.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              3. Products & Services
            </h2>
            <p className="text-text leading-relaxed">
              Our services include but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Sale of LED display screens</li>
              <li>Rental of LED screens</li>
              <li>Installation & configuration</li>
              <li>Maintenance & technical support</li>
              <li>Consultation services</li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              All descriptions, images, pricing, and availability are subject to
              change without notice. Final details are confirmed through official
              quotations or service agreements.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              4. Orders & Payments
            </h2>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>
                All orders must be confirmed in writing (email, invoice, or
                contract).
              </li>
              <li>
                A deposit or full payment may be required before execution.
              </li>
              <li>
                Payments made are <strong>non-refundable once work has commenced</strong>, except
                otherwise stated in writing.
              </li>
              <li>
                We reserve the right to cancel any order due to incorrect
                pricing, stock issues, or suspected fraud.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              5. Installation & Execution
            </h2>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>
                Installation timelines provided are estimates and may change due
                to weather, site readiness, power availability, logistics, or
                third-party delays.
              </li>
              <li>
                The client must provide a safe and accessible installation
                environment.
              </li>
              <li>
                Additional work outside the agreed scope will attract extra
                charges.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              6. Warranty & Maintenance
            </h2>
            <p className="text-text leading-relaxed">
              All LED products come with a <strong>limited warranty</strong> as stated in the
              invoice or contract.
            </p>
            <p className="text-text leading-relaxed mt-4">
              Warranty excludes damage caused by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Power surges</li>
              <li>Water damage (unless waterproof rated)</li>
              <li>Physical impact or mishandling</li>
              <li>Unauthorized repairs</li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              Optional maintenance contracts are governed by separate service
              agreements.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              7. Returns & Refund Policy
            </h2>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>
                Returns may be accepted within <strong>[7–14] days</strong> of delivery if unused
                and in original condition.
              </li>
              <li>
                Customized screens, rentals, and special orders are
                <strong> non-refundable</strong>.
              </li>
              <li>
                Refunds (if approved) will be processed within <strong>[7–21] working
                days</strong> after inspection.
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              8. Client Responsibilities
            </h2>
            <p className="text-text leading-relaxed">Clients agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Provide accurate project details</li>
              <li>Ensure stable power supply</li>
              <li>Secure necessary permits</li>
              <li>
                Protect installed equipment from theft, misuse, or vandalism
              </li>
            </ul>
            <p className="text-text leading-relaxed mt-4">
              Panda Display Limited will not be liable for damages caused by
              client negligence.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              9. Intellectual Property
            </h2>
            <p className="text-text leading-relaxed">
              All website content including text, images, videos, designs, and
              branding belong to Panda Display Limited and are protected under
              copyright laws. You may not reproduce or redistribute any content
              without prior written consent.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              10. Limitation of Liability
            </h2>
            <p className="text-text leading-relaxed">
              To the fullest extent permitted under Nigerian law and applicable
              international laws, Panda Display Limited shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Business or income loss</li>
              <li>Equipment downtime</li>
              <li>Data loss</li>
              <li>Indirect or consequential damages</li>
              <li>Third-party interference</li>
              <li>Force majeure events</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              11. Force Majeure
            </h2>
            <p className="text-text leading-relaxed">
              We shall not be held liable for failure or delay caused by
              circumstances beyond our reasonable control including natural
              disasters, strikes, government actions, supply chain disruptions,
              power failures, or civil unrest.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              12. Third-Party Links
            </h2>
            <p className="text-text leading-relaxed">
              Our website may contain links to external websites. We are not
              responsible for their content, security, or data handling
              practices.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              13. Privacy & Data Protection
            </h2>
            <p className="text-text leading-relaxed">
              We collect and use personal data strictly for service delivery and
              communication. Your data is handled in line with the <strong>Nigeria Data
              Protection Act (NDPA)</strong> and applicable international data protection
              standards when dealing with foreign clients.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              14. Termination of Service
            </h2>
            <p className="text-text leading-relaxed">
              We reserve the right to terminate service without notice if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>These Terms are violated</li>
              <li>Fraudulent or illegal activity is detected</li>
              <li>Payments remain unpaid beyond agreed timelines</li>
            </ul>
          </div>

          {/* Section 15 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              15. International Clients
            </h2>
            <p className="text-text leading-relaxed">
              For clients outside Nigeria:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>
                Services are subject to Nigerian governing law unless otherwise
                stated in writing.
              </li>
              <li>
                Currency, taxes, logistics, and customs duties (if applicable)
                shall be the responsibility of the client unless otherwise stated
                in the contract.
              </li>
            </ul>
          </div>

          {/* Section 16 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              16. Governing Law
            </h2>
            <p className="text-text leading-relaxed">
              These Terms and Conditions shall be governed by and interpreted in
              accordance with the laws of the <strong>Federal Republic of Nigeria</strong>,
              without prejudice to international commercial agreements where
              applicable.
            </p>
          </div>

          {/* Section 17 */}
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              17. Amendments
            </h2>
            <p className="text-text leading-relaxed">
              Panda Display Limited reserves the right to modify these Terms at
              any time. Updates will be published on this page and take effect
              immediately.
            </p>
          </div>

          {/* Section 18 */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-text">
              18. Contact Information
            </h2>
            <p className="text-text leading-relaxed">
              For questions about these Terms & Conditions, please contact:
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

export default TermsAndConditions;
