import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";







const Footer = () => {
  return (
    <footer className="bg-black text-white py-16" id="contact">
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
                <span>Shaheen Nagar, Hyderabad, Telangana, 500005</span>
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

          {/* Gallery Section */}
          <div>
            <h3 className="text-accent text-lg font-bold mb-4">GALLERY</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                "/assets/img/trainers/matt.jpg",
                "/assets/img/trainers/sofia.jpg",
                "/assets/img/trainers/rosy.jpg",
                "/assets/img/trainers/david.jpg",
                "/assets/img/trainers/matt.jpg",
                "/assets/img/trainers/sofia.jpg",
              ].map((src, index) => (
                <div key={index} className="w-[100px] h-[100px] overflow-hidden">
                  <Image src={src} width={100} height={100} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col justify-between">
            <h3 className="text-accent text-lg font-bold mb-4">NEWSLETTER</h3>
            <p className="text-sm text-gray-300 mb-4">
              📩 Subscribe to Our Newsletter! Stay updated with the latest fitness tips, exclusive offers, and expert advice.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-black rounded-l-md"
              />
              <button className="bg-accent px-4 py-2 rounded-r-md text-white">SEND</button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Flex Zone Gym. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="http://facebook.com" target="_blank">
              <FaFacebook className="text-xl text-gray-400 hover:text-white transition" />
            </Link>
            <Link href="http://twitter.com" target="_blank">
              <FaTwitter className="text-xl text-gray-400 hover:text-white transition" />
            </Link>
            <Link href="http://youtube.com" target="_blank">
              <FaYoutube className="text-xl text-gray-400 hover:text-white transition" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;