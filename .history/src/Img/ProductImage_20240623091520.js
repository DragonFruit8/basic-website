import React from 'react'
import '../../src/Img/Luna_logo.png'
const ProductImage = () => {
    const productImg = require('../../src/Img/Luna_logo.png')
    return (
        <div>
            <img
                id='luna'
                src={productImg}
                alt="placeholder"
                className="img-fluid" 
                width                
                />
        </div>
    )
}

export default ProductImage