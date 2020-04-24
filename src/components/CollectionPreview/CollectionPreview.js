import React from 'react';

import './CollectionPreview.scss';
import ProductPreview from './ProductPreview/ProductPreview';

const CollectionPreview = ({ title, routeName, items }) => {
    return (
        <div className='collection-preview'>
            <div className='title'>{title}</div>
            <div className='preview'>
                {
                    items.filter((_, index) => index < 4)
                        .map(item => <ProductPreview key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

export default CollectionPreview;
