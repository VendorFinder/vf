import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Partner from "./pages/Partner";
import Categories from "./pages/Categories";
import Services from "./pages/Services";

function App() {
  return (
    <div className="pt-[100px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/services" element={<Services />} />
        {/* <Routes path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
