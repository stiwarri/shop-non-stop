import { createSelector } from 'reselect';

const modalSelector = state => state.modal;

export const showModalSelector = createSelector(
    [modalSelector],
    modal => modal.showModal
);

export const modalMessageSelector = createSelector(
    [modalSelector],
    modal => modal.modalMessage
);