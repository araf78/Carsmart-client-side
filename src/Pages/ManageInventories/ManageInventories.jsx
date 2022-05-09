import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../Pages/./Shared/Header/Header.css'

const ManageInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-journey-23423.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  // delete item 
  const handleUserDelete = id =>{
    const proceed = confirm('Are you sure you want to delete?');
    if(proceed){
        const url= `https://afternoon-journey-23423.herokuapp.com/item/${id}`;
        fetch(url,{
           method:'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
              const remaining = inventories.filter(item => item._id !== id);
              setInventories(remaining)
            }
        })
    }
}

  return (
    <div>
      <h2 className="title mb-4">Manage Inventories</h2>
      <Link to="/addNewItem" className="btn btn-outline-primary me-5 mb-4" type="submit">Add new item</Link>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">*</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Supplier Name</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  </table>

      {inventories.map((item) => {
        return (
          <table className="table table-striped">
            <tbody >
              <tr scope="col">
                <th >*</th>
                <td >{item.name}</td>
                <td>{item.price}</td>
                <td>{item.suplierName}</td>
                <td>{item.quantity}</td>

                <td>
                <Link to="/myItem" className="btn btn-outline-success me-3" type="submit">Update stock</Link>
                  <button onClick={()=>handleUserDelete(item._id)} className="btn btn-outline-danger" type="submit">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default ManageInventories;
