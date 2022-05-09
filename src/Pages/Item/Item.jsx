import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    const { name, img, description, quantity} = item;
    const navigate = useNavigate();
    // console.log(item)

    const navigateToItemDetail = id =>{
        navigate(`/item/${id}`)
    }

  return (
    <div className="col ">
      <div className="card border border-danger h-100">
        <h5 className="card-title fs-3 mt-2">{name}</h5>
        <div className="card-body">
          <img src={img} className="card-img-top mx-auto mb-2" alt="..." />
          <h4>Quantity: {quantity}</h4>
          <p className="card-text">{description}</p>
        </div>
        <Link to={`/item/${item._id}`} className="card-footer bg-danger">
          <small className=" text-light">Update</small>
        </Link>
      </div>
    </div>
  );
};

export default Item;
