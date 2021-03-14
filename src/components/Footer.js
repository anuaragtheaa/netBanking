import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'#2d3246', color:'wheat'}}>
                <div className="row" >
                    <div className="col" style={{margin:5}}>
                        It's a internet Banking website where you can control your Account.<br />
                        &#169; Net Banking. All right reserved.
                    </div>
                    <div className="col" style={{margin:5}}>
                        <span>Contacts</span><br />
                        <span>Address</span><span>Anand, Gujarat, India</span><br />
                        <span>Phone</span><span>8965237412</span><br />
                        <span>Email</span><span>netbanking@gmail.com</span><br />
                    </div>
                    <div className="col" style={{margin:5}}>
                        <span>Links</span><br />
                        <span>Home</span><br />
                        <span>About</span><br />
                        <span>Contact</span><br />
                        <span>Help</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <i className="fa fa-facebook-square fa-lg"></i>
                    <i className="fa fa-google-plus-square fa-lg"></i>
                    <i className="fa fa-twitter-square fa-lg"></i>
                </div>
            </div>
        )
    }
}

export default Footer;