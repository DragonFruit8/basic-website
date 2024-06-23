import React from 'react';
import data from '../../src/data';

const ShopPage = () => {
    return (
        <div>
            <h1>Shop Page</h1>
            <ul>
                <li>{data.ballroomDanceLessonsLink}</li>
                <li>{data.reviewsLink}</li>
                <li>{data.thcProductsLink}</li>
            </ul>
        </div>
    );
};

export default ShopPage;