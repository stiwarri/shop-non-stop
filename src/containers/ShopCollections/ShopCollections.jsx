import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as shopActionCreators from '../../redux/actions/shopAction';
import { collectionsSelector, loadingCollectionsSelector } from '../../redux/selectors/shopSelector';

class ShopCollections extends React.Component {
    render() {
        const collectionsArray = [];
        for (let key in this.props.collections) {
            collectionsArray.push(this.props.collections[key]);
        }

        let collectionsTemplate = <Spinner />;
        if (!this.props.loadingCollections) {
            collectionsTemplate = collectionsArray.map(collection => {
                return <CollectionPreview key={collection.title} {...collection} />
            });
        }

        return (
            <React.Fragment>
                <h1>Collections</h1>
                {collectionsTemplate}
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.getShopCollections();
    }
}

const mapStateToProps = state => {
    return {
        collections: collectionsSelector(state),
        loadingCollections: loadingCollectionsSelector(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getShopCollections: () => dispatch(shopActionCreators.getShopCollections())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCollections);