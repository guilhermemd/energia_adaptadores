import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Main />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="Produtos" element={<Catalog />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
