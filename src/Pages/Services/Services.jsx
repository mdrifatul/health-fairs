
import { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
  const [serviceCards, setServicecards] = useState([]);

  useEffect(()=>{
    fetch('/assets/health.json')
    .then(res => res.json())
    .then(data => setServicecards(data))
  },[])

  return (
    <div>
      <div className='text-3xl text-center mt-14 font-bold text-gray-800'>Our Services</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 w-11/12 mx-auto">
        {
          serviceCards.map(card => <Service  key='card.id' card={card}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;