import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <Link to={`/products/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;