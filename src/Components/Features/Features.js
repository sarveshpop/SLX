import React from 'react' 
import Fly from '../../assets/images/Fly.webp'
import Deliver from '../../assets/images/Deliver.webp'
import Autonomy from '../../assets/images/Autonomy.webp'

const reach = <p> SLX provides a number of services over it's large network around the world, 
                   From a bustling metropolis to a remote hamlet, extend your horizons with SLX.</p>

const convenience = <p> Do not worry about logistics. with SLX you can choose to entrust logistics to us while
                    you focus on your business. You sell, We deliver.</p>

const autonomy = <p> From how you provide service, to who you provide it to; enjoy full autonomy over your 
                     business with SLX. After all, Your business, Your Choice. </p>

const Features = () => {
    return (
        <div className='postParentDiv container-fluid'>
        <br/>
        <h1 className='text-center fs-1 text-focus-in'>Why SLX?</h1>
        <br/>        
            <div className='row'>

            <div className="card-group">
                 
                <div className="col">
                    <div className='usp glass'>
                    <div className='uspAsset'>
                        <img alt="Fly Asset" className="img-fluid" src={Fly}/>
                        </div>
                            <div className="card-body">
                                <span className='card-title text-center fw-bold fs-3'>
                                    Reach
                                </span>
                            </div>
                            <div className='card-text'>
                                {reach}
                            </div>
                    </div>
                </div>
                    
                    <div className="col">
                    <div className='usp glass'>
                    <div className='uspAsset '>
                        <img alt="Deliver Asset" className="img-fluid" src={Deliver}/>
                        </div>
                            <div className="card-body">
                                <span className='card-title text-center fw-bold fs-3'>
                                    Convenience
                                </span>
                            </div>
                            <div className='card-text'>
                                {convenience}
                            </div>
                        </div>
                    </div>
                

                <div className="col">
                    <div className='usp glass'>
                    <div className='uspAsset'>
                        <img alt="Autonomy Asset" className="img-fluid" src={Autonomy}/>
                        </div>
                            <div className="card-body">
                                <span className='card-title text-center fw-bold fs-3'>
                                    Autonomy
                                </span>
                            </div>
                            <div className='card-text'>
                                {autonomy}
                            </div>
                    </div>
                </div>
                <br/>
            </div> 
            </div>
        </div>
    )
}

export default Features
