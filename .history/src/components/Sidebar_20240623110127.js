import React from 'react'
import data from '../../src/data'


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
                                    <a className={`nav-link d-flex ${data.path === `/${data.link1.b}` ? 'active' : ''}`} href="/shop">
                                        <span className="material-symbols-outlined me-4 align-self-center fs-2">
                                            shopping_bag
                                        </span>
                                        {data.link1.a}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link d-flex ${data.path === `/${data.link2.b}` ? 'active' : ''}`} href={`/${data.link2.b}`}>
                                        <span className="material-symbols-outlined me-4 align-self-center fs-2">
                                            reviews
                                        </span>
                                        {data.link2.a}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link d-flex ${data.path === `/${data.link3.b}` ? 'active' : ''}`} href={`/${data.link3.b}`}>
                                        <span className="material-symbols-outlined me-4 align-self-center fs-2">
                                            voting_chip
                                        </span>
                                        {data.link3.a}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="offcanvas-footer d-flex justify-content-start mb-5 ms-3 text-white">
                            <button id='close' type="button" className="btn-close btn-close-white fs-2 ps-5 ms-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
                
                    {canvasButton()}
                
            </sidebar>
        </div>
    );
}
