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
                            <li key={index}>
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