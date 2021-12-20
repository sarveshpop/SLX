import React from 'react'
import Teamwork from '../../assets/images/Teamwork.png'
import Treasure from '../../assets/images/Treasure.png'

const Hero = () => {
    return (
        <div className='postParentDiv container-fluid'>
        <h1 className='text-center greetText focus-in-expand'>Welcome to SLX</h1>
            <div className='row pb-5 heroDiv'>
            
                <div className='col'>
                    <img alt="Treasure Asset" className='heroAssetLeft float-start slide-in-blurred-left' src={Treasure}/>
                </div>
                <div className='col'>
                    <div className='container right-positioner text-focus-in'>
                        <h1 className='big-heading focus-in-expand'>Welcome to SLX</h1>
                        <h3 className='big-sub-heading'>We make commerce convenient.</h3>
                        <h4>A gold mine of tools at your behest to make your E-commerce</h4>
                        <h4> journey as convenient and hassel free as possible.</h4>
                    </div>
                </div>
            </div>
            <br/>
            <div className='row pb-5'>
            <div className='col'>
                    <div className='container middle-positioner text-focus-in'>
                        <h3 className='big-sub-heading'>It's a Team Effort...</h3>
                        <h4>Entrepreneurs, who utilize SLX to host thier businesses make us a reality.</h4>
                        <h4>Join now and become a part of the large collaborative network of trade that is SLX.</h4>
                    </div>
                </div>
                <div className='col'>
                    <img alt="Teamwork Asset" className='heroAssetRight float-end slide-in-blurred-right' src={Teamwork}/>
                </div>
                
            </div>
            <br/>
        </div>
        
    )
}

export default Hero
