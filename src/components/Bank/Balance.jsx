import React from 'react'
import { useSelector } from 'react-redux';

const Balance = () => {
    const currentBalance = useSelector(state => state.currentBalance);
    console.log("currentBalance",currentBalance);
  return (
    <>
    <div>Balance</div>
    <p>{currentBalance}</p>
    </>
  )
}

export default Balance