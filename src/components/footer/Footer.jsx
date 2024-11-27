import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#303030] text-white py-8 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Career Compass</h3>
            <p>
              Your partner in making informed career decisions. Let us guide you
              through your professional journey.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-primaryColor">
                  Home
                </Link>
              </li>
              <li>
                <button className="hover:text-primaryColor">Services</button>
              </li>
              <li>
                <button className="hover:text-primaryColor">About Us</button>
              </li>
              <li>
                <button className="hover:text-primaryColor">Contact</button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <button className="hover:text-primaryColor">
                <FaFacebook size={24} />
              </button>
              <button className="hover:text-primaryColor">
                <FaTwitter size={24} />
              </button>
              <button className="hover:text-primaryColor">
                <FaLinkedin size={24} />
              </button>
              <button className="hover:text-primaryColor">
                <FaInstagram size={24} />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: support@careercompass.com</p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Address: Farmgate, Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2024 Career compass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
