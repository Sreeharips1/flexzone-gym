"use client"
import Link from "next/link";

export default function ShippingPolicy() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-black p-6 pt-20"> {/* Added pt-20 for space from header */}
        <div className="max-w-3xl bg-white/10 p-10 rounded-xl border border-primary backdrop-blur-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-5 text-center text-accent">SHIPPING POLICY</h1>
          {/* Privacy Policy */}
          <section className="mb-6">
            {/* <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2> */}
            <p className="text-sm mb-2">
            Flex Zone Gym offers digital services only.
            </p>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Service Activation:</strong> All services are activated after PhonePe payment confirmation.</li>
              <li><strong>Delivery of Services:</strong> Digital services (classes, consultations) are provided instantly</li>
              
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