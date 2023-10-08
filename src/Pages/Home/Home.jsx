
import Footer from '../Footer/Footer';
import Banner from './../Banner/Banner';
import Services from './../Services/Services';
const Home = () => {
  return (
    <>
      <div data-aos='fade-up'><Banner></Banner></div>
      <Services></Services>
      <div><Footer></Footer></div>
    </>
  );
};

export default Home;