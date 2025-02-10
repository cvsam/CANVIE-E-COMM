import { LogoSvg, cart } from "../assets";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../services/firebaseConfig";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-7 px-10 bg-white shadow-md">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={LogoSvg} alt="logo" className="sm:w-[60px] w-[40px]" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <input
          type="search"
          name="search"
          placeholder="Search product"
          className="w-full border-2 rounded-2xl py-2 px-4 sm:px-5 focus:outline-none"
        />
      </div>

      {/* Cart & Auth Buttons */}
      <div className="flex items-center gap-6">
        {/* Cart */}
        <Link to="/cart">
          <img src={cart} alt="cart" className="w-[30px]" />
        </Link>

        {/* Authentication (Login / Logout) */}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <Link to="/arrival" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
