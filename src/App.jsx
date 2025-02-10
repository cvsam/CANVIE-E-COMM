import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, ProductListing, ShoppingCart, CheckOut, NotFound } from './pages';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default App;