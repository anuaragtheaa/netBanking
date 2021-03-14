import React from 'react';
import { connect } from 'react-redux';

import { updateProfile } from '../actions';

class ProfileCard extends React.Component {
    update = ( type ) => {
        if(type==='email'){
            const email = document.getElementById('email').value
            if (email==='') alert('email field can not be blank')
            else if(!(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+(?:\.[a-zA-Z0-9-]+)$/).test(email)) alert('email is not valid')
            else {
                this.props.profile.email = email
                this.props.updateProfile(this.props.profile)
            }
        }
        else if(type==='phone') {
            const phone = document.getElementById('phone').value
            if(phone==='') alert('phone field can not be blank')
            else if((phone+'').length<8) alert('min 8 char')
            else {
                this.props.profile.phone = phone
                this.props.updateProfile(this.props.profile)
            }
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-12">
                    <div className="card" style={{ margin: 10, padding: 5 }}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={('/images/user.jpg')} alt="profile pic" height="250" width="200" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <div>{this.props.profile.name}</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-primary">Upload image</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="card" style={{ margin: 10 }}>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{this.props.profile.name}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Account No.  </td>
                                    <td>{this.props.profile.account}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Balance</td>
                                    <td>{this.props.profile.amount}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Email ID </td>
                                    <td>{this.props.profile.email}</td>
                                    <td>
                                        <button className="btn btn-outline-primary" data-toggle='modal' data-target='#emailModal'>Update</button>
                                        <div className="modal fade" id="emailModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Update Email ID: </h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div>
                                                            <label>Current Email ID</label>
                                                            <input type="email" value={this.props.profile.email} disabled />
                                                        </div>
                                                        <div>
                                                            <label>New Email ID</label>
                                                            <input type="email" id='email' />
                                                        </div>
                                                     </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" onClick={()=>this.update('email')} className="btn btn-outline-success">Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>{this.props.profile.phone}</td>
                                    <td>
                                        <button className="btn btn-outline-primary" data-toggle='modal' data-target='#phoneModal'>Update</button>
                                        <div className="modal fade" id="phoneModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Update Phone No.: </h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div>
                                                            <label>Current Phone No. </label>
                                                            <input type="email" value={this.props.profile.phone} disabled />
                                                        </div>
                                                        <div>
                                                            <label>New Phone No. </label>
                                                            <input type="number" id='phone' />
                                                        </div>
                                                     </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" onClick={()=>this.update('phone')} className="btn btn-outline-success">Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        test: 'demo'
    }
}

export default connect(mapStateToProps, {updateProfile})(ProfileCard)