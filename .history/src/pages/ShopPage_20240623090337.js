import React from 'react';
import data from '../../src/data';

const ShopPage = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="col">
                    <div className="row-lg-12 justify-content-center">
                        {
                            Object.keys(data).map((key, index) => {
                                return (
                                    <ul className="card">
                                        <li key={index} className='list-unstyled mt-3 mb-3 card-body' style={{ fontSize: '1.5rem' }}>
                                            <a href={`/${data[key].b}`}>{data[key].a}</a>
                                        </li>
                                    </ul>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPage;
