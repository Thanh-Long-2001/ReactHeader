import "./App.css";
import { Banner } from "./components/banner/Banner";
import { MainBanner } from "./components/banner/MainBanner";
import { MainContent } from "./components/content/MainContent";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="">
      <Banner />
      <Header />
      <MainBanner />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
