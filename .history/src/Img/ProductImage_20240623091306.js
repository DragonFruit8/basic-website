import React from 'react'
import '../../src/Img/Luna_logo.png'
const LunaLogo = () => {
    const logo = require('../../src/Img/Luna_logo.png')
    return (
        <div>
            <img id='luna' src={logo} alt="placeholder" className="img-fluid" />
        </div>
    )
}

export default LunaLogo