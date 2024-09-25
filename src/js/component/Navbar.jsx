
import React from 'react';
import PropTypes from "prop-types";
const Navbar = (props)=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid mx-3">
                    <span className="navbar-brand h1">{props.navBrand}</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            {props.navDatos.map((item, index)=>{
                                return (
                                    <li className="nav-item" key={index}><a className="nav-link" href="#">{item}</a></li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};
Navbar.defaultProps = {navDatos: ['Home', 'About', 'Services', 'Contact'], navBrand:"Start Bootstrap"};
Navbar.prototypes = {navDatos: PropTypes.arrayOf(PropTypes.string) }
export default Navbar;