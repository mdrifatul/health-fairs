import { Link } from "react-router-dom";

const Consult = () => {
  return (
    <div className="bg-cover bg-[url('https://i.ibb.co/GJbjP55/team-young-specialist-doctors-standing-corridor-hospital.jpg')] my-20">
      <div className=" grid md:grid-cols-4 py-20 mx-auto gap-2 mb-10 bg-black bg-opacity-70">
        <div  className="w-4/5 mx-auto md:col-span-2">
          <p className="text-lg text-white">People You Know, Extraordinary Care</p>
          <h1 className="text-3xl lg:text-5xl text-white text-bold mt-5 mb-5 lg:mb-10">Commited To The Best Possible Care</h1>
          <p className="text-base text-white">Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        </div>
        <div className="w-4/5 col-span-2 mx-auto mt-10 md:mt-0">
        <p className="text-lg text-white">Book Within Minutes</p>
          <h1 className="text-3xl text-white text-bold mt-2 mb-5 lg:mb-5">Consult Our Doctors</h1>
          <p className="text-base text-white">Select the doctor you prefer to get a checkup and book a visit with them in a matter of minutes. Simply select from the list below.</p>
          <Link to='/appoinment' className="btn text-white bg-blue mt-6">Appoinment</Link>
        </div>
      </div>
    </div>
  );
};

export default Consult;