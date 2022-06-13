import React, { useState } from 'react'
import ItemList from './ItemList';
import imgProduct1 from '../assets/products/product1.jpg'
import imgProduct2 from '../assets/products/product2.jpg'
import imgProduct3 from '../assets/products/product3.jpg'
import imgProduct4 from '../assets/products/product4.jpg'

const items = [
  {title:'Polo', id:'0', price:'100$', image:`${imgProduct1}`},
  {title:'Polo', id:'1', price:'100$', image:`${imgProduct2}`},
  {title:'Polo', id:'2', price:'100$', image:`${imgProduct3}`},
  {title:'Polo', id:'3', price:'100$', image:`${imgProduct4}`},
  {title:'Polo', id:'4', price:'100$', image:`${imgProduct1}`},
  {title:'Polo', id:'5', price:'100$', image:`${imgProduct1}`},
  {title:'Polo', id:'6', price:'100$', image:`${imgProduct1}`},
];

export default function Item() {
  return (
    <div>
      {items.map((item)=>
        (<ItemList title={item.title} id={item.id} price={item.price} image={item.image}/> )
      )}
    </div>
  )
}


