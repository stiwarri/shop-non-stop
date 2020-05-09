import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from './CollectionPreview/CollectionPreview';

import { collectionsSelector } from '../../redux/selectors/shopSelector';

const ShopCollections = ({ collections }) => {
    return (
        <React.Fragment>
            <h1>Collections</h1>
            {
                collections.map(collection => {
                    return <CollectionPreview key={collection.id} {...collection} />
                })
            }
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        collections: collectionsSelector(state)
    }
}

export default connect(mapStateToProps)(ShopCollections);