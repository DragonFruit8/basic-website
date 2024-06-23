import React from 'react';
import data from '../../src/data';

const ShopPage = () => {
    return (
        <>
            
            <h1>Shop Page</h1>
            <ul>
                <li>{data.shopLink}</li>
                <li>{data.reviewsLink}</li>
                <li>{data.thcProductsLink}</li>
                <li>{data.ballroomDanceLessonsLink}</li>
            </ul>
        </>
    );
};

export default ShopPage;