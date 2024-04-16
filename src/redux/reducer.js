import {
    DEPOSITE_DATA_SUCCESS,
    WITHDRAWL_DATA_SUCCESS,
  } from './action';

const initialState = {
    currentBalance: 1000
  };

  const reducer = (state = initialState, action) => {
    console.log("reducer action----", action);
    switch (action.type) {
      case DEPOSITE_DATA_SUCCESS:
        return   {currentBalance :state.currentBalance + Number(action.payload)}  
  
        case WITHDRAWL_DATA_SUCCESS:
            return  {currentBalance :state.currentBalance - Number(action.payload)}
      default:
        return state;
    }
  };
  
  export default reducer;