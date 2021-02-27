import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link ,NavLink} 
from "react-router-dom";
import './navbar.css';

class Navbar extends React.Component
{
    render()
    {
        return(
           <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div class="navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="navbar-brand pl-4 ml-4">
                        <a className="nav-link active" aria-current="page" href="#"><i className="fas fa-swatchbook"> SCM</i></a>
                        </li>
                        <br></br><br/>
                        <li className="navbar-brand pl-4 ml-4">
                        <NavLink className="nav-link active" aria-current="page" exact to = "/ViewProductComponent">Home</NavLink>
                        </li>
                        <br/><br/>
                        <li className="navbar-brand">
                        <NavLink className="nav-link" exact to="/ViewDeliveryStatus">Delivery Status</NavLink>
                        </li>
                        <li className="navbar-brand">
                        <form className="d-flex">
                        <input className="form-control me-2" type="search"  placeholder="Search" aria-label="Search"/>
                        <br></br>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        </li>
                        <li className="navbar-brand" px-9>
                     <button style={{marginLeft: "10px"}} a href="#" class="btn btn-info" role="button">Logout</button>
                        </li>
                    </ul>
                  
                    </div>
                </div>
            </nav>
        </div>
        )
    
    }
    
}

export default Navbar
