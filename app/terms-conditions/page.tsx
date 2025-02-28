"use client"
import Link from "next/link";
export default function TermsConditions() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-black p-6 pt-20"> {/* Added pt-20 for space from header */}
        <div className="max-w-3xl bg-white/10 p-10 rounded-xl border border-primary backdrop-blur-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-5 text-center text-accent">Terms & Conditions</h1>
          {/* Privacy Policy */}
          <section className="mb-6">
            {/* <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2> */}
            {/* <p className="text-sm mb-2">
              At Flex Zone Gym, we are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p> */}
            <ul className="text-sm list-disc pl-5">
              <li><strong>Membership Agreement:</strong> Members must follow all gym rules.</li>
              <li><strong>Payments:</strong> All PhonePe payments are securely processed.</li>
              <li><strong>Intellectual Property:</strong> Website content belongs to Flex Zone Gym.</li>
              <li><strong>Liability:</strong>  We are not responsible for injuries or damages.</li>
              <li><strong>Modifications:</strong> Terms may be updated at any time.</li>
              <li><strong>Governing Law:</strong> These terms are governed by Hyderabad, Telangana, India laws.</li>
            </ul>
            <p className="text-sm mt-2">For questions, contact us at <a href="mailto:enquiries@flexzonegym.com" className="text-accent">enquiries@flexzonegym.com</a>.</p>
          </section>
          <div className="mt-6 text-center">
            <Link href="/" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">Go Back</Link> {/* Styled button */}
          </div>
        </div>
      </div>
    )
}