import React from 'react';

import LoginCard from './LoginCard';
import RegistrationCard from './RegistrationCard';
import './Authentication.css';

class Authentication extends React.Component {
    constructor(props) {
        super(props)
        this.state = { login: props.match.params.type === 'login' }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.type !== prevProps.match.params.type) {
            this.setState({ login: this.props.match.params.type === 'login' })
        }
    }

    registrationFormSubmit = formValues => {
        console.log(formValues)
    }

    render() {
        return (
            <div style={{ margin: 5 }}>
                <div className="row"  style={{backgroundImage:'url(https://www.icicibank.com//managed-assets/images/personal/safe-banking/bill-pay-march-primer.jpg)', backgroundSize:'cover'}}>
                    <div className="col-md-7 col-sm-6">
                        
                    </div>
                    <div className="col-md-5 col-sm-6">
                        {this.state.login ? <LoginCard formSubmit={this.loginFormSubmit}/> : <RegistrationCard formSubmit={this.registrationFormSubmit} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Authentication;