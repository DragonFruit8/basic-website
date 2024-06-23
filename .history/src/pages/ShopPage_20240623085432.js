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
                            <div className='container'>
<div class="col">
    
                                <ul className='card list-unstyled'>
                                <li key={index} className='list-unstyled mt-3 mb-3' style={{ fontSize: '1.5rem' }}>
                                    <a href={`/${data[key].b}`}>{data[key].a}</a>
                                    </li>
                                </ul>
</div>
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default ShopPage;