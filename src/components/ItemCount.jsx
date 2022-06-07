import React, { useState } from 'react'

const ItemCount = ({inicial,max,onAdd}) => {
    const[count, setCount] = useState(inicial)

    const sumar = () => {
        if(count < max){
            setCount(count +1)
        }else{
            alert('No puedes agregar mas productos')
        }
    }
    const restar = () => {
     count > inicial ? setCount (count -1) : alert('No puedes quitar mas productos')
    }
    const reset =() => {
        setCount(inicial)
    }

  return (
    <>
        <h2 style={{display:"flex",justifyContent:"center"}}>{count}</h2>
        <div style={{display:"flex",justifyContent:"center",padding:"30px"}}>
        <button style={{margin:"5px 10px", padding:"10px"}} onClick={sumar}>+</button>
        <button style={{margin:"5px 10px", padding:"10px"}} onClick={restar}>-</button>
        <button style={{margin:"5px 10px", padding:"10px"}} onClick={reset}>Reset</button>
        <button style={{margin:"5px 10px", padding:"10px"}} onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemCount