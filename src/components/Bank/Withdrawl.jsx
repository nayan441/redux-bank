import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { withdrawlDataSuccess } from '../../redux/action';

const Withdrawl = () => {
    const [updateBalance, setUpdateBalance] =useState(0)
    const dispatch = useDispatch()
    const handleSubmit=()=>{
        console.log("handleSubmit");
        dispatch(withdrawlDataSuccess(updateBalance))
    }
  return (
    <>
    <div>Withdrawl</div>
    <input type="number" value={updateBalance} onChange={(e)=>{setUpdateBalance(e.target.value)}}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Withdrawl

