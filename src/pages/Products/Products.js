import React, {Component} from 'react'
import './Products.css'
import productsResponse  from '../../apis'
import {Product} from '../../components';
import { prepareListWithId } from '../../utils';

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

   async componentDidMount() {
        const data = await productsResponse();
        if(data) {
            this.setState({
                products: prepareListWithId(data)
            })
        }
        console.log(this.state.products)
    }

    render() {
        const {products} = this.state;
        return (
            <div className='products'>
                {
                    products.map(product => (
                        <Product product={product} key={product.id} />
                    ))
                }
            </div>
        )
    }
}

export default Products
