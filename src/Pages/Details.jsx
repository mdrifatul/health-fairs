import { useParams } from "react-router-dom";

const Details = () => {
  const {id} = useParams()
  return (
    <div>
      <h2 className='text-5xl'>News Details</h2>
      <p>{id}</p>
    </div>
  );
};

export default Details;
