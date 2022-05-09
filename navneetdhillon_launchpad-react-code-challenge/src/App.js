import Home from "./pages/home/Home";
import Universities from "./pages/Universities/Universities";
import PostalLookup from "./pages/Postal lookup/PostalLookup";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Routes,Route,Path } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Universities" element={<Universities />} />
      <Route path="PostalLookup" element={<PostalLookup />} />
    </Routes>
    </div>
  );
}

export default App;
