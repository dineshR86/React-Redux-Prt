import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchusers } from '../actions/index';
import _ from 'lodash';
import UserDetails from './userdetails';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state={
            selectedUser:null
        }

        this.renderUsers = this.renderUsers.bind(this);
        this.userClicked=this.userClicked.bind(this);
    }

    componentDidMount() {
        console.log("calling from component did mount");
        this.props.fetchusers();
    }

    renderUsers() {
        
        return _.map(this.props.users, user => {
            return (
                <li className="list-group-item" key={user.id} onClick={this.userClicked} id={user.id}>
                    {user.name}
                </li>
            );
        });
    }

    userClicked(event){
        console.log("selected user",event.target.id);
        this.setState({selectedUser:this.props.users[event.target.id]});
    }

    render() {
        return (
            <div className="container main border">
                <div className="row m-3">
                    <div className="col-md-8">
                        <UserDetails user={this.state.selectedUser} />
                        <div className="card border-dark m-3 float-left">
                            <div className="card-header">User Name 1</div>
                            <div className="card-body">
                                <p className="card-text">Quick example for the card test 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search User" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <ul className="list-group">
                            {this.renderUsers()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchusers }, dispatch);
}

function mapStateToProps({ users }) {
    return { users }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

