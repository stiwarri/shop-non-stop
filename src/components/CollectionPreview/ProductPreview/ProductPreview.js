import React from 'react';

import './ProductPreview.scss';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import * as cartActionCreators from '../../../redux/actions/cart';

const ProductPreview = ({ item, addItemToCart }) => {
    return (
        <div className='product-preview'>
            <div className='image'
                style={{
                    backgroundImage: `url(${item.imageUrl})`
                }}
            />
            <div className='product-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>${item.price}</span>
            </div>
            <Button clickHandler={() => addItemToCart(item)}>ADD TO CART</Button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: item => dispatch(cartActionCreators.addItemToCart(item))
    };
};

export default connect(null, mapDispatchToProps)(ProductPreview);