import React from 'react';

import '../css/AboutUs.css'

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <div className="image-aboutus-banner" style={{ marginTop: 70 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="lg-text">About Us</h1>
                                <p className="image-aboutus-para">Get to Know about site Developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutus-secktion paddingTB60">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h1 className="strong">Who we are and<br />what we do</h1>
                                <p className="lead">Tried to Replicate a net banking site.<br />easy and quick </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>Tried to replicate the ICICI net banking site and provide maximium number of servies which are provied by Origanal site. And also learn how a actual banking site work</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container team-sektion paddingTB60">
                    <div className="row justify-content-center">
                        <div className="site-heading ">
                            <h3>Our Team</h3>
                            <p>Our team consiste of two member <br />One for Front End and one for Back End</p>
                            <div className="border"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 team-box">
                            <div className="team-img thumbnail">
                                <div className="d-flex justify-content-center">
                                    <img src={('/images/user.jpg')} alt="anurag pic" />
                                </div>
                                <div className="team-content">
                                    <h3>Anurag</h3>
                                    <div className="border-team"></div>
                                    <p>Developed the Back End using Python's Django Framework</p>
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                                        <a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                                        <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                                        <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 team-box">
                            <div className="team-img thumbnail">
                                <div className="d-flex justify-content-center">
                                    <img src={('/images/user.jpg')} alt="ritik pic" />
                                </div>
                                <div className="team-content">
                                    <h3>Ritik</h3>
                                    <div className="border-team"></div>
                                    <p>Developed the Front End using React.</p>
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                                        <a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                                        <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                                        <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;