import React from 'react';
import { connect } from 'react-redux';

import './CollectionPage.scss';
import ProductPreview from '../../../components/ShopCollections/CollectionPreview/ProductPreview/ProductPreview';
import { collectionSelector } from '../../../redux/selectors/shopSelector';

const CollectionPage = ({ collections, match }) => {
    return (
        <div className='category-page'>
            <div className='title'>{match.params.category}</div>
            <div className='preview'>
                {
                    collections.find(cat => cat.routeName === match.params.category)
                        .items
                        .map(item => {
                            return <ProductPreview key={item.id} item={item} />
                        })
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        collections: collectionSelector(state)
    };
};

export default connect(mapStateToProps)(CollectionPage);