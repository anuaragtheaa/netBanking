import React from 'react';
import { connect } from 'react-redux';

import { transactionHistory } from '../actions';

class StatementCard extends React.Component {
    index = 0;

    componentDidMount() {
        this.index = 0;
        this.props.transactionHistory()
    }

    render() {
        if (this.props.statements) {
            return (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr. No. </th>
                                <th scope="col">Sender</th>
                                <th scope="col">Recipient</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Time</th>
                                <th scope="col">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.statements.map(statement => {
                                return (
                                    <tr key={this.index}>
                                        <th scope="row">{++this.index}</th>
                                        <td>{statement.sender}</td>
                                        <td>{statement.recipient}</td>
                                        <td>{statement.amount}</td>
                                        <td>{statement.time.substr(11,8)}<br />{statement.time.substr(0,10)}</td>
                                        <td>{statement.remark}</td>
                                    </tr>
                                )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            return (
                <div>
                    Data loading
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        statements: state.user.transactions
    }
}

export default connect(mapStateToProps, { transactionHistory })(StatementCard);