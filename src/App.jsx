import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, ArrivalPage, NotFound, ShoppingCart } from './pages';
import { Navbar, Hero, Footer, ProtectedRoute } from './components';
import { AuthProvider } from './context/AuthContext';

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/arrival" element={<ArrivalPage />} />
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><ShoppingCart /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </AuthProvider>
);

export default App;