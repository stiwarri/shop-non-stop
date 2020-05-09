import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const collectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
);

export const loadingCollectionsSelector = createSelector(
    [shopSelector],
    shop => shop.loadingCollections
);

export const collectionSelector = route => {
    return createSelector(
        [collectionsSelector],
        collections => {
            for (let key in collections) {
                if (collections[key].routeName === route) {
                    return collections[key];
                }
            }
        }
    );
};