import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="navbar-brand">TV Store</Link>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
    
  </div>
);

export default Navbar;