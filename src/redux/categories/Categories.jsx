const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({ type: CHECK_STATUS, });

const initState = [];

const bookStatusReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default bookStatusReducer;