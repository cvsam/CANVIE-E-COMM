import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, ProductListing, ShoppingCart, CheckOut } from './pages';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  </Router>
)

export default App;