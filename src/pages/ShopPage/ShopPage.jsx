import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import CollectionPage from '../../components/CollectionPage/CollectionPage';
import ShopCollections from '../../containers/ShopCollections/ShopCollections';
import WithSpinner from '../../hoc/WithSpinner/WithSpinner';

import * as shopActionCreators from '../../redux/actions/shopAction';
import { collectionsSelector, loadingCollectionsSelector } from '../../redux/selectors/shopSelector';

const ShopCollectionsWithSpinner = WithSpinner(ShopCollections);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.path}`} exact render={() => <ShopCollectionsWithSpinner isLoading={this.props.loadingCollections} />} />
                {
                    this.props.collections ?
                        <Route path={`${this.props.match.path}/:collection`} render={() => <CollectionPageWithSpinner isLoading={this.props.loadingCollections} />} />
                        : null
                }
            </Switch>
        );
    }

    componentDidMount() {
        this.props.getCollectionsData();
    }
}

const mapStateToProps = state => {
    return {
        collections: collectionsSelector(state),
        loadingCollections: loadingCollectionsSelector(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCollectionsData: () => dispatch(shopActionCreators.getShopCollections())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);