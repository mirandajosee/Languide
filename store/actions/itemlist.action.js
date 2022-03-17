export const FILTER_ITEMLIST = 'FILTER_ITEMLIST';
export const SEARCH_ACTION = 'SEARCH_ACTION';

export const selectFilter = (id) => ({
  type: FILTER_ITEMLIST,
  filterID: id,
})

export const SearchAction = (textInput) => ({
  type:  SEARCH_ACTION,
  textInput: textInput
})