import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { MainBanner } from "./components/Banner/MainBanner";
import { MainContent } from "./components/Content/MainContent";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="min-w-[640px]">
      <Banner />
      <Header />
      <MainBanner />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
