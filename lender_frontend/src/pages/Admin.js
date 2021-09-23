import {Form, Button, Container, Dropdown,DropdownButton} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory,Link} from 'react-router-dom';
import { GrView } from 'react-icons/gr';
import { VscOpenPreview } from 'react-icons/vsc';
import { FiEdit3 } from 'react-icons/fi';

import styled from 'styled-components';

function Admin() {

    const[dataClient, setDataClient] = useState([]);
    const history = useHistory();
    const[isAuth, setIsAuth] = useState(false);

    useEffect(async()=>{
        let result = await fetch("http://localhost:8000/api/list",{
            method: 'GET',
            // body: JSON.stringify(item),
            headers:{
                "Content-Type" : "application/json",
                "Accept" : 'application/json'
            }
        });
        result = await result.json();
        setDataClient(result);
    },[])

    function editProfile(id, clientId){
        history.push("/profile/"+id+"/"+clientId);

    }
    function editClient(id){
        history.push("/client/"+id);
    }

    function viewDashboard(zumId,clientEmail){
        // console.log(zumId);
        history.push("/dashboardsuccess/"+zumId+"/"+clientEmail);
    }

    function passwordReset(id){
  
        history.push("/password/"+id);
    }

    let user =JSON.parse(localStorage.getItem('user-info')) ;

    function checkDisabled(item){
       return item === "no"? true : false;
    }
    function checkProfileButtonDisabled(item){
       return item === "1"? true : false;
    }

    return(
        JSON.parse(localStorage.getItem('user-info')) ?
            (user&&user.isAdmin === "1")?
            <Wrapper>  
                <Container>
                    <article>
                        <h3>Clients List</h3>
                        <div className = "col-sm-11 offset-sm-1 mt-4">
                            <table>
                                <tr id='tableTitle'>
                                    <td>Email</td>
                                    <td>Password</td>
                                    <td>FormId</td>
                                    <td>IsAdmin</td>
                                    <td>IsMatch</td>
                                </tr>
                                <tr> <br/></tr>
                                {
                                    dataClient.map((item) =>
                                        <tr id='tableContent'>
                                            <td>{item.email}</td>
                                            <td><button id='buttonView' onClick = {()=>passwordReset(item.id)}>reset</button></td>
                                            <td>{item.formId}</td>
                                            <td>{item.isAdmin}</td>
                                            <td>{item.isMatch}</td>
                                            <td style={{width:'100px'}}>
                                            {/* <Dropdown>
                                                <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                                                    Dropdown Button
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick ={()=>editClient(item.id)} evenkey='end'>Update Client</Dropdown.Item>
                                                    <Dropdown.Item onClick ={()=>editProfile(item.formId, item.id)} disabled = {checkProfileButtonDisabled(item.isAdmin)}>Edit Profile</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown> */}
                                            <DropdownButton
                                                key='end'
                                                id='dropdown-button-drop-end'
                                                drop= 'end'
                                                variant="outline-info"
                                                title={<FiEdit3/>}
                                        
                                            >
                                                <Dropdown.Item onClick ={()=>editClient(item.id)} evenkey='end'>Update Client</Dropdown.Item>
                                                <Dropdown.Item onClick ={()=>editProfile(item.formId, item.id)} disabled = {checkProfileButtonDisabled(item.isAdmin)}>Edit Profile</Dropdown.Item>
                                            </DropdownButton>

                                            </td>
                                            <td style={{width:'60px'}}>
                                                <button id='buttonView' disabled = {checkDisabled(item.isMatch)}onClick ={()=>viewDashboard(item.zumId,item.email)}><VscOpenPreview style={{color:'darkturquoise', fontSize:'25px'}}/></button>
                                             
                                            </td>    
                                            {/* <td><Button variant="outline-success" onClick ={()=>editClient(item.id)}>Update</Button></td>
                                            <td><Button variant="outline-danger" onClick ={()=>editProfile(item.formId, item.id)} disabled = {checkProfileButtonDisabled(item.isAdmin)}>Edit profile</Button></td>
                                            <td><Button variant="outline-primary"  disabled = {checkDisabled(item.isMatch)}onClick ={()=>viewDashboard(item.zumId,item.email)}>View Dashboard</Button></td> */}
                                        </tr>
                                    )
                                }
                            </table>
                        </div>
                    </article> 
                </Container>
            </Wrapper>
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

export default Admin

const Wrapper = styled.div`
    color:whitesmoke;

   article{
    border-radius: 25px;
    /* border-color: green solid 1px; */
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-top: 40px;
    padding-bottom: 40px;
    margin-top:20px;
   }
   h3{
       color: darkturquoise;
   }
   #tableTitle{
       background-color: darkturquoise;
        color: white;
        border-radius: 25px;
   }
   #tableContent{
        color:grey;
   }
   #buttonView{
        border:none;
        background-Color:transparent;
        outline:none;
        color:darkturquoise !important;
   }
   #dropdown-button-drop-end{
        width:36px;
        padding:3px !important;
   }
   

`;