import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import ScrollToHashElement from "./components/Navbar/ScrollToHashElement";

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToHashElement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Navigate to="/#contact" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
