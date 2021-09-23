import {Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

function Login() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const[error, setError] = useState("")
    const history = useHistory();
    const {t} = useTranslation();
    // useEffect(() =>{
    //     if(localStorage.getItem('user-info')){
    //         history.push("/add");
    //     }
    // },[])

    async function login (e){
        e.preventDefault();

        let item = {password, email};
        let result = await fetch("http://localhost:8000/api/login",{
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
            history.push("/login");
        }
        else{

            localStorage.setItem("user-info",JSON.stringify(result));
            let user = JSON.parse(localStorage.getItem('user-info'));
            if(user.isAdmin === '1'){
                history.push("/admin");
            } else{
                if(user.isMatch === "no"){
                history.push("/bankinfologin");
                }else{
                history.push("/");
                }
            }
        }
    }


    return(
        <Form className="mt-5 col-sm-6 offset-sm-3" onSubmit = {login}> 
            <Form.Control className="mb-3" type="email" value={email} onChange = {(e) => setEmail(e.target.value)} placeholder="name@example.com" />
            <Form.Control className="mb-3" type="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder={t("password")} />
            <h6>{error && error}</h6>
            <Button variant="primary" type="submit" className="mt-3">
                {t("login")}
            </Button>
        </Form>
    );
}

export default Login