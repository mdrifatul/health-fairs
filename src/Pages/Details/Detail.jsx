const Detail = ({ card }) => {
  const { price,image, details } = card;
  return (
    <div>
      <div  data-aos='zoom-in' className=" w-3/4 md:w-2/4 mx-auto my-10 ">
        <div>
          <img className="w-full h-80 rounded-lg" src={image} alt="" />
        </div>
        <div className="">
          <p className="my-1 text-blue font-bold">Price: {price}</p>
          <p className="text-gray-600">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
