import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}
