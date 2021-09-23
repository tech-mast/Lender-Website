import {Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory,Link} from 'react-router-dom';
import styled from 'styled-components';
import Mainpage from './Mainpage';

function BaninfoMainpage() {
    const[error, setError] = useState("")
    const history = useHistory();

    useEffect(async()=>{
        
        let user = JSON.parse(localStorage.getItem('user-info'));
        if(user && user.isMatch === "no"){
            // get refresh token
            let itemAuth = {Username: 'jstlouis+1@phinanse.com',Password:'Phinanse2021'}
            let tokenResult = await fetch("https://api-sandbox.zumrails.com/api/authorize",{
                method: 'POST',
                body: JSON.stringify(itemAuth),
                headers:{
                    "Content-Type" : "application/json",
                    "Accept" : 'application/json'
                }
            });
            tokenResult = await tokenResult.json();
            let tokenRefresh = tokenResult.result.Token;
            
            // check if match with zumrail and update locoal database
            let email = user.email;
            let item ={email};
            // let item ={email:'larry@larry.com'};
            let zumrailsResult = await fetch("https://api-sandbox.zumrails.com/api/user/filter",{
                method: 'POST',
                body: JSON.stringify(item),
                headers:{
                    "Content-Type" : "application/json",
                    "Accept" : 'application/json',
                    "Authorization" :  "Bearer "+tokenRefresh
                }
            });
            zumrailsResult = await zumrailsResult.json();
            if(zumrailsResult.result.Items.length !== 0){
                console.log(zumrailsResult.result.Items.length);
                const zumId = zumrailsResult.result.Items[0].Id && zumrailsResult.result.Items[0].Id;
                let email = user.email;
                let item = {email,zumId}
                let result = await fetch("http://localhost:8000/api/checkmatch",{
                    method: 'POST',
                    body: JSON.stringify(item),
                    headers:{
                        "Content-Type" : "application/json",
                        "Accept" : 'application/json'
                    }
                });
                if(result.error){
                    console.log(result.error);
                    setError(result.error);
                    history.push("/bankinfomainpage");
                }
                else{
                result = await result.json();
                localStorage.setItem("user-info",JSON.stringify(result));
                }
            }else{
                setError("Erro: not match! \n you bank infor doesn't match your profile infor!" + "\n"+"please update your basic profile info first!");
            }
        }
    },[])


    return(

        <Wrapper>
            <h6 className= "mt-5">{error && error}{error &&< Link id='link' to="/clientbasicinfoupdate">UPDATE</Link>}</h6>
            <Mainpage/>
        </Wrapper>
    );
}

export default BaninfoMainpage

const Wrapper = styled.div`
    h6{
        color: darkturquoise;
    }
    #link{
        color: midnightblue;
    }
`