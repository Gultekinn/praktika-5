import React from 'react'
import { useState } from 'react'
import Card from '../../../component/Card'
import '../Home/Home.scss'
const Home = () => {
  
  return (
    <div>
<div className="slider">
 <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg" alt="" />
    <div class="carousel-caption d-none d-md-block text1">
        <h5>Women Collection 2018</h5>
        <p>NEW SEASON</p>
        <button className='btn'>SHOP NOW</button>
      </div>
    </div>
    <div class="carousel-item">
    <img src="	https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg" alt="" />
    <div class="carousel-caption d-none d-md-block text1">
        <h5>Women Collection 2018</h5>
        <p>NEW SEASON</p>
        <button className='btn'>SHOP NOW</button>
      </div>
    </div>
    <div class="carousel-item">
    <img src="	https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg" alt="" />   <div class="carousel-caption d-none d-md-block text1">
        <h5>Women Collection 2018</h5>
        <p>NEW SEASON</p>
        <button className='btn'>SHOP NOW</button>
      </div>  
      </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
</div>


<div className="main">
  <div className="main__div1">
<img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" />

 
    </div>

    <div className="main__div1">
   
<img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" />
</div>
 
   


    <div className="main__div1">
<img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" />

 
    </div>

</div>

<div className="section1">
  <div className="h1"> 
  <h1>PRODICT OVERVIEW</h1>
  </div>
 
   <ul>
    <li>All Products</li>
    <li>Women</li>
    <li>Men</li>
    <li>Blog</li>
    <li>Shoes</li>
    <li>Watches</li>
   </ul>
</div>









<Card/>
    </div>
  )
}

export default Home