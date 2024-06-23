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
                            <ul className="navbar-nav justify-content-end flex-grow-1 mt-5">
                                <li className="nav-item row">
                                    <span className="material-symbols-outlined">
                                        shopping_bag
                                    </span>
                                    <a className="nav-link" href="/shop">
                                        <span className="material-symbols-outlined">
                                            shopping_bag
                                        </span>
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/">
                                        <span className="material-symbols-outlined">
                                            
                                        </span>
                                        Review
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="nav-link" href="/">
                                        <span className="material-symbols-outlined">
                                            vote
                                        </span>
                                        Vote
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="offcanvas-footer d-flex justify-content-start mb-5 ms-3 text-white">
                            <button id='close' type="button" className="btn-close btn-close-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
                {canvasButton()}
            </sidebar>
        </div>
    );
}
