import { Routes, Route } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Legacy from "@/pages/Legacy";
import Products from "@/pages/Products";
import Applications from "@/pages/Applications";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-legacy" element={<Legacy />} />
        <Route path="/products" element={<Products />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </SiteLayout>
  );
}
