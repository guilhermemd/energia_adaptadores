import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Agenda from "./pages/Agenda";
import Main from "./pages/Main";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Main />} />
          <Route path="/Agenda" element={<Agenda />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
