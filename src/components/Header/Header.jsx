import React, { Component } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {HiShoppingCart} from 'react-icons/hi'
import {FaSearch} from 'react-icons/fa'

export default class Header extends Component {

    handleAuthentication() {
        
    }

    render() {
        return (
          <div>
            <nav className='header'>
                <div className='header__left'>
                    <Link to='/'>
                        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
                    </Link>
                    <div className='header__search'>
                        <input type='text' className='header__searchInput' />
                        <FaSearch className='header__searchIcon' />
                    </div>
                </div>

                <div className='header__nav'>
                    <Link className='header__link'>
                    <div onClick={this.handleAuthentication} className='header__option'>
                          <span className='header__optionLineOne'>Hello Guest</span>
                          <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                    </Link>

                    <Link to='/orders'className='header__link'>
                      <div className='header__option'>
                         <span className='header__optionLineOne'>Returns</span>
                         <span  className='header__optionLineTwo'>& Orders</span>
                      </div>
                    </Link>

                    <Link to='/prime'className='header__link'>
                      <div className='header__option'>
                         <span className='header__optionLineOne'>Try</span>
                         <span className='header__optionLineTwo'>prime</span>
                      </div>
                    </Link>

                    <Link to='/checkout' className='header__link'>
                        <div className='header__optionBasket'>
                            <HiShoppingCart  style={{fontSize:'xx-large'}}/>
                            <span className='header__optionLineTwo header__basketCount'>{0}</span>
                        </div>
                </Link>
             </div> 
            </nav>
        </div>
        )
    }
}
