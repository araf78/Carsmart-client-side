import React, { useEffect, useState } from 'react';
import './Inventory.css'
const Inventory = () => {

    const [inventory, setInventory] = useState([]);

    useEffect(()=>{
        fetch('')
        .then(res => res.json())
        .then(data => setInventory(data));
    },[])

    // const inventory = [
    //     {
          
    //       "price": "$3,795.00",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/Mercedes-AMG-GT-GT-C-Roadster-800x487.jpg",
    //       "quantity": 26,
    //       "name": "Datsun latus",
    //       "suplierName": "Haynes Wolf",
    //       "email": "hayneswolf@waab.com",
    //       "description": "Cras gravida augue eu lacus tincidunt, a tristique quam faucibus.\r\n"
    //     },
    //     {
          
    //       "price": "$1,001.34",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/mini-cooper-convertible-800x487.jpg",
    //       "quantity": 37,
    //       "name": "Mercedes lato",
    //       "suplierName": "Lila Mann",
    //       "email": "lilamann@waab.com",
    //       "description": "Use, by you or one client, in a single end product which end users are not charged for.\r\n"
    //     },
    //     {
          
    //       "price": "$2,384.21",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/Ford-Mustang-Shelby-GT350R-2-800x487.jpg",
    //       "quantity": 31,
    //       "name": "BMW asp-223",
    //       "suplierName": "Bird Knox",
    //       "email": "birdknox@waab.com",
    //       "description": "Curabitur leo purus, efficitur a porttitor a, tempus ut tellus. Aliquam eu malesuada lacus. r\n"
    //     },
    //     {
          
    //       "price": "$2,043.90",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/jaguar-xjr-800x487.jpg",
    //       "quantity": 25,
    //       "name": " McLaren 675LT",
    //       "suplierName": "Russo Carter",
    //       "email": "russocarter@waab.com",
    //       "description": "mauris mauris sed metus. Morbi ornare tincidunt ex, a semper ex laoreet nec.\r\n"
    //     },
    //     {
          
    //       "price": "$2,272.66",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/bentley_benteyga-800x487.jpg",
    //       "quantity": 20,
    //       "name": "Mini cooper ss-345",
    //       "suplierName": "Dale Beach",
    //       "email": "dalebeach@waab.com",
    //       "description": "Cras gravida augue eu lacus tincidunt, a tristique quam faucibus. Praesent viverra justo quis.\r\n"
    //     },
    //     {
          
    //       "price": "$2,694.56",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/bentley_continental_gt_speed-800x487.jpg",
    //       "quantity": 33,
    //       "name": "Ford Mustang",
    //       "suplierName": "Julianne Richard",
    //       "email": "juliannerichard@waab.com",
    //       "description": " Aliquam eu malesuada lacus. Quisque ipsum nibh, semper ac volutpat id,.\r\n"
    //     },
    //     {
    //              "price": "$2,694,856",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/Mercedes-AMG-GT-GT-C-Roadster-800x487.jpg",
    //       "quantity": 30,
    //       "name": "Roadsters SPS-45",
    //       "suplierName": "Julianne Richard",
    //       "email": "juliannerichard@waab.com",
    //       "description": "In luctus, nisi id efficitur posuere, orci nisi tincidunt ex, at feugiat.\r\n"
    //     },
    //     {
          
    //       "price": "$1,481.93",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/range-rover-sport-800x487.jpg",
    //       "quantity": 35,
    //       "name": "Cadillac rs-998",
    //       "suplierName": "Lois Murray",
    //       "email": "loismurray@waab.com",
    //       "description": "Use, by you or one client, in a single end product which end users are not charged for.  a buyer fee.\r\n"
    //     },
    //     {
    //                "price": "$1,281.93",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/vw_golf_r-800x487.jpg",
    //       "quantity": 27,
    //       "name": "Sedans MKT_220",
    //       "suplierName": "Kurry Murray",
    //       "email": "kurrymurray@waab.com",
    //       "description": "Mauris non felis eget lacus ullamcorper pulvinar.Cras gravida augue eu lacus tincidunt. f\r\n"
    //     },
    //     {
    //               "price": "$481.93",
    //       "img": "https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/05/post-gallery1-1536x528.jpg",
    //       "quantity": 20,
    //       "name": "Ferrari",
    //       "suplierName": "Lois Murray",
    //       "email": "loismurray@waab.com",
    //       "description": "In luctus, nisi id efficitur posuere, orci nisi tincidunt ex, at feugiat mauris mauris sed metus.\r\n"
    //     }
    //   ]
    return (
        <div className="row row-cols-12 row-cols-md-4 g-4">
            {
                inventory.map(item =>
  <div className="col">
    <div className="card h-100">
        <h5 className="card-title mt-2">{item.name}</h5>
      <div className="card-body">
      <img src={item.img} className="card-img-top mx-auto mb-2" alt="..."/>
        <h4>Quantity: {item.quantity}</h4>
        <p className="card-text">{item.description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div> 
                )
            }
        </div>
    );
};

export default Inventory;