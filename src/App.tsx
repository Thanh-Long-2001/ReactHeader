import { Route } from "react-router-dom";
import { Routes } from "react-router";
import "./App.css";
import { Banner } from "./components/banner/Banner";
import { MainBanner } from "./components/banner/MainBanner";
import { MainContent } from "./components/content/MainContent";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

import { Categories } from "./components/pages/Categories/Categories";
// import { ProductDetail } from "./components/pages/product/ProductDetail";

function App() {
  return (
    <div className="">
      <Banner />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              <MainContent />
            </>
          }
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
