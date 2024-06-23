import React from 'react';
import data from '../../src/data';

const ShopPage = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <ul>
                            
                        </ul>
                        {
                            Object.keys(data).map((key, index) => {
                                return (
                                    <li key={index} className='list-unstyled mt-3 mb-3' style={{ fontSize: '1.5rem' }}>
                                        <a href={`/${data[key].b}`}>{data[key].a}</a>
                                    </li>
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

{/* <div className='mt-5 relative'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <ul className='card list-unstyled'>
                    
                </ul>
            </div>
        </div>
    </div>
</div> */}