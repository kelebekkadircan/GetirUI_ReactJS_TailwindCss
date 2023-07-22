import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Campaigns from "components/Campaigns";
import Cards from "components/Cards";
import MobileApp from "components/MobileApp";
import Footer from "components/Footer";
import Favorites from "components/Favorites";



function App() {





  return (
    <>

      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <div className="container mx-auto">

        <Favorites />
        <MobileApp />
        <Cards />

      </div>
      <Footer />

    </>

  );
}

export default App;
