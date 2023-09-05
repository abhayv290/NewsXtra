import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../index.css'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-secondary bg-secondary position-sticky top-0 z-1 ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><b className='bg-danger px-2 py-1'>News-Select</b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item brdrhvr">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item brdrhvr">
                                    <Link className="nav-link" to="/News">News</Link>
                                </li>
                                <li className="nav-item brdrhvr dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/Sports" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sports
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/Sports/Cricket">Cricket</Link></li>
                                        <li><Link className="dropdown-item" to="/Sports/Football">Football</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/Sports/others">Others</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item brdrhvr">
                                    <Link className="nav-link" to="/Science">Science</Link>
                                </li>
                                <li className="nav-item brdrhvr">
                                    <Link className="nav-link" to="/Technology">Technology</Link>
                                </li>

                                <li className="nav-item brdrhvr">
                                    <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item brdrhvr">
                                    <Link className="nav-link" to="/Business">Business</Link>
                                </li>


                            </ul>
                          
                            <li className='mx-2 brdrhvr' style={{listStyleType:'none'}}><Link style={{textDecoration:'none'}} to='/profile'>  <img src="https://icon-library.com/images/white-profile-icon/white-profile-icon-9.jpg" height={'38px'} alt="" /> Sign in</Link></li>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
