import React from 'react'
// import Badge from 'react-bootstrap/Badge';
import LunaLogo from '../Img/LunaLogo';

const SupportSec = () => {


    return (
      <section id="supportSec" className='bg-dark text-white'>
        <div className="container py-5">
          <div className="row justify-content-center gap-5">
            <div className="col-lg-12 d-flex row gap-5">
              <h2 className="text-center">Support</h2>
              <div className='row gap-5 flex-wrap my-2'>
                <div className='col py-2'>
                  <LunaLogo />
                </div>
                <div className='col py-2'>
                 <LunaLogo />
                </div>
                <div className='col py-2'>
                  <LunaLogo />
                </div>
                <div className='col py-2'>
                  <LunaLogo />
                </div>
                <div className='col py-2'>
                  <LunaLogo />
                </div>
                <div className='col py-2'>
                  <LunaLogo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

)
}

export default SupportSec