// Action Types
export const DEPOSITE_DATA_REQUEST = 'DEPOSITE_DATA_REQUEST';
export const DEPOSITE_DATA_SUCCESS = 'DEPOSITE_DATA_SUCCESS';
export const DEPOSITE_DATA_FAILURE = 'DEPOSITE_DATA_FAILURE';

export const WITHDRAWL_DATA_REQUEST = 'WITHDRAWL_DATA_REQUEST';
export const WITHDRAWL_DATA_SUCCESS = 'WITHDRAWL_DATA_SUCCESS';
export const WITHDRAWL_DATA_FAILURE = 'WITHDRAWL_DATA_FAILURE';

// Action Creators

export const withdrawlDataSuccess = (data) => {
  console.log("withdrawlDataSuccess", data)
  return {
    type: WITHDRAWL_DATA_SUCCESS,
    payload: data,
  };
};
export const depositDataSuccess = (data) => {
  console.log("depositDataSuccess", data)
  return {
    type: DEPOSITE_DATA_SUCCESS,
    payload: data,
  };
};

// export const withdrawlDataSuccess= (data)=>{
//     return (dispatch)=>{
//         dispatch(withdrawlData(data));
//     }    
// }
// export const depositDataSuccess= (data)=>{
//     return (dispatch)=>{
//         dispatch(depositData(data));
//     }    
    
// }
