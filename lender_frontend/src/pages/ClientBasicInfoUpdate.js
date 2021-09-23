import {Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory, useParams,Link} from 'react-router-dom';

function ClientBasicInfoUpdate() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [formId, setFormId] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const[data, setData] = useState("");
    const history = useHistory();
    const[isReadonly, setIsReadonly] = useState(true);
    let user = JSON.parse(localStorage.getItem('user-info'));
    // let{id} = useParams();
    // const[clientIndex, setClientIndex] = useState(id? id:(user.id));

    useEffect(async()=>{

        let result = await fetch("http://localhost:8000/api/client/"+ user.id,{
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
        // if(formId === ""){
        //     item.formId = data.formId;
        // }else{
        //     item.formId = formId;
        // }
        // if(isAdmin === ""){
        //     item.isAdmin = data.isAdmin;
        // }else{
        //     item.isAdmin = isAdmin;
        // }

        // console.warn(item);
        let result = await fetch("http://localhost:8000/api/clientbasicinfo/"+ user.id,{
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
            history.push("/clientbasicinfoupdate");
        }
        else{
  
        localStorage.setItem("user-info",JSON.stringify(result));
        // localStorage.setItem("user-info",JSON.stringify(result));
        setIsReadonly(true);
        alert("your profile has been updated successful")
        history.push("/bankinfomainpage")
        }
    }

    return(
        JSON.parse(localStorage.getItem('user-info')) ?
            <>
                <h4 className = "mt-5">Please Update the following basic info:</h4>
                <Form className="mt-5 col-sm-6 offset-sm-3" onSubmit = {updateClient}> 
                    <Form.Control className="mb-3" type="email" defaultValue={data && data.email}  onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmail(e.target.value)} />
                    <Button variant="primary" type="submit" className="mt-3">
                        Update
                    </Button>
                </Form>
            </>
        :
        <>
        <h6 className="mt-5 col-sm-6 offset-sm-2">Please click to < Link to="/login">login</Link> first! </h6>
        </>
    );
}

export default ClientBasicInfoUpdate