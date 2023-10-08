import { Outlet } from "react-router-dom";
import Navbar from './../Shared/Navbar';

const Root = () => {
  return (
    <>
      <div data-aos='fade-down'><Navbar></Navbar></div>
      <Outlet></Outlet>
    </>
  );
};

export default Root;