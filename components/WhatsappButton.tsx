import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918008645667" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center w-14 h-14 z-50"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
