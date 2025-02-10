import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, ShoppingCart, CheckOut, NotFound } from './pages';
import { Navbar, Hero, Footer } from './components';

const App = () => (
  <Router>
    <Navbar />
    <Hero />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;