import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import { collectionsSelector } from '../../redux/selectors/shopSelector';

class ShopCollections extends React.Component {
    render() {
        const collectionsArray = [];
        for (let key in this.props.collections) {
            collectionsArray.push(this.props.collections[key]);
        }

        return (
            <React.Fragment>
                <h1>Collections</h1>
                {
                    collectionsArray.map(collection => <CollectionPreview key={collection.id} {...collection} />)
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        collections: collectionsSelector(state)
    }
}

export default connect(mapStateToProps)(ShopCollections);