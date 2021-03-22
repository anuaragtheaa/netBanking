import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogout, fetchLoginStatus } from '../actions';

class Header extends React.Component {
    logout = (e) => {
        e.preventDefault()
        this.props.fetchLogout()
        this.props.fetchLoginStatus()
    }

    render() {
        if (!this.props.loginStatus) {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">Net Banking</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                            Account Type
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="#">Personal Account</Link></li>
                                            <li><Link className="dropdown-item" to="#">NRI Account</Link></li>
                                            <li><Link className="dropdown-item" to="#">Business Account</Link></li>
                                            <li><Link className="dropdown-item" to="#">Corporate Account</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/about">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/map/atm">Find ATM</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/map/bank">Find Bank</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <Link className="btn btn-outline-primary" to="/auth/registration" style={{margin:5}}>New Account</Link>
                                    <Link className="btn btn-outline-success" to='/auth/login' style={{margin:5}}>Log in</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
        else {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/dashboard">Net Banking</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/about">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/map/atm">Find ATM</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/map/bank">Find Bank</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/contact">Customer Care</Link>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <button className="btn btn-outline-danger" onClick={e => this.logout(e)}>Logout</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { loginStatus: state.auth.loginStatus }
}

export default connect(mapStateToProps, { fetchLogout, fetchLoginStatus })(Header);