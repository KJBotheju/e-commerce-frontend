import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box-fade">
            Reviews(122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and 
            selling of goods and services over the Internet. These websites provide users 
            with a virtual marketplace where they can browse, select, and purchase products
             or services from the comfort of their homes. Typically equipped with secure 
             payment gateways, e-commerce websites ensure safe transactions, fostering 
             trust between buyers and sellers. Additionally, they often feature 
             user-friendly interfaces, personalized recommendations, and efficient search 
             functionalities to enhance the overall shopping experience. E-commerce has 
             revolutionized the retail industry, offering convenience, a vast array of 
             choices, and the flexibility of 24/7 accessibility, making it an integral 
             part of modern commerce.</p>
             <p>         
                E-commerce websites streamline the buying process, providing a seamless online shopping 
                experience and contributing to the global shift towards digital commerce.
             </p>
      </div>
    </div>
  )
}

export default DescriptionBox
