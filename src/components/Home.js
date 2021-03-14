import React from 'react';

class Home extends React.Component {
    advertismentCarousel() {
        return (
            <div style={{ margin: 5 }}>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={('./images/advert1.jpg')} className="d-block w-100" alt="advertisment1" />
                        </div>
                        <div className="carousel-item">
                            <img src={('./images/advert2.jpg')} className="d-block w-100" alt="advertisment2" />
                        </div>
                        <div className="carousel-item">
                            <img src={('./images/advert3.jpg')} className="d-block w-100" alt="advertisment3" />
                        </div>
                        <div className="carousel-item">
                            <img src={('./images/advert4.jpg')} className="d-block w-100" alt="advertisment4" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"></span>
                    </a>
                </div>
            </div>
        )
    }

    infoCard() {
        return (
            <div style={{ margin: 5 }}>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Internet Banking</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Log into Net Banking</h6>
                        <p className="card-text">Internet Banking is a convenient way to do banking from the comfort of your home or office. Avoid the queue or delays and try our simple and secure Internet Banking facility for an unmatched online banking experience.<br />
                        Just login today using your User ID and Password to experience ICICI Bank Internet Banking.</p>
                        <button className="btn btn-success" style={{ margin: 5 }}>I want to log in </button>
                        <button className="btn btn-primary" style={{ margin: 5 }}>I want to create a Account </button>
                    </div>
                </div>
            </div>
        )
    }

    featuresCard() {
        return (
            <div style={{ margin: 5 }}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Features of Internet Banking</h5>
                        <p className="card-text">
                            Explore dashboard of internet banking and different services offered.
                            Explore following features of internet banking post login:
                            </p>
                        <ul>
                            <li>Check Account Statement</li>
                            <li>Payments using Net Banking</li>
                            <li>Transfer Funds</li>
                            <li>Open a Fixed Deposit</li>
                            <li>Pay Utility Bills</li>
                            <button className="btn btn-info" style={{ margin: 5 }}>List of Services offered</button>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.advertismentCarousel()}
                {this.infoCard()}
                {this.featuresCard()}
            </div>
        )
    }
}


export default Home;