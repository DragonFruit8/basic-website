import React from 'react';
import data from '../../src/data';
import ProductImage from '../../src/Img/ProductImage';

const ShopPage = () => {
    return (
        <section className="shop">
            <div className="container">
                <div className="row mt-5">
                    <div className="d-flex col flex-wrap gap-5">
                        {
                            Object.keys(data).map((key, index) => {
                                return (
                                    <ul id="shopItem" className="card">
                                            <a href={`/${data[key].b}`} className="d-flex justify-content-start mb-2">
                                        <li key={index} className='list-unstyled mt-3 mb-3 card-body' style={{ fontSize: '1.5rem' }}>
                                                <ProductImage />
                                            <p className="d-flex justify-content-start text-black fs-4">{data[key].a}</p>
                                                {/* {data[key].a} */}
                                            <p className="d-flex justify-content-start text-black fs-5">Description</p>
                                            <p className="d-flex justify-content-start text-black fs-5">Price $</p>
                                        </li>
                                            </a>
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
