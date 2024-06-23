import React from 'react';
import data from '../../src/data';

const ShopPage = () => {
    return (
        <div>
            <h1>Shop Page</h1>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">

                {
                    Object.keys(data).map((key, index) => {
                        return (
                                        
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
        </div>
    );
};

export default ShopPage;

