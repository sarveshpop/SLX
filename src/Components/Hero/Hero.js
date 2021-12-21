import React from 'react'
import Teamwork from '../../assets/images/Teamwork.webp'
import Treasure from '../../assets/images/Treasure.webp'

const heading = <span>Welcome To SLX</span>
const subHeading1 = <span>We make commerce convenient.</span>
const subHeading2 = <span>It's a Team Effort...</span>
const heroDesc1= <span>A plethora of tools at your behest to make your
                        E-commerce journey as convenient and hassel free as possible.</span>
const heroDesc2= <span>Entrepreneurs, who utilize SLX to host thier businesses make us a reality.
                        Join now and become a part of the large collaborative network of trade that is SLX.</span>                        

const Hero = () => {
    return (
        <div className='postParentDiv container-fluid'>
        <h1 className='text-center greetMobile mobile focus-in-expand'>{heading}</h1>
        <h3 className='mobile text-focus-in'>{subHeading1}</h3>
        <img className='img-fluid mobile float-start slide-in-blurred-left' alt='Treasure' src={Treasure}/>
        <h4 className='mobile text-focus-in'>{heroDesc1}</h4>
        <h3 className='mobile text-focus-in'>{subHeading2}</h3>
        <img className='img-fluid mobile float-start slide-in-blurred-right' alt='Treasure' src={Teamwork}/>
        <h4 className='mobile text-focus-in'>{heroDesc2}</h4>
          <div className='lff'>
          <br/>
            <div className='row pb-5 heroDiv'>
                
                <div className='col-4 g-0'>
                    <img alt="Treasure Asset" className='heroAssetLeft float-start slide-in-blurred-left' src={Treasure}/>
                </div>
                <div className='col-6'>
                    <div className='container right-positioner text-focus-in'>
                        <h1 className='big-heading focus-in-expand'>{heading}</h1>
                        <h3 className='big-sub-heading'>{subHeading1}</h3>
                        <h4>{heroDesc1}</h4>
                    </div>
                </div>
            </div>
            <br/>
            <div className='row pb-5'>
            <div className='col'>
                    <div className='container middle-positioner text-focus-in'>
                        <h3 className='big-sub-heading'>{subHeading2}</h3>
                        <h4>{heroDesc2}</h4>
                    </div>
                </div>
                <div className='col'>
                    <img alt="Teamwork Asset" className='heroAssetRight float-end slide-in-blurred-right' src={Teamwork}/>
                </div>
              </div>  
            </div>
            <br/>
        </div>
        
    )
}

export default Hero
