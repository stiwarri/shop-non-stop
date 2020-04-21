import React from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import SHOP_COLLECTIONS_DATA from '../../assets/mock-data/shop-collections-data';

class ShopCollections extends React.Component {
    state = {
        collections: SHOP_COLLECTIONS_DATA
    };

    render() {
        return (
            <React.Fragment>
                <h1>Collections</h1>
                {
                    this.state.collections.map(category => {
                        return <CollectionPreview key={category.id} {...category} />
                    })
                }
            </React.Fragment>
        );
    }
}

export default ShopCollections;
