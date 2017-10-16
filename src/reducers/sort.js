import { orderBy, get } from 'lodash';

export const sort = (result, sort) => {
  const { field, order } = sort;
  if (field) {
    return orderBy([...result], [obj => get(obj, field)], [order]);
  }

  return result;
};

export const toggleSort = (state, sortField) => {
  const { field, order } = state.sort;
  const newSort = (sortField !== field)
    ? { field: sortField, order: 'asc' }
    : { field, order: order === 'desc' ? 'asc' : 'desc' };

  return {
    sort: newSort,
    results: sort(state.results, newSort),
  };
};