import {Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';

function BankinfoLogin() {
    const history = useHistory();
    function clickBack(){
        history.push("/bankinfomainpage");
    }


    return(
        JSON.parse(localStorage.getItem('user-info')) ?
        <>
            <h4>To 100% complete your profile</h4>
            <h4>Do you authorize LENDER connect your bank account</h4>
            <a href="https://sandbox-connect.zumrails.com/connect/126e52e1-5d7c-45b4-a166-3ee0abe8f7d3" target="_blank" onClick = {clickBack}>YES</a>
            <br></br>
            <Link to="/">NO</Link>
        </>
        :
        <>
        <h6 className="mt-5 col-sm-6 offset-sm-2">Please click to < Link to="/login">login</Link> first! </h6>
        </>
    );
}

export default BankinfoLogin