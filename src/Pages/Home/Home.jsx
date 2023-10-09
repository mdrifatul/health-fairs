
import Footer from '../Footer/Footer';
import Banner from './../Banner/Banner';
import Consult from './../Consult/Consult';
import Research from './../Research/Research';
import Services from './../Services/Services';
const Home = () => {
  return (
    <>
      <div data-aos='fade-up'><Banner></Banner></div>
      <Services></Services>
      <div data-aos='fade-right'><Research></Research></div>
      <div data-aos='fade-left'><Consult></Consult></div>
      <div><Footer></Footer></div>
    </>
  );
};

export default Home;