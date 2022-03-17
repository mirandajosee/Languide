export const FILTER_ITEMLIST = 'FILTER_ITEMLIST';

export const selectFilter = (id) => ({
  type: FILTER_ITEMLIST,
  filterID: id,
})