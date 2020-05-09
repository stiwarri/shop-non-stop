import React from 'react';

import './CollectionPreview.scss';
import ProductPreview from './ProductPreview/ProductPreview';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, routeName, items, history, match }) => {
    const currentRoute = match.path;

    return (
        <div className='collection-preview'>
            <div className='title'
                onClick={() => {
                    history.push(`${currentRoute}/${routeName}`);
                }}>
                {title}
            </div>

            <div className='preview'>
                {
                    items.filter((_, index) => index < 4)
                        .map(item => <ProductPreview key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

export default withRouter(CollectionPreview);
