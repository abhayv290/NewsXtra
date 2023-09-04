import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Navbar extends Component {
static propTypes={}
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-secondary bg-body-secondary position-sticky top-0 z-1">
                    <div className="container-fluid text-white">
                        <a className="navbar-brand" href="/"><b className='bg-danger px-3 py-1'>News-Select</b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Bussiness</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Technology</a>
                                </li>
                              
                               
                               
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
