import React from 'react'

export const canvasButton = () => {
    return (
        <button id='sidebarButton' className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        MENU
        </button>
    )
    }
export default function Sidebar() {

    return (
        <div>
            <sidebar id="sidebar" className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid"> 
                    <div className="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                  
                                        <li><a className="dropdown-item" href="/shop">Shop</a></li>
                                        <li><a className="dropdown-item" href="/">Review</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                    </a>
                                        <li><a className="dropdown-item" href="/">Vote</a></li>
                                  
                                </li>
                            </ul>
                            {/* <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    <div className="offcanvas-footer d-flex justify-content-start mb-5 ms-3">
                        {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5> */}
                        <button id='close' type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    </div>
                </div>
                {
                    canvasButton()
                }
            </sidebar>


        </div>
    )
}
