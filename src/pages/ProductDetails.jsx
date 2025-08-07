import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDetails() {
  const { id, userid } = useParams();

  const [data, setData] = useState(null);

  // ()=>{} -> callback function
  // [var1, var2] -> dependency list/array
  useEffect(() => {
    (async function fetchDetails() {
      try {
        const url = `https://dummyjson.com/products/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        // handle error accrodingly
      }
    })();

  }, []);

  return <div>{data?.title}</div>;
}

export default ProductDetails;
