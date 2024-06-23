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
                           
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default ShopPage;

