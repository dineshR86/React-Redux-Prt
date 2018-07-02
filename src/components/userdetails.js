import React from 'react';

const UserDetails=(props)=>{
    if(props.user === null){
        return (
            <div className="card border-dark m-3 float-left">
                <div className="card-header">User Details</div>
                <div className="card-body">
                <p className="card-text">No user selected</p>
                </div>
            </div>
        );
    }
    return(
        <div className="card border-dark m-3 float-left">
            <div className="card-header">User Details</div>
            <div className="card-body">
                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9">{props.user.name}</dd>
                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{props.user.email}</dd>
                    <dt className="col-sm-3">Phone</dt>
                    <dd className="col-sm-9">{props.user.phone}</dd>
                    <dt className="col-sm-3">City</dt>
                    <dd className="col-sm-9">{props.user.address.city}</dd>
                </dl>
            </div>
        </div>
    );
}

export default UserDetails;