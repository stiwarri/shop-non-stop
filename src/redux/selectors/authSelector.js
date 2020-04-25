import { createSelector } from 'reselect';

const authSelector = state => state.auth;

export const authStatusSelector = createSelector(
    [authSelector],
    auth => auth.token !== null
);

export const authLoadingSelector = createSelector(
    [authSelector],
    auth => auth.loading
);