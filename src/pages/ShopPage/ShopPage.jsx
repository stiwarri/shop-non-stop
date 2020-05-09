import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionPage from './CollectionPage/CollectionPage';
import ShopCollections from '../../containers/ShopCollections/ShopCollections';

const ShopPage = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.path}`} exact component={ShopCollections} />
            <Route path={`${match.path}/:collection`} component={CollectionPage} />
        </Switch>
    );
}

export default ShopPage;