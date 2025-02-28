       
"use client"

export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-black p-6 pt-20"> {/* Added pt-20 for space from header */}
        <div className="max-w-3xl bg-white/10 p-10 rounded-xl border border-primary backdrop-blur-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-5 text-center text-accent">Privacy Policy</h1>
          {/* Privacy Policy */}
          <section className="mb-6">
            {/* <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2> */}
            <p className="text-sm mb-2">
              At Flex Zone Gym, we are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Information Collection:</strong> We collect personal details such as your name, email, phone number, and payment info.</li>
              <li><strong>Use of Information:</strong> Used for payments, customer support, promotions, and service improvement.</li>
              <li><strong>Payment Security:</strong> Payments via PhonePe are securely processed with high-security measures.</li>
              <li><strong>Cookies:</strong> We may use cookies to enhance user experience.</li>
              <li><strong>Third-Party Links:</strong> We are not responsible for third-party privacy practices.</li>
              <li><strong>Data Protection:</strong> Industry-standard security measures protect your data.</li>
            </ul>
            <p className="text-sm mt-2">For questions, contact us at <a href="mailto:enquiries@flexzonegym.com" className="text-accent">enquiries@flexzonegym.com</a>.</p>
          </section>
          <div className="mt-6 text-center">
            <a href="/" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">Go Back</a> {/* Styled button */}
          </div>
        </div>
      </div>
    )
}