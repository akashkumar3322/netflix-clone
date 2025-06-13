import React from 'react'
import './Navbar.css'

const Navbar = () => {
    let click="Sign in";
    const btn=()=>{
        alert("sign in successfully");
    }

  return (
    <>
    <div className="header">
        <div className="log">
            <h1>Netflix</h1>
        </div>
        <div className="button">
            <button onClick={btn}>{click}</button>
        </div>
    </div>
    </>
  )
}

export default Navbar