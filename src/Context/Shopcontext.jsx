import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product'



export const Shopcontext = createContext(null);

const ShopcontextProvider = (Props) => {
    const contextvalue = {all_product}

    return (
        <Shopcontext.Provider value={contextvalue}>
            {Props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider
