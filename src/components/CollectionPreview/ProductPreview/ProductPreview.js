import React from 'react';

import './ProductPreview.scss';

const ProductPreview = ({name, imageUrl, price}) => {
    return (
        <div className='product-preview'>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='product-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    );
}

export default ProductPreview;
