import React from 'react';
import _ from 'lodash';

const PostDetails = (props) => {
    if(props.posts===null){
        <div className="card border-dark m-3 float-left">
        <div className="card-header">User Posts</div>
        <div className="card-body">
            No Posts
        </div>
    </div>
    }

    return (
        <div className="card border-dark m-3 float-left">
            <div className="card-header">User Posts</div>
            <div className="card-body">
                <ul className="list-group">
                   { _.map(props.posts,post =>{
                        return <li className="list-group-item" key={post.id}>{post.title}</li>
                    })
                }
                </ul>
            </div>
        </div>
    );
}

export default PostDetails;