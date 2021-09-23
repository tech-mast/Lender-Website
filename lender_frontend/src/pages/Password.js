import {Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';

function Password() {
       const [password, setPassword] = useState("");
       const [newPassword, setNewPassword] = useState("");
       const[data, setData] = useState("");
       const[error, setError] = useState("")
       const history = useHistory();
       let{clientId} = useParams();
       let user = JSON.parse(localStorage.getItem('user-info'));
       const[clientIndex, setClientIndex] = useState(clientId? clientId:(user&&user.id));
    useEffect(async()=>{

        let result = await fetch("http://localhost:8000/api/password/"+ clientIndex,{
            method: 'GET',
            // body: JSON.stringify(item),
            headers:{
                "Content-Type" : "application/json",
                "Accept" : 'application/json'
            }
        });
        
        result = await result.json();
        setData(result);
    },[])

    async function passwordReset (e){
        e.preventDefault();

        let item ={password, newPassword};

        let result = await fetch("http://localhost:8000/api/password/"+ clientIndex,{
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type" : "application/json",
                "Accept" : 'application/json'
            }
        });
        
        result = await result.json();
        
        if(result.error){
            console.log(result.error);
            setError(result.error);
            history.push("/password/"+clientId&&clientId);
        }
        else{
            if(typeof clientId !== 'undefined'){
                history.push("/admin")
            }else{
                history.push("/profile")
                
            }
        }
    }

    return(
        JSON.parse(localStorage.getItem('user-info')) ?
            clientId ?
                user.isAdmin === "1" ?
                <>
                <Form className="mt-5 col-sm-6 offset-sm-3" onSubmit = {passwordReset}> 
                    <Form.Control className="mb-3" type="email" value={data.email} readOnly/>
                    <Form.Control className="mb-3" type="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder="Original Password" />
                    <h6>{error && error}</h6>
                    <Form.Control className="mb-3" type="password" value={newPassword} onChange = {(e) => setNewPassword(e.target.value)} placeholder="NEW Password" />
                    <Button variant="primary" type="submit" className="mt-3">
                        Reset Password
                    </Button>
                </Form>
                </>
                :
                <>
                <h6 className="mt-5 col-sm-6 offset-sm-2">Only Admin has the rights to access! <br/> Click here to < Link to="/profile">go back</Link></h6>
                </>
            :
            <>
            <Form className="mt-5 col-sm-6 offset-sm-3" onSubmit = {passwordReset}> 
                <Form.Control className="mb-3" type="email" value={data.email} readOnly/>
                <Form.Control className="mb-3" type="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder="Original Password" />
                <h6>{error && error}</h6>
                <Form.Control className="mb-3" type="password" value={newPassword} onChange = {(e) => setNewPassword(e.target.value)} placeholder="NEW Password" />
                <Button variant="primary" type="submit" className="mt-3">
                    Reset Password
                </Button>
            </Form>
            </>
        :
        <>
        <h6 className="mt-5 col-sm-6 offset-sm-2">Please click to < Link to="/login">login</Link> first! </h6>
        </>
    );
}

export default Password