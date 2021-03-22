import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactUs extends React.Component {
    onFormSubmit = formValues => {
        console.log(formValues)
    }

    renderField = ({ input, type, label, meta }) => {
        return (
            <div className="form-group">
                <input {...input} type={type} id={input.name} className="form-control" placeholder={label} />
                <label htmlFor={input.name}>{label}</label>
                {meta.touched && meta.error && <div className="alert alert-danger">{meta.error}</div>}
            </div>
        )
    }

    renderArea = ({input,label, meta}) => {
        return (
            <div className="form-group">
                <textarea {...input} type="text" id={input.name} rows="2" className="form-control md-textarea"></textarea>
                <label htmlFor={input.name}>{label}</label>
                {meta.touched && meta.error && <div className="alert alert-danger">{meta.error}</div>}
            </div>
        )
    }

    render() {
        return (
            <div>
                <section className="mb-4">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <Field name="name" type="text" component={this.renderField} label="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <Field name="email" type="email" component={this.renderField} label="Your Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <Field name="subject" type="text" component={this.renderField} label="Subject" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <Field name="message" component={this.renderArea} label="Your Message" />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary">Send</button>
                            </form>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fa fa-map-marker fa-2x"></i>
                                    <p>San Francisco, CA 94126, USA</p>
                                </li>
                                <li><i className="fa fa-phone mt-4 fa-2x"></i>
                                    <p>+ 01 234 567 89</p>
                                </li>
                                <li><i className="fa fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@mdbootstrap.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!formValues.name) errors.name = 'Required'
    else if(formValues.name.length < 5) errors.name = 'Name too short'

    if(!formValues.email) errors.email = 'Required'
    else if(!re.test(formValues.email)) errors.email = 'Not a valid email'

    if(!formValues.subject) errors.subject = 'Required'

    if(!formValues.message) errors.message = 'Required'

    return errors
}

export default reduxForm({
    form: 'contactForm',
    validate
})(ContactUs)
