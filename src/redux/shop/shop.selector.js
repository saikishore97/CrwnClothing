import {createSelector} from 'reselect';


const shopSelector = state=>state.shop;

export const shopDataSelector=createSelector(
    [shopSelector],
    shop=>shop.data
);

export const selectCategory=categoryString=>createSelector(
    [shopDataSelector],
    data=>data[categoryString]
);

export const selectCollectionsForPreview=createSelector(
    [shopDataSelector],
    data=>Object.keys(data).map(key => data[key])
);