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
                            <ul className="navbar-nav justify-content-end flex-grow-1 mt-5 fs-5">
                                <li className="nav-item">
                                    <span className="material-symbols-outlined me-2">
                                        shopping_bag
                                    </span>
                                    <a className="nav-link d-flex" href="/shop">
                                        <span className="material-symbols-outlined me-4 align-self-center fs-2">
                                            shopping_bag
                                        </span>
                                        Shop
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href="/">
                                        <span className="material-symbols-outlined me-4 align-self-center fs-2">
                                            reviews
                                        </span>
                                        Review
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href="/">
                                        <span className="material-symbols-outlined me-4 align-self-center fs-2">
                                            voting_chip
                                        </span>
                                        Vote
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="offcanvas-footer d-flex justify-content-start mb-5 ms-3 text-white">
                            <button id='close' type="button" className="btn-close btn-close-white fs- ps-5 ms-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
                {canvasButton()}
            </sidebar>
        </div>
    );
}
