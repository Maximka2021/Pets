import React, { useState, useEffect } from "react";
import Shop from "./Shop";
import CartItem from "./CartItems";

function ShopContainer({ arr, priceArr }){
    const [shop, setShop] = useState([]);
    const [cartItem, setCartItem] = useState({});
    const [price, setPrice] = useState(0);
    const [shopBtn, setShopBtn] = useState(true)
    const url = "http://localhost:3001/items";

    useEffect(() => {
        fetch(`${url}`)
        .then(r => r.json())
        .then(data => setShop(data))
    }, [])

   const items = shop.map(item => {
    return(
        <div>
            <Shop 
            key={item.id}
            item={item} 
            setCartItem={setCartItem} 
            setPrice={setPrice} 
            />
        </div> 
    )
   })

    return(
        <div className="all-items-container">
            {items}
            <div className={shopBtn ? "cart-hide" : "cart-show"}>
                <h1 className="cart-title">CART</h1>
                <CartItem cartItem={cartItem} arr={arr} priceArr={priceArr} price={price} />
            </div>
            <button onClick={() => setShopBtn(!shopBtn)} className={shopBtn ? "shop-btn-not-moved" : "shop-btn-moved"}>🛒</button>
        </div>
    )
}

export default ShopContainer