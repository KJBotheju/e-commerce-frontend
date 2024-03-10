import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { Shopcontext } from '../Context/Shopcontext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (Props) => {
  const {all_product} = useContext(Shopcontext);
  return (
    <div className='shop-category'>
      <img src={Props.banner} alt="" />
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(Props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price={item.old_price} />
          }else{
            return null;
          }
        })}
      </div>

    </div>
  )
}

export default ShopCategory
