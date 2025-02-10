import { LogoSvg, close, menu, cart } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center py-8 w-full px-10 sm:px-3 sm:flex-col sm:gap-10 sm:justify-center mb-5">
    <div>
      <Link to="/">
        <img src={LogoSvg} alt="logo" className="sm:w-[60px]" />
      </Link>
    </div>
    <div className="sm:w-[50%]">
      <input type="search" name="search" placeholder="Search product" className="border-2 rounded-2xl py-3 px-10 sm:px-5" />
    </div>
    <div className="list-none sm:flex hidden justify-end items-center gap-10 hover:to-blue-800">
      <Link to="/cart">
        <img src={cart} alt="cart" className="w-[30px]" />
      </Link>
    </div>

  </nav>
);

export default Navbar;