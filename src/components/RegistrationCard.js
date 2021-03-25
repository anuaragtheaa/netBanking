import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import { fetchRegistration } from '../actions';

class RegistrationCard extends React.Component {
    state = { registerClicked: false }

    onSubmit = formValues => {
        this.setState({registerClicked: true})
        this.props.fetchRegistration(formValues)
    }

    componentDidUpdate() {
        if(this.props.registration && this.props.registration.status === 201 && this.state.registerClicked) {
            $('#registerModal').modal('show')
        }
    }

    renderModal = () => {
        return (
            <div style={{backgroundColor: '#7ae88a'}}>
            <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registration Successful</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Your account created successfully. go ahead and login with your ID and Password.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

    renderField = ({input, type, label, meta, icon}) => {
        return (
            <div className="form-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className={icon}></i></span>
                    <input {...input} type={type} className="form-control" id={input.name} placeholder={label} />
                </div>
                {meta.touched && meta.error && <div className="alert alert-danger">{meta.error}</div>}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ max_width: '400px' }}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
                        <p>
                            <Link to="" className="btn btn-block btn-twitter"> <i className="fa fa-twitter"></i>   Login via Twitter</Link>
                            <Link to="" className="btn btn-block btn-facebook"> <i className="fa fa-facebook-f"></i>   Login via facebook</Link>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field name="username" component={this.renderField} type="text" label="Enter username" icon="fa fa-user" />
                            {this.props.registration && this.props.registration.status !== 201 && this.props.registration.data.username && <div className="alert alert-danger">{this.props.registration.data.username}</div>}

                            <Field name="first_name" component={this.renderField} type="text" label="Firstname" icon="fa fa-user" />
                            {this.props.registration && this.props.registration.status !== 201 && this.props.registration.data.first_name && <div className="alert alert-danger">{this.props.registration.data.first_name}</div>}

                            <Field name="last_name" component={this.renderField} type="text" label="Lastname" icon="fa fa-user" />
                            {this.props.registration && this.props.registration.status !== 201 && this.props.registration.data.last_name && <div className="alert alert-danger">{this.props.registration.data.last_name}</div>}

                            <Field name="email" component={this.renderField} type="email" label="Email ID" icon="fa fa-envelope" />
                            {this.props.registration && this.props.registration.status !== 201 && this.props.registration.data.email && <div className="alert alert-danger">{this.props.registration.data.email}</div>}

                            <Field name="password" component={this.renderField} type="password" label="Password" icon="fa fa-lock" />
                            {this.props.registration && this.props.registration.status !== 201 && this.props.registration.data.password && <div className="alert alert-danger">{this.props.registration.data.password}</div>}
                            
                            <Field name="password2" component={this.renderField} type="password" label="RePassword" icon="fa fa-lock"/>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary"> Create Account  </button>
                            </div>
                            <p className="text-center">Have an account? <Link to="/auth/login">Log In</Link> </p>
                        </form>
                    </article>
                </div>
                {this.renderModal()}
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}

    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!formValues.username) errors.username="Required"
    else if(formValues.username.length < 4) errors.username="Username too short"

    if(!formValues.first_name) errors.first_name="Required"
    else if(formValues.first_name.length < 4) errors.first_name="First name too short"

    if(!formValues.last_name) errors.last_name="Required"

    if(!formValues.email) errors.email="Required"
    else if(!re.test(formValues.email)) errors.email="Not a valid email ID"

    if(!formValues.password) errors.password="Required"
    else if(formValues.password.length < 8) errors.password="password too short"

    if(!formValues.password2) errors.password2="Required"
    else if(formValues.password !== formValues.password2) errors.password2="Must match with password"

    return errors
}

const mapStateToProps = state => {
    return {
        registration: state.auth.registration
    }
}

RegistrationCard = connect(mapStateToProps, { fetchRegistration })(RegistrationCard)

export default reduxForm({
    form: 'registrationForm',
    validate
})(RegistrationCard)