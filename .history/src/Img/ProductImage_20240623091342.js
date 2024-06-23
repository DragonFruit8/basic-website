import React from 'react'
import '../../src/Img/Luna_logo.png'
const ProductImgage = () => {
    const productImg = require('../../src/Img/Luna_logo.png')
    return (
        <div>
            <img id='luna' src={productImg} alt="placeholder" className="img-fluid" />
        </div>
    )
}

export default ProductImgage