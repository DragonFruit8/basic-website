import React from 'react';
import data from '../../src/data';

const ShopPage = () => {
    return (
        <div>
            <h1>Shop Page</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                                    <ul className='card list-unstyled'>
                        {
                            Object.keys(data).map((key, index) => {
                                return (
                                        <li key={index} className='list-unstyled mt-3 mb-3' style={{ fontSize: '1.5rem' }}>
                                            <a href={`/${data[key].b}`}>{data[key].a}</a>
                                        </li>
                                );
                            })
                        }
                                    </ul >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;

