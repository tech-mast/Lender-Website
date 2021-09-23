import {Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory, useParams,Link} from 'react-router-dom';

function Client() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [formId, setFormId] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const[data, setData] = useState("");
    const history = useHistory();
    const[isReadonly, setIsReadonly] = useState(true);
    let user = JSON.parse(localStorage.getItem('user-info'));
    let{id} = useParams();
    // const[clientIndex, setClientIndex] = useState(id? id:(user.id));

    useEffect(async()=>{

        let result = await fetch("http://localhost:8000/api/client/"+ id,{
            method: 'GET',
            // body: JSON.stringify(item),
            headers:{
                "Content-Type" : "application/json",
                "Accept" : 'application/json'
            }
        });
        
        result = await result.json();
        setData(result);
        // console.log(data);
    },[])
    


    async function updateClient (e){
        e.preventDefault();
        let item ={};
        if(email === ""){
            item.email = data.email;
        }else{
            item.email = email;
        }
        if(formId === ""){
            item.formId = data.formId;
        }else{
            item.formId = formId;
        }
        if(isAdmin === ""){
            item.isAdmin = data.isAdmin;
        }else{
            item.isAdmin = isAdmin;
        }

        // console.warn(item);
        let result = await fetch("http://localhost:8000/api/client/"+ id,{
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
            history.push("/client/"+id);
        }
        else{
        // localStorage.setItem("user-info",JSON.stringify(result));
        setIsReadonly(true);

            history.push("/admin")

        }
    }

    return(
        JSON.parse(localStorage.getItem('user-info')) ?
            (user&&user.isAdmin === "1")?
            <Form className="mt-5 col-sm-6 offset-sm-3" onSubmit = {updateClient}> 
                <Form.Control className="mb-3" type="email" defaultValue={data && data.email}  onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmail(e.target.value)} />
                <Form.Control className="mb-3" type="password" defaultValue="*******" readOnly onChange = {(e) => setPassword(e.target.value)} />
                <Form.Control className="mb-3" type="text" defaultValue={data && data.formId}  onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setFormId(e.target.value)} readOnly/>
                <Form.Control className="mb-3" type="text" defaultValue={data && data.isAdmin}  onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setIsAdmin(e.target.value)} />
                <Button variant="primary" type="submit" className="mt-3">
                    Update
                </Button>
            </Form>
            :
            <>
                <h6 className="mt-5 col-sm-6 offset-sm-2">Only Admin has the rights to access! <br/> Click here to < Link to="/">go back</Link></h6>
            </>
        :
        <>
        <h6 className="mt-5 col-sm-6 offset-sm-2">Please click to < Link to="/login">login</Link> first! </h6>
        </>
    );
}

export default Client