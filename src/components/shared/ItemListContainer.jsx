import React, { useEffect, useState } from 'react';
import ItemList from '../views/ItemList';
import imgProduct1 from '../../assets/images/products/product1.jpg';
import imgProduct2 from '../../assets/images/products/product2.jpg';
import imgProduct3 from '../../assets/images/products/product3.jpg';
import imgProduct4 from '../../assets/images/products/product4.jpg';

export default function ItemListContainer() {
  const [loading, setLoading] =useState(true);
  const [error,setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() =>{
    const details = new Promise((res, rej)=>{
      setTimeout(() =>{
        res([
          { id:'ws40', title:'product1', price:'100$', image:`${imgProduct1}`},
          { id:'asde', title:'product2', price:'200$', image:`${imgProduct2}`},
          { id:'dsew', title:'product3', price:'250$', image:`${imgProduct3}`},
          { id:'swrf', title:'product4', price:'200$', image:`${imgProduct4}`},
          { id:'dsew', title:'product5', price:'400$', image:`${imgProduct1}`},
          { id:'qwer', title:'product6', price:'130$', image:`${imgProduct1}`},
        ]);
      },4000);
      });

      details
      .then((result) =>{
        setResultado(result);
      })
      .catch((error)=>{
        setError(true);
        console.log(error);
      })
      .finally(()=>{
        setLoading(false);
      });
    },[]);
  
  return (
    <>
    <div>{loading && 'LOADING...'}</div>
    <div>{error && 'Hubo un error en el pago'}</div>
    <div>{resultado && resultado.map((details)=> (
      <>
      <h3>id de pago:{details.id}</h3>
      <h3>nombre de producto:{details.title}</h3>
      <h3>Precio:{details.price}</h3>
      </>
    ))}
    </div>
    </>
  );
}
