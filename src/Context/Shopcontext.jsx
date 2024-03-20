import React, { createContext, useEffect, useState } from 'react'



export const Shopcontext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
        
    }

    return cart;
}

const ShopcontextProvider = (Props) => {

    const [all_product,setAllProduct] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json()).then((data)=>setAllProduct(data));
    },[])


    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.new_price*cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextvalue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return (
        <Shopcontext.Provider value={contextvalue}>
            {Props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider
