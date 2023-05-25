import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  return (
    <div >
      <div className="navbar">
        <div className="navbar__logo">
<img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" alt="" />
        </div>
<div className="navbar__right">
  <ul>
  <li><Link id='link' to="">Home</Link></li>
  <li><Link id='link' to="add">Add</Link></li>
</ul>
</div>
<div className="navbar__left">
 <div className="icon1">
  <SearchIcon/>
 </div>
<div className="icon2">
<Link to='wishlist'> <ShoppingCartIcon/></Link>
</div>
<div className="icon3">
  <FavoriteBorderIcon/>
</div>
</div>

</div>
    </div>
  )
}

export default Header