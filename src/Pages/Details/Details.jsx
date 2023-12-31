import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from './Detail';

const Details = () => {
  const [card, setCard] = useState({});
  const loaderData = useLoaderData();
  const {id} = useParams();

  useEffect(()=>{
    const findData = loaderData.find(card => card.id === id)
    setCard(findData)
  },[id,loaderData])

  return (
    <div>
      <Detail card={card}></Detail>
    </div>
  );
};

export default Details;
