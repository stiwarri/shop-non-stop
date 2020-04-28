import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionPage from './CollectionPage/CollectionPage';
import ShopCollections from '../../components/ShopCollections/ShopCollections';

const ShopPage = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.path}`} exact component={ShopCollections} />
            <Route path={`${match.path}/:category`} component={CollectionPage} />
        </Switch>
    );
}

export default ShopPage;