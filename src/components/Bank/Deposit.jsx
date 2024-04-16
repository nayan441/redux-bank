import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { depositDataSuccess } from '../../redux/action';

const Deposit = () => {
    const [updateBalance, setUpdateBalance] =useState(0)
    const dispatch = useDispatch()
    const handleSubmit=()=>{
        console.log("handleSubmit");
        dispatch(depositDataSuccess(updateBalance))
    }
  return (
    <>
    <div>Deposit</div>
    <input type="number" value={updateBalance} onChange={(e)=>{setUpdateBalance(e.target.value)}}/>
    <button onClick={handleSubmit}>Submit</button>
    </>

  )
}

export default Deposit