import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import FormRegister from "./pages/FormRegister";
import Root from "./pages/Root";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Root1 from "./pages/Root1";
import Frame11 from "./pages/Frame11";
import Version from "./pages/Version";
import Version1 from "./pages/Version1";
import Version2 from "./pages/Version2";
import Product from "./pages/Product";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Home page description";
        break;
      case "/form-register":
        title = "Register";
        metaDescription = "Register page description";
        break;
      case "/root":
        title = "Root";
        metaDescription = "Root page description";
        break;
      case "/frame-278":
        title = "Frame 278";
        metaDescription = "Frame 278 page description";
        break;
      case "/frame-281":
        title = "Frame 281";
        metaDescription = "Frame 281 page description";
        break;
      case "/root1":
        title = "Root1";
        metaDescription = "Root1 page description";
        break;
      case "/frame-285":
        title = "Frame 285";
        metaDescription = "Frame 285 page description";
        break;
      case "/version-3":
        title = "Version 3";
        metaDescription = "Version 3 page description";
        break;
      case "/version-4":
        title = "Version 4";
        metaDescription = "Version 4 page description";
        break;
      case "/version-9":
        title = "Version 9";
        metaDescription = "Version 9 page description";
        break;
      case "/product":
        title = "Product";
        metaDescription = "Product page description";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/frame-285" element={<Frame11 />} />
      <Route path="/frame-278" element={<Frame2 />} />
      {/*<Route path="/frame-281" element={<Frame2 />} />
      <Route path="/" element={<Frame />} />
      <Route path="/form-register" element={<FormRegister />} />
      <Route path="/root" element={<Root />} />
      <Route path="/root1" element={<Root1 />} />
      <Route path="/version-3" element={<Version />} />
      <Route path="/version-4" element={<Version1 />} />
      <Route path="/version-9" element={<Version2 />} />
      <Route path="/product" element={<Product />} /> */}
    </Routes>
  );
}
export default App;
