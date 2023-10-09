import { useEffect, useState } from "react";
import Doctor from "./doctor";

const Doctors = () => {
  const [doctorList , setDoctorlist] = useState([]);

  useEffect(()=>{
    fetch('/assets/doctors.json')
    .then(res => res.json())
    .then(data => setDoctorlist(data))
  },[])


  return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 w-11/12 mx-auto">
        {
          doctorList.map(card => <Doctor  key='' card={card}></Doctor>)
        }
      </div>
  );
};

export default Doctors;