import React from 'react'
import { NavLink } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div style={{margin: "0 auto", textAlign: "center", width: "fit-content"}}>
        <h1>404!</h1>
        <p>Page Not Found</p>
        <div style={{fontSize: "20px"}}>
          <NavLink to={"/"} style={{textDecoration: "none", color: "blue", fontWeight: "600"}}> back &nbsp;</NavLink> 
          <p style={{display: "inline-block"}}> to home </ p>
        </div>
      </div>
  )
}

export default PageNotFound