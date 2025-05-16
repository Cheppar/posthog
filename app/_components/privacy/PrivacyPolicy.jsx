"use client";

import Link from "next/link";


const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-gray-200">
      {/* Hero Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-3xl text-amber-500 font-display font-semibold tracking-tight sm:text-5xl md:text-6xl mb-4 text-center">
            Gasify Privacy Policy
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl text-center">
            Last Modified: 14 March 2025 | Previous Version: 9 Oct 2024
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-black">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Introduction */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">Introduction</h2>
            <p className="text-gray-200 mb-6">
              Thank you for your interest in Gasify Kenya, Ltd. ("Gasify," "we," "our," or "us"). Gasify provides LPG delivery services and a mobile app to enhance your experience. This Privacy Notice explains how information about you, that directly identifies you or makes you identifiable ("personal information"), is collected, used, and disclosed by Gasify in connection with our website at gasify.co.ke (the "Site") and our services, including our mobile app and LPG delivery (collectively with the Site, the "Service").
            </p>

            {/* Scope */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">What Does This Privacy Notice Apply To?</h2>
            <p className="text-gray-200 mb-6">
              This Privacy Notice explains how we use your personal information when you use the Service, either as an individual customer or through one of our business customers' accounts. We are the data controller of your personal information, meaning we determine and are responsible for how your personal information is processed.
            </p>
            <p className="text-gray-200 mb-6">
              Our Service allows customers to submit or manage content, such as order details or delivery preferences ("Customer Data"). We process Customer Data on behalf of our customers, in accordance with our agreements. This Privacy Notice does not apply to such processing; if your personal information is included in Customer Data, please review the respective customer’s privacy notice.
            </p>
            <p className="text-gray-200 mb-6">
              This Privacy Notice does not cover aggregated or anonymized information, deidentified information (where permitted by law), or information about our employees, contractors, or job applicants.
            </p>

            {/* Region-Specific Disclosures */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">Region-Specific Disclosures</h2>
            <p className="text-gray-200 mb-6">
              <strong>Kenya:</strong> If you are a resident of Kenya, your personal information is protected under the Data Protection Act, 2019. You have rights to access, correct, or delete your personal information, as outlined below.
            </p>
            <p className="text-gray-200 mb-6">
              <strong>International Visitors:</strong> Personal information may be transferred to, stored, and processed in a country other than where it was collected, such as the United States, where our servers are hosted. These countries may have different data protection laws. We take steps to ensure your information is protected, as described in this Privacy Notice.
            </p>

            {/* Information We Collect and Use */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">1. Information We Collect and Our Use</h2>
            <p className="text-gray-200 mb-6">
              We collect personal information in connection with your use of the Service, including information you provide, information from third parties, and information collected automatically.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">Information That You Provide</h3>
            <ul className="list-disc pl-6 text-gray-200 mb-6">
              <li>
                <strong>Registration Information:</strong> When you register for an account on the Site or app, we collect your name, email address, and phone number. We use this to administer your account, provide services, communicate with you, and offer customer support.
              </li>
              <li>
                <strong>Payment Information:</strong> For purchases, such as LPG orders, we collect transactional information via third-party payment processors (e.g., M-Pesa). We do not store credit card numbers; our processors handle this, governed by their privacy policies.
              </li>
              <li>
                <strong>Communications:</strong> If you contact us via email, phone, or forms, we collect your name, email, phone number, or other provided information to respond to inquiries and improve our services. You can unsubscribe from newsletters by following the instructions in our emails.
              </li>
              <li>
                <strong>User Content:</strong> You may upload order details, delivery preferences, or other data. You control this information, and we store it as part of the Service.
              </li>
            </ul>
            <h3 className="text-xl text-amber-500 font-medium mb-2">Information from Third-Party Sources</h3>
            <ul className="list-disc pl-6 text-gray-200 mb-6">
              <li>
                <strong>Social Media and SSO:</strong> If you use single sign-on (e.g., Google) or interact via social media, we may receive your name, email, or profile information, depending on your privacy settings. We use this to authenticate your account and communicate with you.
              </li>
              <li>
                <strong>Business Partners:</strong> We may receive contact or order information from partners to facilitate services or marketing, combined with data we collect.
              </li>
            </ul>
            <h3 className="text-xl text-amber-500 font-medium mb-2">Other Uses of Personal Information</h3>
            <p className="text-gray-200 mb-6">
              We use personal information to operate the Service, communicate with you, market our services (without sharing User Content), conduct analytics, enforce our Terms of Service, comply with legal obligations, and fulfill purposes you consent to.
            </p>

            {/* How We Share Personal Information */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">2. How We Share Personal Information</h2>
            <p className="text-gray-200 mb-6">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-6 text-gray-200 mb-6">
              <li>Service providers (e.g., payment processors, hosting services) under confidentiality agreements.</li>
              <li>Authorities, as required by law or to protect our rights and safety.</li>
              <li>Affiliated Gasify companies, using your information as described in this Notice.</li>
              <li>Buyers, in case of a business sale or merger, with efforts to maintain this Notice’s standards.</li>
              <li>Third parties, with your consent or in anonymized form.</li>
            </ul>

            {/* Control Over Your Information */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">3. Control Over Your Information</h2>
            <p className="text-gray-200 mb-6">
              You can:
            </p>
            <ul className="list-disc pl-6 text-gray-200 mb-6">
              <li>Unsubscribe from marketing emails via the “unsubscribe” link.</li>
              <li>Modify account information through the Site or app settings.</li>
              <li>Request access, correction, or deletion of your personal information by emailing support@gasify.co.ke. We may require identity verification.</li>
            </ul>

            {/* Cookies and Tracking */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">4. How We Use Cookies and Other Tracking Technology</h2>
            <p className="text-gray-200 mb-6">
              We use cookies and tracking technologies to collect usage data (e.g., IP address, device type, pages visited) to enhance your experience, monitor performance, and provide analytics. You can manage cookie settings in your browser, but disabling cookies may affect functionality. We do not use targeted advertising.
            </p>

            {/* Data Retention and Security */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">5. Data Retention and Security</h2>
            <p className="text-gray-200 mb-6">
              We retain personal information only as long as needed for the purposes outlined, unless required by law. Data is stored on secure servers, primarily in the United States. We use reasonable security measures, but no system is completely secure. We will notify you of any breaches as required by law.
            </p>

            {/* Third-Party Links */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">6. Links to Third-Party Websites and Services</h2>
            <p className="text-gray-200 mb-6">
              Our Site and app may link to third-party websites. We are not responsible for their privacy practices. Review their policies before sharing personal information.
            </p>

            {/* Children's Privacy */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">7. Children’s Privacy</h2>
            <p className="text-gray-200 mb-6">
              Our Services are not intended for children under 13. We do not knowingly collect their information. Contact us at support@gasify.co.ke if you believe we have such data.
            </p>

            {/* Changes to Privacy Notice */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">8. Changes to This Privacy Notice</h2>
            <p className="text-gray-200 mb-6">
              We may update this Privacy Notice, notifying you via email or a Site notice. Check the “Last Modified” date (14 March 2025) to stay informed.
            </p>

            {/* Contact Us */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">9. Contact Us</h2>
            <p className="text-gray-200 mb-6">
              For inquiries, email us at{" "}
              <a
                href="mailto:support@gasify.co.ke"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                support@gasify.co.ke
              </a>
              .
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default PrivacyPolicy;