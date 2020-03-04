export const urls = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return [...state, action.url];
    default:
      return state;
  }
};
