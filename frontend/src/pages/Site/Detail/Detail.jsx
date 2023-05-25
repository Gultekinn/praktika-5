
import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../Detail/Detail.scss'
const Detail = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:5055/${id}`).then((res) => [
      setData(res.data)
    ])
  })
  return (
    <div>
      <div className="card">
        <div className="card__img">
          <img src="https://preview.colorlib.com/theme/cozastore/images/product-05.jpg" alt="" />
        </div>
        <h5>{data.name}</h5>
        <p>${data.price}</p>
      </div>

    </div>
  )
}

export default Detail