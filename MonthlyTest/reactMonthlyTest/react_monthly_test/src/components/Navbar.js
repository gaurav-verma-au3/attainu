import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        const loggedIn = localStorage.getItem("user");

        return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
                    <a className="navbar-brand text-white" href="/"><img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" style={{ width: '100px' }} alt="logo"></img></a>
                    <form className="form-inline my-2 my-lg-0">
                        <div class="input-group input-group-sm">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </form>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        {loggedIn === null ? '' : <ul className="navbar-nav ml-auto d-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My Account
      </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/profile">Profile</a>
                                    <a className="dropdown-item text-danger" href="/logout">Logout</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/addproduct">Add Product</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="/"> <img alt="cart-icon" src="https://i.ibb.co/vYj0y4C/kisspng-shopping-cart-computer-icons-white-cart-png-simple-5ab15d036a4b75-3538919915215731234354.png" style={{ width: '25px' }}></img> Cart</a>
                            </li>
                        </ul>}


                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar