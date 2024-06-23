import React from 'react';
import data from '../../src/data';

const ShopPage = () => {
    return (
        <div>
            <h1>Shop Page</h1>
            <ul>
                {
                    Object.keys(data).map((key, index) => {
                        return (
                            <li key={index} className='list-unstyled mt-3 mb-3' 
                                <a href={`/${data[key].b}`}>{data[key].a}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default ShopPage;