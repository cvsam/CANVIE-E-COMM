const CartItem = ({ item }) => (
  <div className="cart-item">
    <img src={item.image} alt={item.name} />
    <div className="cart-item-details">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
    <button>Remove</button>
  </div>
);

export default CartItem;