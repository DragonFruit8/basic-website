import React from 'react';
import data from '../../src/data';

const ShopPage = () => {
    return (
        <div>
            <h1>Shop Page</h1>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">

                {
                    Object.keys(data).map((key, index) => {
                        return (
                                        <div className="hero-content">
                                            <h1>Welcome to My Website</h1>
                                            <p>Discover the amazing POWR of our products.</p>
                                            <button className="btn btn-primary">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default ShopPage;

// <ul className='card list-unstyled'>
{/* <li key={index} className='list-unstyled mt-3 mb-3' style={{ fontSize: '1.5rem' }}>
    <a href={`/${data[key].b}`}>{data[key].a}</a>
</li>
                                            </ul > */}