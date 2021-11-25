import React from 'react'
import './Navbar.css'
import SearchIcon from "@material-ui/icons/Search";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {RiCoupon2Fill} from 'react-icons/ri'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://nogozo.com/static/mainapp/img/logo.png"
                    alt=""

                />
            </Link>
            <Link to='/' className="anchor">
            <h5>profile</h5> 
            </Link>

            <Link to='/' className="anchor">
            <h5>Address</h5> 
            </Link>

            <Link to='/' className="anchor">
            <h5>Order</h5> 
            </Link>


            

           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <RiCoupon2Fill/>
                <BsFillBookmarkHeartFill/>
                <AiOutlineShoppingCart />

                <Avatar />
            </div>
        </div>
    )
}

export default Header