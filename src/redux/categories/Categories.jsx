// Define an action type for checking the status.
const CHECK_STATUS = 'CHECK_STATUS';

// Export Action Creators for your actions.
export const checkStatus = () => ({ type: CHECK_STATUS, });

// Set the initial state to be an empty array of categories.
const initState = [];

// Write your reducer and export it as default.
const bookStatusReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
    // For the check status action return a string "Under construction".
      return ['Under construction'];
    default:
      // In case of unknown action - return the current state.
      return state;
  }
};
//  exporting as default
export default bookStatusReducer;