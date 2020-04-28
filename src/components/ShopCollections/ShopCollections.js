import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from './CollectionPreview/CollectionPreview';

import { collectionSelector } from '../../redux/selectors/shopSelector';

const ShopCollections = ({ collections }) => {
    return (
        <React.Fragment>
            <h1>Collections</h1>
            {
                collections.map(category => {
                    return <CollectionPreview key={category.id} {...category} />
                })
            }
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        collections: collectionSelector(state)
    }
}

export default connect(mapStateToProps)(ShopCollections);