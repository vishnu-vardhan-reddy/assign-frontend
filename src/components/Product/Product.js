import React, { Component } from 'react'
import './Product.css'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import {ImagePreview} from '../../utils';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoUrl: '',
            openPhoto: false,
        }
    }

    handleChange = (photoUrl) => {
        this.setState({
            photoUrl,
            openPhoto: true
        })
    }


    render() {
        const {photoUrl, openPhoto} = this.state;
        const { name , imageUrl , price , rating} = this.props.product
        return (
        <div className='product'>
            <div className='product__bottom'>
            <img  src={imageUrl} alt='' onClick={ () => { this.handleChange(imageUrl) } } />
        </div>
          <div className='product__info'>
            <p>{name}</p>
            <div className='product__price'>
                <p>price: &nbsp;</p>
                <small>₹</small>
                <strong>{price}{'.00'}</strong>
            </div>
            <div className='product__rating'>
                {Array(rating)
                    .fill()
                    .map((_, index) =>(
                        <p key={index}><AiFillStar className='product__star'/></p>
                    ))}
                {Array(5 - rating)
                    .fill()
                    .map((_, index) =>(
                        <p key={index}><AiOutlineStar className='product__star'/></p>
                    ))}
                
            </div>
          </div> 
          <div className='product__bottom'>
                <button>Add to Basket</button>       
          </div>
            {
                openPhoto && <ImagePreview openPhoto={openPhoto} images={[photoUrl]} setOpenPhoto={() => {this.setState({openPhoto: false})}}/>
            }
        </div>
        )
    }
}

export default Product;