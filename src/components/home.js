import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchusers,fetchPosts } from '../actions/index';
import _ from 'lodash';
import UserDetails from './userdetails';
import PostDetails from './postdetails';

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
        this.props.fetchPosts(event.target.id);
    }

    render() {
        return (
            <div className="container main border">
                <div className="row m-3">
                    <div className="col-md-8">
                        <UserDetails user={this.state.selectedUser} />
                        <PostDetails posts={this.props.posts} />
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
    return bindActionCreators({ fetchusers,fetchPosts }, dispatch);
}

function mapStateToProps({ users,posts }) {
    return { users,posts }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

