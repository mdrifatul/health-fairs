import { Link } from "react-router-dom";

const Service = ({card}) => {
  const {id,title, image,price,details } = card;
  return (
    <div>
      <div data-aos="fade-up" className="card card-compact bg-base-100 shadow-xl lg:h-fit rounded-none">
        <figure><img className="w-full h-52" src={image} alt="Shoes" /></figure>
        <div className="card-body" >
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-blue w-fit font-semibold  text-base">Price : {price}</p>
          <p className="text-gray-600">{details}</p>
          <Link to={`/details/${id}`}><button  className="text-start font-semibold text-base text-blue my-2 hover:border-b hover:border-b-blue w-fit">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;