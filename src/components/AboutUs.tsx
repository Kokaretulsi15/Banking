import React from "react";
import "./css/about.css";
const AboutUs: React.FC = () => {
  return (
    <div className="about-container text-center">
      <div className="bg-white text-gray-800 px-6 py-10 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="about-header">About Us</h1>

          {/* Introduction */}

          <div className="mb-6 text-center">
            <img
              src="/img/Bank.png"
              className="w-3/4 max-w-full h-auto inline-block"
            />
          </div>

          <p className="text-lg mb-6 para ">
            Welcome to <strong>My Bank</strong>, your reliable digital banking
            partner committed to delivering secure, seamless, and innovative
            financial experiences.
          </p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2 ">
                Our Mission
              </h2>
              <p>
                To provide transparent, secure, and user-friendly banking
                solutions that empower individuals and businesses to thrive
                financially.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2 ">
                Our Vision
              </h2>
              <p>
                To become the most innovative and trusted digital bank in the
                country, transforming the way people experience finance.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Core Values
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Trust & Transparency</li>
              <li>Customer First</li>
              <li>Innovation & Growth</li>
              <li>Security & Compliance</li>
              <li>Integrity in All We Do</li>
            </ul>
          </div>

          {/* Unique Features */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              What Makes Us Different
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>100% Digital Onboarding</li>
              <li>Zero Balance Accounts</li>
              <li>24/7 Smart Customer Support</li>
              <li>AI-powered Personal Finance Tools</li>
              <li>Low-interest Loans & Instant Approvals</li>
            </ul>
          </div>

          {/* Security */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Your Security is Our Priority
            </h2>
            <p>
              We follow the highest industry standards for data encryption and
              are fully compliant with RBI regulations. Your data and money are
              safe with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
