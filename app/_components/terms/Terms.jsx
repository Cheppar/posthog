"use client";

import Link from "next/link";


const Terms = () => {
  return (
    <div className="bg-black text-gray-200">
      {/* Hero Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-3xl text-amber-500 font-display font-semibold tracking-tight sm:text-5xl md:text-6xl mb-4 text-center">
            Gasify Terms and Conditions
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl text-center">
            Last Modified: 16 May 2025
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
              These Customer Terms and Conditions (this "Agreement"), effective as of the date you accept this Agreement (the "Effective Date"), are between Gasify Kenya, Ltd., a Kenyan company with offices at Prime Plaza, Office 102, Nakuru, Kenya ("Gasify") and the entity or individual accepting this Agreement ("Customer"). By clicking a button, checking a box, or using our Services, you represent that you are authorized to accept this Agreement. Gasify and Customer are collectively the "Parties" or individually a "Party."
            </p>

            {/* Definitions */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 text-gray-200 mb-6">
              <li>
                <strong>Aggregated Data:</strong> Data derived from Customer Data or use of the Services, used in an anonymized manner for statistical and performance analysis.
              </li>
              <li>
                <strong>Authorized User:</strong> Customer’s employees, contractors, or agents authorized to use the Services under this Agreement.
              </li>
              <li>
                <strong>Customer Data:</strong> Information submitted by Customer or Authorized Users through the Services, such as order details or delivery preferences, excluding Aggregated Data.
              </li>
              <li>
                <strong>Documentation:</strong> Gasify’s user guides and manuals available at gasify.co.ke.
              </li>
              <li>
                <strong>Harmful Code:</strong> Malicious software or code that disrupts or harms systems, networks, or data.
              </li>
              <li>
                <strong>Order:</strong> The purchase order, form, or online ordering process specifying the Services.
              </li>
              <li>
                <strong>Personal Information:</strong> Data that identifies or can identify an individual, as defined under applicable laws.
              </li>
              <li>
                <strong>Gasify IP:</strong> The Services, Documentation, and related intellectual property, excluding Customer Data.
              </li>
              <li>
                <strong>Services:</strong> Gasify’s website (gasify.co.ke), mobile app, and LPG delivery services.
              </li>
              <li>
                <strong>Subscription Period:</strong> The period during which Customer may access the Services, as specified in the Order.
              </li>
              <li>
                <strong>Third-Party Products:</strong> Third-party services integrated with the Services, such as payment processors.
              </li>
              <li>
                <strong>Usage Limitations:</strong> Limits on Authorized Users, pricing, or service tiers, as specified in the Order.
              </li>
            </ul>

            {/* Access and Use */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">2. Access and Use</h2>
            <h3 className="text-xl text-amber-500 font-medium mb-2">2.1 Provision of Access</h3>
            <p className="text-gray-200 mb-6">
              Gasify grants Customer a non-exclusive, non-transferable, non-sublicensable right to access and use the Services during the Subscription Period for internal business purposes, subject to compliance with this Agreement and Usage Limitations. Gasify will provide access credentials as needed.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">2.2 Documentation License</h3>
            <p className="text-gray-200 mb-6">
              Gasify grants Customer a non-exclusive, non-transferable license to use the Documentation for internal purposes in connection with the Services.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">2.3 Use Restrictions</h3>
            <p className="text-gray-200 mb-6">
              Customer shall not: (i) copy or modify Gasify IP; (ii) distribute or sublicense the Services; (iii) reverse engineer the Services; (iv) remove proprietary notices; (v) use Gasify IP unlawfully or competitively; (vi) bypass security measures; or (vii) upload Harmful Code.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">2.4 Reservation of Rights</h3>
            <p className="text-gray-200 mb-6">
              Gasify reserves all rights not expressly granted. No implied rights are granted to Customer.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">2.5 Suspension</h3>
            <p className="text-gray-200 mb-6">
              Gasify may suspend access if: (i) there is a security threat, fraud, or illegal activity; (ii) Customer’s use disrupts the Services; (iii) a third-party provider suspends access; or (iv) Customer fails to pay. Gasify will notify Customer and resume access when resolved, with no liability for suspension-related losses.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">2.6 Aggregated Data</h3>
            <p className="text-gray-200 mb-6">
              Gasify may collect and use Aggregated Data for analytics and improvements, owning all rights to such data, and may share it with third parties in compliance with law.
            </p>

            {/* Customer Responsibilities */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">3. Customer Responsibilities</h2>
            <h3 className="text-xl text-amber-500 font-medium mb-2">3.1 General</h3>
            <p className="text-gray-200 mb-6">
              Customer is responsible for all use of the Services by Authorized Users and must ensure compliance with this Agreement.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">3.2 Third-Party Products</h3>
            <p className="text-gray-200 mb-6">
              Third-Party Products (e.g., payment processors) are subject to their own terms. Customer must agree to those terms to use them.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">3.3 Customer Control and Responsibility</h3>
            <p className="text-gray-200 mb-6">
              Customer is responsible for: (i) Customer Data; (ii) information provided to Gasify; (iii) Customer’s IT infrastructure; (iv) security of access credentials; and (v) all use of the Services through Customer’s systems.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">3.4 Support</h3>
            <p className="text-gray-200 mb-6">
              Gasify will provide basic customer support during normal business hours (8am to 7pm EAT, weekdays).
            </p>

            {/* Fees and Taxes */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">4. Fees and Taxes</h2>
            <h3 className="text-xl text-amber-500 font-medium mb-2">4.1 Fees</h3>
            <p className="text-gray-200 mb-6">
              Customer shall pay fees as specified in the Order, non-refundable, without offset.  
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">4.2 Taxes</h3>
            <p className="text-gray-200 mb-6">
              Fees exclude taxes. Customer is responsible for all applicable taxes, except those on Gasify’s income. Gasify may invoice Customer for taxes paid on Customer’s behalf.
            </p>

            {/* Confidential Information */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">5. Confidential Information</h2>
            <h3 className="text-xl text-amber-500 font-medium mb-2">5.1 Definition</h3>
            <p className="text-gray-200 mb-6">
              "Confidential Information" includes proprietary business or technical information disclosed by a Party, marked as confidential or reasonably considered so, excluding public or independently obtained information.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">5.2 Duty</h3>
            <p className="text-gray-200 mb-6">
              The receiving Party shall not disclose Confidential Information except to authorized representatives, and only as required by law or to enforce this Agreement, with notice to the disclosing Party.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">5.3 Return of Materials</h3>
            <p className="text-gray-200 mb-6">
              Upon termination, the receiving Party shall return or destroy Confidential Information. Non-disclosure obligations survive for three years, or longer for trade secrets.
            </p>

            {/* Personal Information */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">6. Personal Information</h2>
            <p className="text-gray-200 mb-6">
              Customer must ensure Customer Data complies with this Agreement and applicable laws, including Kenya’s Data Protection Act, 2019. Customer is responsible for securing and backing up Customer Data.
            </p>

            {/* Intellectual Property */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">7. Intellectual Property Ownership; Feedback</h2>
            <h3 className="text-xl text-amber-500 font-medium mb-2">7.1 Gasify IP</h3>
            <p className="text-gray-200 mb-6">
              Gasify owns all rights to Gasify IP. Third-Party Products are owned by their providers.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">7.2 Customer Data</h3>
            <p className="text-gray-200 mb-6">
              Customer owns Customer Data and grants Gasify a license to use it to provide the Services and for Aggregated Data purposes. Customer may export Customer Data at any time.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">7.3 Feedback</h3>
            <p className="text-gray-200 mb-6">
              Feedback provided to Gasify may be used without restriction, provided Customer is not identified without consent.
            </p>

            {/* Warranty Disclaimer */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">8. Warranty Disclaimer</h2>
            <p className="text-gray-200 mb-6">
              The Services are provided "as is" without warranties, express or implied, including for merchantability, fitness, or non-infringement. Gasify does not guarantee uninterrupted or error-free Services.
            </p>

            {/* Indemnification */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">9. Indemnification</h2>
            <h3 className="text-xl text-amber-500 font-medium mb-2">9.1 Gasify Indemnification</h3>
            <p className="text-gray-200 mb-6">
              Gasify will indemnify Customer against third-party claims that the Services infringe Kenyan copyrights or trade secrets, provided Customer notifies Gasify, cooperates, and allows Gasify to control defense. Gasify may modify the Services or terminate the Agreement if infringement cannot be resolved.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">9.2 Customer Indemnification</h3>
            <p className="text-gray-200 mb-6">
              Customer will indemnify Gasify against claims arising from Customer Data, unauthorized use, or negligence, provided Gasify consents to any settlement.
            </p>

            {/* Limitations of Liability */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">10. Limitations of Liability</h2>
            <p className="text-gray-200 mb-6">
              Except for breaches of confidentiality, indemnity obligations, or gross negligence, neither Party is liable for consequential, indirect, or punitive damages. Total liability is limited to amounts paid to Gasify in the prior 12 months, or three times that amount for excluded liabilities.
            </p>

            {/* Subscription Period and Termination */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">11. Subscription Period and Termination</h2>
            <h3 className="text-xl text-amber-500 font-medium mb-2">11.1 Subscription Period</h3>
            <p className="text-gray-200 mb-6">
              The Agreement begins on the Effective Date and continues for the Initial Subscription Period, renewing automatically unless terminated or non-renewed with 30 days’ notice.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">11.2 Termination</h3>
            <p className="text-gray-200 mb-6">
              Gasify may terminate for non-payment or breaches of use restrictions. Either Party may terminate for material breach or insolvency. Termination requires written notice.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">11.3 Effect of Termination</h3>
            <p className="text-gray-200 mb-6">
              Upon termination, Customer must cease using Gasify IP, delete copies, and certify compliance. No refunds are provided.
            </p>

            {/* Miscellaneous */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">12. Miscellaneous</h2>
            <h3 className="text-xl text-amber-500 font-medium mb-2">12.1 Entire Agreement</h3>
            <p className="text-gray-200 mb-6">
              This Agreement, including referenced documents, is the entire agreement, superseding prior agreements.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">12.2 Notices</h3>
            <p className="text-gray-200 mb-6">
              Notices must be in writing, sent to Gasify at support@gasify.co.ke or the Customer’s address in the Order, effective upon receipt.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">12.3 Force Majeure</h3>
            <p className="text-gray-200 mb-6">
              Neither Party is liable for delays due to events beyond their control, except payment obligations.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">12.4 Governing Law; Jurisdiction</h3>
            <p className="text-gray-200 mb-6">
              This Agreement is governed by Kenyan law. Disputes shall be resolved in Nairobi courts.
            </p>
            <h3 className="text-xl text-amber-500 font-medium mb-2">12.5 Assignment</h3>
            <p className="text-gray-200 mb-6">
              Customer may not assign this Agreement without Gasify’s consent. Gasify may assign it freely.
            </p>

            {/* Contact Us */}
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">13. Contact Us</h2>
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

export default Terms;