import React from 'react'
import Navbar from "../Header/Navbar"

function index(props) {
  return (
    <>
    <Navbar/>
    {props.children}
    </>
  )
}

export default index