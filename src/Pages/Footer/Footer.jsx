import { AiFillTwitterSquare, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { IoMdCall } from 'react-icons/io';

const Footer = () => {
  return (
    <div className='border-t-2'>
      <footer className="footer p-10 bg-white text-black w-11/12 mx-auto ">
  <aside >   
    <h1 className="text-3xl font-bold text-blue">Health Fair</h1>
    <div className='flex gap-2 text-gray-600 mt-5'>
      <AiOutlineMail className=' text-xl'></AiOutlineMail>
      <p className='font-bold'>info@healthfiars.com</p>
    </div>
    <div className='flex gap-2 text-gray-600'>
      <GoLocation className=' text-xl'></GoLocation>
      <p className=' font-bold'>68 Erie St, Jersey City, NJ 07302</p>
    </div>
  </aside> 
  <nav >
    <h1 className="text-xl text-gray-600 font-bold">Social</h1> 
    <div className="grid grid-flow-col gap-4 my-5 text-4xl">
    <AiOutlineFacebook className='text-[#3b5998]'></AiOutlineFacebook>
    <AiOutlineLinkedin className='text-[#0077b5]'></AiOutlineLinkedin>
    <AiFillTwitterSquare className='text-[#55acee]'></AiFillTwitterSquare>
    </div>
  </nav>
  <nav >
    {/* <h1 className="text-xl text-gray-600 font-bold">contact</h1> */}
    <div className='flex mt-5 gap-2'>
    <IoMdCall className='text-5xl text-gray-600'></IoMdCall>
    <div>
      <p className='font-bold text-gray-500'>24/7 Emergency Line</p>
      <p className='font-bold text-gray-600 text-xl'>0-800-433-5788</p>
    </div>
    </div>
  </nav>
</footer>
    </div>
  );
};

export default Footer;