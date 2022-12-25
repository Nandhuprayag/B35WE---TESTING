import React from "react";


export default function Product(props)
{
    const {product, onAdd}=props
    return(
        <div >
            <img className="small" src={product.src} alt={product.src}/><br/>
            <label className="Space">{product.name}</label><br/>
             <div>${product.price}</div>
            <div>{product.quantity}</div>
            <div>
                <button className="Add_btn" onClick={()=>onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    )

}