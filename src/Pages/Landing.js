import React from 'react'
import { Container} from 'react-bootstrap'
import Header from '../Components/Header/Header';
import Explore from '../assets/images/Explore.png'

const Landing = () => {
    return (
        
        <main>
        <Header/>
        <div className='gradientBackground'>
        <div className="inner-header flex">
            <Container>
                <h3 className='text-center py-5 text-white'> Buy and Sell stuff online with SLX at the push of a button! </h3>
                    <div className='d-flex py-5'>
                        <a href='#Features'>
                        <button type="button" className="btn btn-primary">Learn More</button>
                        </a>
                    </div>
              
            </Container>
        </div>
        <div>
            
            </div>
             <img alt='Explorer' className='wobble-hor-bottom' style={{width:600}} src={Explore} />
            </div>
        </main>
    )
}

export default Landing