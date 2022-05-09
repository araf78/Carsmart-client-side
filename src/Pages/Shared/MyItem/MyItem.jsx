import { getAuth } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import app from '../../../firebase.init';
const auth = getAuth(app);

const MyItem = () => {
    const [item, setItem] = useState([]);
    useEffect(()=>{
       const getMyItems = async()=>{
        const url = `http://localhost:5000/myItem`
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data))
       }
       getMyItems();

    },[])
    
    return (
        <div>
            <h2>My Items {item.length}</h2>
        </div>
    );
};

export default MyItem;