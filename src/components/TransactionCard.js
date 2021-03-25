import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import $ from 'jquery';

import { fetchPayee, transferFund } from '../actions';

class TransactionCard extends React.Component {
    state = { transferClicked: false }

    componentDidMount() {
        this.props.fetchPayee()
        localStorage.setItem('amount', JSON.stringify(this.props.profile.amount))
    }

    componentDidUpdate() {
        if (this.props.transaction && this.state.transferClicked) {
            $('#successModal').modal('show'); 
        }
    }

    renderModal = () => {
        return (
            <div >
            <div className="modal fade" id="successModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{backgroundImage: 'url(./images/green.jpg)'}}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Payment Successful</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Amount successfully transfered to the Receipent. 
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

    onSubmit = formValues => {
        const requestValue = {
            sender: parseInt(this.props.profile.account),
            amount: parseInt(formValues.amount),
            recipient: parseInt(formValues.recipient.split('-')[1]),
            remark: formValues.remark
        }
        this.setState({ transferClicked: true })
        this.props.transferFund(requestValue)
    }

    renderField = ({ input, type, label, meta }) => {
        return (
            <div className="form-group">
                <div className="input-group-prepend">
                    <label htmlFor={input.name}>{label}</label>
                    <input {...input} type={type} className="form-control" id={input.name} placeholder={label} />
                </div>
                {meta.touched && meta.error && <div className="alert alert-danger" role="alert">{meta.error}</div>}
            </div>
        )
    }

    renderDropdown = ({ input, label, meta }) => {
        return (
            <div className="form-group">
                <label htmlFor={input.name}>{label}</label>
                <select {...input} className="form-control" id={input.name}>
                    <option>Select</option>
                    {this.props.payeeList.map(payee => { return (<option key={payee.name} >{payee.name} - {payee.account}</option>) })}
                </select>
                {meta.touched && meta.error && <div className="alert alert-danger" role="alert">{meta.error}</div>}
            </div>
        )
    }

    render() {
        if (this.props.payeeList) {
            return (
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Transfer Fund</div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div>Name {this.props.profile.name}</div>
                                <div>Account No. {this.props.profile.account}</div>
                                <div>Balance: {this.props.profile.amount}</div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div>Select Recipient</div>
                                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                    <Field name="recipient" component={this.renderDropdown} label="Recipient: " />
                                    <Field name="amount" component={this.renderField} type="number" label="Amount" />
                                    <Field name="remark" component={this.renderField} type="text" label="Remark" />
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-outline-success">Transfer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {this.renderModal()}
                </div>
            )
        }
        else {
            return (
                <div>Payee list is loading</div>
            )
        }
    }
}

const validate = formValues => {
    const errors = {}

    if (formValues.recipient === 'Select') errors.recipient = 'Select one'

    if (!formValues.amount) errors.amount = 'Required'
    else if (formValues.amount > JSON.parse(localStorage.getItem('amount'))) errors.amount = 'Get rich first'
    else if (formValues.amount < 1) errors.amount = 'Get Smarter'

    return errors
}

const mapStateToProps = (state) => {
    return {
        payeeList: state.user.payee,
        transaction: state.user.transaction
    }
}

TransactionCard = connect(mapStateToProps, { fetchPayee, transferFund })(TransactionCard)

export default reduxForm({
    form: 'transactionForm',
    validate
})(TransactionCard)
