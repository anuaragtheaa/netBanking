import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class RegistrationCard extends React.Component {
    onSubmit = formValues => {
        console.log(formValues)
        this.props.formSubmit(formValues)
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
                            <Field name="name" component={this.renderField} type="text" label="Full Name" icon="fa fa-user" />
                            <Field name="email" component={this.renderField} type="email" label="Email ID" icon="fa fa-envelope" />
                            <Field name="phone" component={this.renderField} type="number" label="Phone Number" icon="fa fa-phone" />
                            <Field name="password" component={this.renderField} type="password" label="Password" icon="fa fa-lock" />
                            <Field name="RePassword" component={this.renderField} type="password" label="RePassword" icon="fa fa-lock"/>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary"> Create Account  </button>
                            </div>
                            <p className="text-center">Have an account? <Link to="/auth/login">Log In</Link> </p>
                        </form>
                    </article>
                </div>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if(!formValues.name) errors.name="Required"
    if(!formValues.email) errors.email="Required"
    if(!formValues.phone) errors.phone="Required"
    if(!formValues.password) errors.password="Required"
    if(!formValues.RePassword) errors.RePassword="Required"

    return errors
}

export default reduxForm({
    form: 'registrationForm',
    validate
})(RegistrationCard)