import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../component/Card.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MainContext } from '../Context/Context'
const Card = () => {

  const [data, setData] = useState([])
  const { wishlistItem, SetwishlistItem } = useContext(MainContext);
  const [searchValue, setSeachValue] = useState([]);
  const [dummys, setDummy] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5055/').then((res) => {
      setData(res.data)
    })
  }, [searchValue === "", dummys ? data : ""])
  console.log(data)
  return (
    <div>
      <input id="input"
        type="text"
        placeholder="search barbiee..."
        onChange={(e) => {
          setSeachValue(e.target.value);
          setData(data.filter((item) => item.name.includes(searchValue)));
        }}
      />
      <button id="btn"
        onClick={() => {
          setData([...data.sort((a, b) => a.price - b.price)]);
        }}
      >
        Sort By Price
      </button>

      <div className="cards">

        {
          data && data.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card__img">
                  <img src="https://preview.colorlib.com/theme/cozastore/images/product-05.jpg" alt="" />
                </div>
                <h5>{item.name}</h5>
                <p>${item.price}</p>
                <button onClick={() => {
                  axios.delete(`http://localhost:5055/${item._id}`).then((res) => {

                  })
                }}>Delete</button>
                <button onClick={() => {
                  SetwishlistItem([...wishlistItem, item]);
                }}>Add to basket</button>
                <Link to={`${item._id}`}>Detail</Link>
              </div>
            )
          })

        }
      </div>


    </div>
  )
}

export default Card
