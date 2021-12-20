import React from 'react' 
import Fly from '../../assets/images/Fly.png'
import Deliver from '../../assets/images/Deliver.png'
import Autonomy from '../../assets/images/Autonomy.png'

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
                                <h3 className='card-title text-center'>
                                    Reach
                                </h3>
                            </div>
                            <div className='card-text'>
                                <p>
                                    SLX provides a number of services over it's large network around the world, 
                                    From a bustling metropolis to a remote hamlet, extend your horizons with SLX.
                                </p>
                            </div>
                    </div>
                </div>
                    
                    <div className="col">
                    <div className='usp glass'>
                    <div className='uspAsset '>
                        <img alt="Deliver Asset" className="img-fluid" src={Deliver}/>
                        </div>
                            <div className="card-body">
                                <h3 className='card-title text-center'>
                                    Convenience
                                </h3>
                            </div>
                            <div className='card-text'>
                                <p>
                                    SLX provides a number of services over it's large network around the world, 
                                    From a bustling metropolis to a remote hamlet, extend your horizons with SLX.
                                </p>
                            </div>
                        </div>
                    </div>
                

                <div className="col">
                    <div className='usp glass'>
                    <div className='uspAsset'>
                        <img alt="Autonomy Asset" className="img-fluid" src={Autonomy}/>
                        </div>
                            <div className="card-body">
                                <h3 className='card-title text-center'>
                                    Autonomy
                                </h3>
                            </div>
                            <div className='card-text'>
                                <p>
                                    SLX provides a number of services over it's large network around the world, 
                                    From a bustling metropolis to a remote hamlet, extend your horizons with SLX.
                                </p>
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
