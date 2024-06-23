import React from 'react';
import data from '../../src/data';
import ProductImage from '../../src/Img/ProductImage';

const ShopPage = () => {
    return (
        <section className="shop">
            <div className="container">
                <div className="row">
                    <div className="d-flex col flex-wrap gap-5">
                        {
                            Object.keys(data).map((key, index) => {
                                return (
                                    <ul id="shopItem" className="card">
                                        <li key={index} className='list-unstyled mt-3 mb-3 card-body d-flex row' style={{ fontSize: '1.5rem' }}>
                                            <ProductImage key= />
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
