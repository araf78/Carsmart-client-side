
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Itemdetail.css'

const ItemDetail = () => {
    const {itemId} = useParams();

    const [item, setItem] = useState({});
    const [reload, setReload] = useState(true);

    useEffect(()=>{
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    },[itemId]);
 
    const handleItemQuantity =(event)=>{
        event.preventDefault();
        const quantity = parseInt(item.quantity)-1;
        const newQuantity = quantity;
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({newQuantity})
        })
        .then(res => res.json())
        .then(data => {
            console.log('Quantity',data)
            alert('Item Quantity add')
            event.target.reset()
        })
    };

   
    // useEffect(()=>{
    //     const url = `http://localhost:5000/item/${itemId}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setReload(data))
    // },[itemId]);

    //     const handleItemQuantity = ()=>{
    //         const 
    //     }

    return (
       <div>
           <h2 className="fs-3 text-danger fw-bolder mb-5">Detail Information</h2>
           <div className="item-detail mx-auto shadow">
               <h2>{item.name}</h2>
               <img className="w-50 mt-1" src={item.img} alt="" />
               <p className="mt-2">Price: {item.price}</p>
               <p className="w-50 mx-auto" >{item.description}</p>
               <h4>Quantity: {item.quantity}</h4>
           </div>
           <input className="p-1 mb-4 w-25" type="number" name="quantity" placeholder="quantity" /> <br />
           <Link to="/manageInventories" className="btn btn-outline-dark me-5">Manage Inventories</Link>
           <button onClick={handleItemQuantity} type="button" className="btn btn-outline-dark">Delivery</button>
       </div>
    );
};

export default ItemDetail;