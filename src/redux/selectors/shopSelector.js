import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const collectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
);

export const collectionSelector = route => {
    return createSelector(
        [collectionsSelector],
        collections => collections.find(col => col.routeName === route)
    );
};