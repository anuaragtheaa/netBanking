import React from 'react';
import { connect } from 'react-redux';

import { fetchProfile } from '../actions';
import ProfileCard from './ProfileCard';
import TransactionCard from './TransactionCard';

class Dashboard extends React.Component {
    state = { section: 'default' }

    componentDidMount() {
        this.props.fetchProfile()
    }

    selectedSection() {
        if (this.state.section === 'fundTransfer') return <TransactionCard profile={this.props.profile} />
        else if (this.state.section === 'profile') return <ProfileCard profile={this.props.profile} />
        else if (this.state.section === 'statement') return <div>statement</div>
        else if (this.state.section === 'updatePic') return <div>Change profile pic</div>
        else if (this.state.section === 'updatePhone') return <div>Change phone number</div>
        else if (this.state.section === 'updateEmail') return <div>Change email id</div>
        else if (this.state.section === 'default') return this.advertismentCarousel()
        else return this.advertismentCarousel()
    }

    userInfo() {
        return (
            <div>
                <img
                    style={{ float: 'right' }} height={50} width={50} src={('./images/user.jpg')} alt="profile pic"></img>
                <h4 className="card-title">{this.props.profile.name}</h4>
                <h6 className="card-subtitle">{this.props.profile.account}</h6>
            </div>
        );
    }

    advertismentCarousel() {
        return (
            <div style={{ margin: 5 }}>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={('./images/advert1.jpg')} className="d-block w-100" alt="advertisment1" />
                        </div>
                        <div className="carousel-item">
                            <img src={('./images/advert2.jpg')} className="d-block w-100" alt="advertisment2" />
                        </div>
                        <div className="carousel-item">
                            <img src={('./images/advert3.jpg')} className="d-block w-100" alt="advertisment3" />
                        </div>
                        <div className="carousel-item">
                            <img src={('./images/advert4.jpg')} className="d-block w-100" alt="advertisment4" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"></span>
                    </a>
                </div>
            </div>
        )
    }

    userCard() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.userInfo()}
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="btn-group">
                                <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="false" aria-expanded="true">
                                    Quick Links
                                </span>
                                <div className="dropdown-menu">
                                    <span className="dropdown-item" onClick={e => this.setState({ section: 'fundTransfer' })}>Fund Transfer</span>
                                    <span className="dropdown-item" onClick={e => this.setState({ section: 'profile' })}>Profile</span>
                                    <span className="dropdown-item" onClick={e => this.setState({ section: 'statement' })}>Bank Statement</span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item" href="#">Separated link</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Personal Details
                            </div>
                            <div className="dropdown-menu">
                                <span className="dropdown-item" onClick={e => this.setState({ section: 'profile' })}>Profile</span>
                                <span className="dropdown-item" onClick={e => this.setState({ section: 'updatePic' })}>Update profile pic</span>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account Summary
                            </div>
                            <div className="dropdown-menu">
                                <span className="dropdown-item">Last 10 transection</span>
                                <span className="dropdown-item">Download transection history</span>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Payments and Transfer
                            </div>
                            <div className="dropdown-menu">
                                <span className="dropdown-item">Quick Pay</span>
                                <span className="dropdown-item">Fund Transfer</span>
                                <span className="dropdown-item">Manage Payee</span>
                                <span className="dropdown-item">Add Payee</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.profile) {
            return (
                <div>
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            {this.userCard()}
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-6 col-12">
                            {this.selectedSection()}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Data loading</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.user.profile
    }
}

export default connect(mapStateToProps, { fetchProfile })(Dashboard)