import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Info Section */}
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src="/assets/img/logo.png"
                width={100}
                height={20}
                alt="Flex Zone Gym Logo"
              />
            </Link>
            <p className="max-w-sm text-gray-300">
              Your destination for fitness and wellness in Hyderabad.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Plot no : 4, Shaheen Nagar, Balapur, Ranga Reddy District, Hyderabad, Telangana.</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>8008645667, 8919138745</span>
              </li>
              <li>
                <Link href="mailto:flexzonegym2025@gmail.com" className="flex items-center gap-4">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>enquiries@flexzonegym.com</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Map Section (Replacing Gallery) */}
          <div>
            <h3 className="text-accent text-lg font-bold mb-4">OUR LOCATION</h3>
            <div className="w-full h-[250px] rounded-md overflow-hidden">
              <iframe
                title="Flex Zone Gym Location"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.567295558875!2d78.50106127592247!3d17.32194738373215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d14a6b6fd1%3A0xc45f3f9b66a0983d!2sShaheen%20Nagar%2C%20Hyderabad%2C%20Telangana%20500005!5e0!3m2!1sen!2sin!4v1707741787526"
              ></iframe>
            </div>
          </div>

          {/* Newsletter Section (Kept as it is) */}
          <div className="flex flex-col">
            <h3 className="text-accent text-lg font-bold mb-4">NEWSLETTER</h3>
            <p className="text-sm text-gray-300 mt-2 mb-4">
              📩 Subscribe to Our Newsletter! Stay updated with the latest fitness tips, exclusive offers, and expert advice.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-black rounded-1-md"
              />
              <button className="bg-accent px-4 py-2 rounded-r-md text-white">SEND</button>
            </div>
            <hr className="border-gray-600 my-6"/>
            
            <div className="flex flex-col  gap-2 text-sm text-grey-400 mt-4 ">
              <h4 className="text-sm underline text-red-600">  Quick Links</h4>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
{/*               <Link href="/return-refund-policy">Return & Refund Policy</Link> */}
{/*               <Link href="/shipping-policy">Shipping Policy</Link> */}
              <Link href="/cancellation-policy">Cancellation Policy</Link>
            </div>
            
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 mt-12 pt-6 flex justify-center">
          <p className="text-sm text-gray-400">© 2025 Webgeon Results Designed. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
