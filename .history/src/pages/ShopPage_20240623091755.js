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
                                        <li key={index} className='list-unstyled mt-3 mb-3 card-body' style={{ fontSize: '1.5rem' }}>
                                            <ProductImage />
                                            <a href={`/${data[key].b}`} className="d-flex justify-content-start">{data[key].a}</a>
                                            <p className="d-flex justify-content-start text-black">Description</p>
                                            <p className="d-flex justify-content-start text-black">Price </p>
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
