
import { useEffect, useState } from 'react';
import Services from './Services';
const Services = () => {
  const [serviceCards, setServicecards] = useState([]);

  useEffect(()=>{
    fetch('/src/assets/health.json')
  },[])
  return (
    <div>
      
    </div>
  );
};

export default Services;