import { firestore } from '../../utils/firebase.util';
import * as actionTypes from './actionTypes';

export const getShopCollections = () => {
    return async dispatch => {
        dispatch(getShopCollectionsStart());
        try {
            const collectionsRef = firestore.collection('collections');
            const collectionSnapshot = await collectionsRef.get();
            const shopCollections = collectionSnapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } });
            dispatch(getShopCollectionsSuccess(shopCollections));
        } catch (err) {
            dispatch(getShopCollectionsFail());
        }
    };
};

const getShopCollectionsStart = () => {
    return {
        type: actionTypes.GET_SHOP_COLLECTIONS_START
    };
};

const getShopCollectionsSuccess = shopCollections => {
    return {
        type: actionTypes.GET_SHOP_COLLECTIONS_SUCCESS,
        collectionsData: shopCollections
    };
};

const getShopCollectionsFail = () => {
    return {
        type: actionTypes.GET_SHOP_COLLECTIONS_FAIL
    };
};