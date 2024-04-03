import Banner from "../components/banner/Banner";
import Brands from "../components/brands/Brands";
import Hero from "../components/hero/Hero";
import NewArrival from "../features/newArrival/NewArrival";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewArrival />
      <Banner />
      <Brands />
    </div>
  );
};
export default Home;
