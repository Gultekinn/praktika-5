import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../../Context/Context'
import axios from 'axios'
const Wishlist = () => {
  const { wishlistItem, SetwishlistItem } = useContext(MainContext)

  useEffect = (() => {
    axios.get("http://localhost:5055/").then((res) => {
    })
  })
  return (
    <div>
      {
        wishlistItem.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="card__img">
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-05.jpg" alt="" />
              </div>
              <h5>{item.name}</h5>
              <p>${item.price}</p>

            </div>
          )
        })
      }





    </div>
  )
}

export default Wishlist