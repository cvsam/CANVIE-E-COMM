import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="bg-gray-800 text-white mt-10 overflow-hidden">
        <div className='flex flex-col items-center flex-wrap gap-4 p-10'>

            <div className="w-full flex justify-evenly items-center sm:flex-col sm:text-center flex-wrap">
                <div className="w-full sm:w-1/4 mb-6 xs:mb-9">
                    <h3 className="text-lg font-semibold mb-4 xs:mb-0">About Us</h3>
                    <p>
                        We are dedicated to providing the best selection of shoes for every occasion. Explore our variety of styles and find your perfect fit.
                    </p>
                </div>

                <div className="w-full sm:w-1/4 mb-6 xs:mb-9">
                    <h3 className="text-lg font-semibold mb-4 xs:mb-0">Customer Service</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Shipping Policy</li>
                        <li>Return Policy</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>


            <div className="w-full mb-6 text-center">
                <h3 className="text-lg font-semibold mb-4">Newsletter Signup</h3>
                <p>Subscribe to our newsletter for the latest updates and promotions.</p>
                <form className="flex flex-col gap-5 mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex p-2 mr-4 rounded border border-gray-600" />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Subscribe
                    </button>
                </form>
            </div>


        </div>
        <div className="bg-gray-700 py-4 mt-6">
            <div className="container px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Shoe Store. All Rights Reserved.</p>
                <p>
                    <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> |
                    <Link to="/terms-of-service" className="hover:underline"> Terms of Service</Link>
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;