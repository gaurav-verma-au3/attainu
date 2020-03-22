import React from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeclassName="active" to="/">
                                Home
      </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeclassName="active" to="/about">
                                AboutUs
      </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeclassName="active" to="/contact">
                                ContactUs
      </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}



export default Navigation