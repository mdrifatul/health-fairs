const Doctor = ({ card }) => {
  const { service, doctor_name, image, details } = card;
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="card card-compact bg-base-100 shadow-xl lg:h-11/12 rounded-none"
      >
        <figure className="">
          <img className="w-full h-56" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{doctor_name}</h2>
          <p className="text-base font-semibold">{service}</p>
          <p className="text-gray-600">{details}</p>
        </div>
      </div>
    </>
  );
};

export default Doctor;
