import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchLogin } from '../actions';

class LoginCard extends React.Component {
    onSubmit = formValues => {
        console.log(formValues);
        this.props.fetchLogin(formValues.username, formValues.password)
    }

    renderField = ({ input, type, label, meta, icon }) => {
        return (
            <div className="form-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className={icon}></i></span>
                    <input {...input} type={type} className="form-control" id={input.name} placeholder={label} />
                </div>
                {meta.touched && meta.error && <div className="alert alert-danger" role="alert">{meta.error}</div>}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login </h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span style={{ padding: 5 }}><i className="fa fa-facebook-square fa-lg"></i></span>
                                <span style={{ padding: 5 }}><i className="fa fa-google-plus-square fa-lg"></i></span>
                                <span style={{ padding: 5 }}><i className="fa fa-twitter-square fa-lg"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <Field name="username" component={this.renderField} type="text" label="Enter Username" icon="fa fa-user" />
                                <Field name="password" component={this.renderField} type="password" label="Enter Password" icon="fa fa-key" />
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                {this.props.loginResponse && this.props.loginResponse.status!==200 && <div className="alert alert-danger">{this.props.loginResponse.data.detail}</div>}
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<Link to="/auth/registration">Sign Up</Link>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link to="#">Forgot your password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.username) errors.username = 'Required'

    if (!formValues.password) errors.password = 'Required'
    else if(formValues.password.length<8) errors.password = "Min 8 char"
    return errors;
}

const mapStateToProps = state => {
    return { 
        loginResponse: state.auth.login
     }
}

LoginCard = connect(mapStateToProps, { fetchLogin })(LoginCard)

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginCard)