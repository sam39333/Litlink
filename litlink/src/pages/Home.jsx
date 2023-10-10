import Banner from "../components/banner/Banner";
import BannerReverse from "../components/banner/BannerReverse";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProduct/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Creative Harmonious Living"
        text="LitLINK Products are all made to standard sizes so that you can mix and match them freely."
        img="https://i.pinimg.com/originals/79/9d/08/799d08eb898de4c64822a2e26d4ef4a9.png"
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Elegant Living"
        text="LitLINK Products are all made to standard sizes so that you can mix and match them freely."
        img="https://i.pinimg.com/originals/60/9d/4c/609d4ca861c75c0a041484335f957141.jpg"
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
