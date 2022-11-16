import React from "react";

function CartItem({ cartItem, arr, priceArr, price }){
    priceArr.push(price)
    arr.push(cartItem)
    let priceTotal = priceArr.reduce((a, b) => a + b);
    const items = arr.map(item => {
        function handleClick(e){
           e.target.remove()
           priceTotal -= parseFloat(item.price)
        }
        return(
            <div onDoubleClick={(e) => handleClick(e)}>
                <h1 className="item-name">{item.name} {item.price}</h1>
            </div>
        )
    })
    return(
        <div>
            <h1 className="list-items">{items}</h1>
            <h1>Total: ${parseFloat(priceTotal).toFixed(2)}</h1>
        </div>
    )
}

export default CartItem