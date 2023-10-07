
const Service = ({card}) => {
  const {title, image,price,details } = card
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl lg:h-fit rounded-none">
        <figure><img className="w-full h-52" src={image} alt="Shoes" /></figure>
        <div className="card-body" >
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-blue w-fit font-semibold  text-base">Price : {price}</p>
          <p className="text-gray-600">{details}</p>
          <button className="text-start font-semibold text-base text-blue my-2 hover:border-b hover:border-b-blue w-fit">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;