import {Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';
import DashboardSuccess from './DashboardSuccess';

function Dashboard() {
    // useEffect(async()=>{
    // let result = await fetch("https://api-sandbox.zumrails.com/api/user/getbankaccountinformation/2d23aeee-c7f4-47a8-a493-3e5b03274f31",{
    //     method: 'GET',
    //     // body: JSON.stringify(item),
    //     headers:{
    //         "Content-Type" : "application/json",
    //         "Accept" : 'application/json',
    //         "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjA2YTdkYzhjLTI0MzktNDhhNC1hM2JkLTNhYmI1OTUyNmRlZiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiIxMjZlNTJlMS01ZDdjLTQ1YjQtYTE2Ni0zZWUwYWJlOGY3ZDMiLCJyb2xlIjoiQ3VzdG9tZXJBZG1pbiIsIm5hbWVpZCI6IjkyOTktNDkyMCIsImFjdG9ydCI6IkN1c3RvbWVyIiwibmJmIjoxNjMwNTEzMTE2LCJleHAiOjE2MzA1MTY3MTYsImlhdCI6MTYzMDUxMzExNn0.4lT1xoK-RmEbwV44DUk5n3N6FRXu-W2lxEHaq_WmvYg"

    //     }
    // });
    
    // result = await result.json();
    // let dateStr = result.result.Accounts[0].Transactions;

    // const monthlyIncome = dateStr.reduce((total, item) => {
    //     const {Date, Credit} = item;
    //     if(!Date) return total;
    //     let dateStrShort = Date.substring(0,7);
    //     // console.log("date" + dateStrShort);

    //     if( !total[dateStrShort]) {
    //       total[dateStrShort] = { label: dateStrShort, value: Credit};
    //     } else {
    //       total[dateStrShort] = {
    //       ...total[dateStrShort],
    //       value: total[dateStrShort].value +item.Credit,
    //       };
    //     }
    //     return total;
    // },{});
    // console.log(monthlyIncome);


    // let value=0;
    // dateStr.forEach(
    //     function(item){
    //         value += item.Debit;
    //         console.log("this is amount:"+ value);
    //     }
    // )

    // },[])
    const history = useHistory();
    function clickBack(){
        history.push("/bankinfomainpage");
    }

    let user = JSON.parse(localStorage.getItem('user-info'));
    // console.log(user.isMatch);
    return(
        user ?
            user.isMatch === "no"?
            <> 
            <h4>To view your personal dashboard</h4>
            <h4>Do you authorize LENDER connect your bank account</h4>
            <a href="https://sandbox-connect.zumrails.com/connect/126e52e1-5d7c-45b4-a166-3ee0abe8f7d3" target="_blank" onClick = {clickBack}>YES</a>
            <br></br>
            <Link to="/">NO</Link>
            </>
            :
            <>
                <DashboardSuccess />
            </>
        :
        <>
        <h6 className="mt-5 col-sm-6 offset-sm-2">Please click to < Link to="/login">login</Link> first! </h6>
        </>
    );
}

export default Dashboard