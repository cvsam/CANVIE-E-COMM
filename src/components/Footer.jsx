import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8 py-10 px-6">

      {/* About & Customer Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-10 text-center sm:text-left">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-gray-300">
            We are dedicated to providing the best selection of shoes for every occasion. Explore our variety of styles and find your perfect fit.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:underline">Shipping Policy</Link></li>
            <li><Link to="/returns" className="hover:underline">Return Policy</Link></li>
            <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>
        
      </div>

      {/* Newsletter Signup */}
      <div className="w-full sm:w-2/3 text-center">
        <h3 className="text-xl font-semibold mb-3">Newsletter Signup</h3>
        <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and promotions.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="p-3 w-full sm:w-auto flex-1 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>

    {/* Bottom Footer */}
    <div className="bg-gray-700 py-4">
      <div className="max-w-screen-xl mx-auto text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} Shoe Store. All Rights Reserved.</p>
        <p className="mt-2">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> |
          <Link to="/terms-of-service" className="hover:underline ml-2">Terms of Service</Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
