import React from 'react';

const MyItem = () => {
    return (
        <div>
            <h2>My Items</h2>
            <form>
                <input className="mb-3 mt-4" type="text" name="name" placeholder="Name" required />
                <br />
                <input className="mb-3" type="email" name="email" placeholder="Email" required />
                <br />
                <button className="btn btn-outline-dark" type="submit">Add new item</button>
            </form>
        </div>
    );
};

export default MyItem;