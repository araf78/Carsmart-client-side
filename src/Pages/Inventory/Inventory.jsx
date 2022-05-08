import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Inventory.css";
const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const homeInventory = inventory.slice(0,6);

  return (
    <div className="row row-cols-12 row-cols-md-3 g-4 m-1">
      {homeInventory.map((item) => 
      {
        return <Item
        key={item._id}
        item={item}
        ></Item>
       }
      )}
    </div>
  );
};

export default Inventory;
