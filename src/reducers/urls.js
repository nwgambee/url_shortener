export const urls = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return [...state, action.url];
    case 'UPDATE_URL':
      return state.filter(url => {
        return url.id !== action.id
      })
    default:
      return state;
  }
};
