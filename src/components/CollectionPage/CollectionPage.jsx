import React from 'react';
import { connect } from 'react-redux';

import './CollectionPage.scss';
import ProductPreview from '../CollectionPreview/ProductPreview/ProductPreview';
import { collectionSelector } from '../../redux/selectors/shopSelector';

const CollectionPage = ({ collection, match }) => {
    return (
        <div className='collection-page'>
            <div className='title'>{match.params.collection}</div>
            <div className='preview'>
                {
                    collection.items.map(item => {
                        return <ProductPreview key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        collection: collectionSelector(ownProps.match.params.collection)(state)
    };
};

export default connect(mapStateToProps)(CollectionPage);