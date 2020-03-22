import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./menu.css"
class Menu extends Component {
    render() {
        
        return <div>
        
        <div className="bg-dark sidebar">
            <img src="https://i.ibb.co/vZd4hd6/my-tube.png" className="title-image" alt="logo" />
            <ul className="sidebar-button ">
                <li >
                    <Link className="btn btn-secondary rounded-0 w-100" to="/app/trending">Trending</Link>
                </li>
                <li>
                    <Link className="btn btn-secondary rounded-0 w-100" to="/app/search">Search</Link>
                </li>
                <li>
                    <Link className="btn btn-secondary rounded-0 w-100" to="/app/profile">Profile</Link>
                </li>
                <li>
                    <Link className="btn btn-secondary rounded-0 w-100" to="/app/logout">Logout</Link>
                </li>

            </ul>
        </div>
        </div>;
    }
}

export default Menu;
