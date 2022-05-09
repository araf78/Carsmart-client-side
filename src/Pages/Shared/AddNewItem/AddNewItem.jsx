import React from 'react';

const AddNewItem = () => {
    const handleAddItem = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const suplierName = event.target.suplierName.value;

    const item = {name, email, quantity, price, suplierName};

    fetch("http://localhost:5000/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert('user added successfully');
          event.target.reset()
        });
    };
    return (
        <div>
            <h2>Add New Item</h2>
             <form onSubmit={handleAddItem}>
                <input className="mb-3 mt-4" type="text" name="name" placeholder="Name" required />
                <br />
                <input className="mb-3" type="email" name="email" placeholder="Email" required />
                <br />
                <input className="mb-3" type="text" name="quantity" placeholder="quantity" required  />
                <br />
                <input className="mb-3" type="text" name="price" placeholder="price" required  />
                <br />
                <input className="mb-3" type="text" name="suplierName" placeholder="supplier name" required />
                <br />
                <input type="submit" value="add item" />
            </form>
        </div>
    );
};

export default AddNewItem;