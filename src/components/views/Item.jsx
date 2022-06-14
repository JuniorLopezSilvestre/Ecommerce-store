import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import ItemList from '../views/ItemList';
import imgProduct1 from '../../assets/images/products/product1.jpg'
import imgProduct2 from '../../assets/images/products/product2.jpg'
import imgProduct3 from '../../assets/images/products/product3.jpg'
import imgProduct4 from '../../assets/images/products/product4.jpg'
import imgProduct5 from '../../assets/images/products/product5.jpg'
import imgProduct6 from '../../assets/images/products/product6.jpg'
import imgProduct7 from '../../assets/images/products/product7.jpg'

const items = [
  {title:'McCormick® Original Taco Seasoning Mix', id:'0', price:'$2.29', image:`${imgProduct1}`},
  {title:'Signature Kitchens Honey, Clover', id:'1', price:'$5.79', image:`${imgProduct2}`},
  {title:'Green Onions (Scallions)', id:'2', price:'$1.79', image:`${imgProduct3}`},
  {title:'Driscolls Organic Raspberries', id:'3', price:'$6.89', image:`${imgProduct4}`},
  {title:'Tree Top Apple Sauce, No Sugar Added, Pouches', id:'4', price:'$9.19', image:`${imgProduct5}`},
  {title:'FF Anti Biotic Free Simply Raised Skinless Boneless Chicken Thigh', id:'5', price:'$10.39', image:`${imgProduct6}`},
  {title:'Dove Body Wash Deep Moisture', id:'6', price:'$10.99', image:`${imgProduct7}`},
];

export default function Item() {
  return (
    <Grid container spacing={3} maxWidth="1300px" margin="auto">
      {items.map((item)=>
        (
          <ItemList title={item.title} id={item.id} price={item.price} image={item.image}/>
        )
      )}
    </Grid>
  )
}


