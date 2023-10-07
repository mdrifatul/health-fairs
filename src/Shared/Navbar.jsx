import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userPicture from "../../assets/user.png";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";



const activeLink = 'text-blue border-b border-b-blue rounded-none '
const normalLink = 'text-black'

const navLink = <>

    <span className="flex justify-center items-center p-2 text-lg">
    <NavLink to="/" className={({isActive}) => isActive ? activeLink:normalLink}>Home</NavLink>
    </span>
    {/* <span className="flex justify-center items-center p-2 text-lg mx-2">
    <NavLink to="/login" className={({isActive}) => isActive ? activeLink:normalLink} >login</NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg">
    <NavLink to="/register" className={({isActive}) => isActive ? activeLink:normalLink}>register</NavLink>
    </span> */}




    {/* <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/login'>login</NavLink></li>
    <li><NavLink to='/register'>register</NavLink></li> */}
  </>



const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handlelogOut = () =>{
    logOut()
    .then()
    .catch()
  }

  return (
    <div>
      <div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <Link to='/' className="px-6 font-semibold normal-case text-2xl text-blue">Health Fair</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLink}
    </ul>
  </div>
  <div className="navbar-end">
      
    {
      user ?
      <>
      <p>{user.email}</p>
      <label className="btn btn-ghost btn-circle avatar mr-2">
        <div className="w-10 rounded-full">
          <img src={userPicture} />
        </div>
      </label>
      <button className="btn bg-blue text-white hover:bg-blue" onClick={handlelogOut}>logout</button>
      </>
      : <Link  to='login'><button className="btn bg-blue text-white hover:bg-blue">login</button></Link>
    }
  </div>
</div>
    </div>
  );
};

export default Navbar;