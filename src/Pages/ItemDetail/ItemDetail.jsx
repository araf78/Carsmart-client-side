import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = () => {

    // const [inventories, setInventories] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/item")
    //       .then((res) => res.json())
    //       .then((data) => setInventories(data._id));
    //   }, []);

    return (
       <div>
           <h2 className="fs-3 text-danger fw-bolder mb-5">Detail Information</h2>
           <input className="p-1 mb-4 w-25" type="number" name="number" placeholder="quantity" /> <br />
           <Link to="/manageInventories" className="btn btn-outline-dark me-5">Manage Inventories</Link>
           <button type="button" className="btn btn-outline-dark">Delivery</button>
           div
       </div>
    );
};

export default ItemDetail;