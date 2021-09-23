import {Form, Button,Container, Row,Col} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

function Profile() {
    //set initial data
    const[data, setData] = useState("");
    //set form variables
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [sin, setSin] = useState("");
    const [phone, setPhone] = useState("");
    const [desiredPayment, setDesiredPayment] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [bankrupt, setBankrupt] = useState("");
    const [proposalConsumer, setProposalConsumer] = useState("");
    const [house, setHouse] = useState("");
    const [mortgageRent, setMortgageRent] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postcode, setPostcode] = useState("");
    const [streetAddress2, setStreetAddress2] = useState("");
    const [city2, setCity2] = useState("");
    const [province2, setProvince2] = useState("");
    const [postcode2, setPostcode2] = useState("");
    const [country2, setCountry2] = useState("");
    const [sinceWhen, setSinceWhen] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [vin, setVin] = useState("");
    const [kilometrage, setKilometrage] = useState("");
    const [carCondition, setCarCondition] = useState("");
    const [carFaxLink, setCarFaxLink] = useState("");
    const [dealerName, setDealerName] = useState("");
    const [amountCar, setAmountCar] = useState("");
    const [amountDeposit, setAmountDeposit] = useState("");
    const [amountFinanced, setAmountFinanced] = useState("");
    const [employer, setEmployer] = useState("");
    const [employerAddress, setEmployerAddress] = useState("");
    const [nameSuperior, setNameSuperior] = useState("");
    const [employerPhone, setEmployerPhone] = useState("");
    const [positionHeld, setPositionHeld] = useState("");
    const [employerSinceWhen, setEmployerSinceWhen] = useState("");
    const [schedules, setSchedules] = useState("");
    const [salary, setSalary] = useState("");
    const [annualRevenue, setAnnualRevenue] = useState("");
    const [employer2, setEmployer2] = useState("");
    const [employerAddress2, setEmployerAddress2] = useState("");
    const [nameSuperior2, setNameSuperior2] = useState("");
    const [employerPhone2, setEmployerPhone2] = useState("");
    const [positionHeld2, setPositionHeld2] = useState("");
    const [employerSinceWhen2, setEmployerSinceWhen2] = useState("");
    const [schedules2, setSchedules2] = useState("");
    const [salary2, setSalary2] = useState("");
    const [annualRevenue2, setAnnualRevenue2] = useState("");
    const [income1Name, setIncome1Name] = useState("");
    const [income2Name, setIncome2Name] = useState("");
    const [income3Name, setIncome3Name] = useState("");
    const [income3Amount, setIncome3Amount] = useState("");
    const [income2Amount, setIncome2Amount] = useState("");
    const [income1Amount, setIncome1Amount] = useState("");
    const [feedbacks, setFeedbacks] = useState("");
    const [fileVehicle, setFileVehicle] = useState("");
    const [fileCredit, setFileCredit] = useState("");
    const [fileId, setFileId] = useState("");
    const [filePay, setFilePay] = useState("");
    const [fileBank, setFileBank] = useState("");
    const [fileCheque, setFileCheque] = useState("");

    const [imagePreviewFunction, setImagePreviewFunction] = useState("");
    const [creditPreviewFunction, setCreditPreviewFunction] = useState("");
    const [idPreviewFunction, setIdPreviewFunction] = useState("");
    const [payPreviewFunction, setPayPreviewFunction] = useState("");
    const [bankPreviewFunction, setBankPreviewFunction] = useState("");
    const [chequePreviewFunction, setChequePreviewFunction] = useState("");
    // const [displayPasswordResetBtn, setDisplayPasswordResetBtn] = useState("");
    //other variables
    const history = useHistory();
    const[isReadonly, setIsReadonly] = useState(true);
    const {t} = useTranslation();
    let user = JSON.parse(localStorage.getItem('user-info'));
    let{id, clientId} = useParams();
    const[profileIndex, setProfileIndex] = useState(id? id:(user&&user.formId));

    useEffect(async()=>{

        let result = await fetch("http://localhost:8000/api/profile/"+ profileIndex,{
            method: 'GET',
            // body: JSON.stringify(item),
            // headers:{
            //     "Content-Type" : "application/json",
            //     "Accept" : 'application/json'
            // }
        });
        
        result = await result.json();
        if (user.isAdmin === "1" && clientId == user.id){
            setData(null);
        }else{

            setData(result);
        }

        if(result.fileVehicle_path){
            if(result.fileVehicle_path.split(".")[1] ==="pdf" || result.fileVehicle_path.split(".")[1] ==="doc" || result.fileVehicle_path.split(".")[1] ==="docx"){
                setImagePreviewFunction(<a href ={"http://localhost:8000/"+result.fileVehicle_path} target='_blank'> VehicleWindowFilm.{result.fileVehicle_path.split(".")[1]}</a>)
            }
            else{
                setImagePreviewFunction(<img style={{width:150, height:150}} src={"http://localhost:8000/"+result.fileVehicle_path}/>)
            }
        }
        if(result.fileCredit_path){
            if(result.fileCredit_path.split(".")[1] ==="pdf" || result.fileCredit_path.split(".")[1] ==="doc" || result.fileCredit_path.split(".")[1] ==="docx"){
                setCreditPreviewFunction(<a href ={"http://localhost:8000/"+result.fileCredit_path} target='_blank'>creditReport.{result.fileCredit_path.split(".")[1]}</a>)
            }
            else{
                setCreditPreviewFunction(<img style={{width:150, height:150}} src={"http://localhost:8000/"+result.fileCredit_path}/>)
            }
        }
        if(result.fileId_path){
            if(result.fileId_path.split(".")[1] ==="pdf" || result.fileId_path.split(".")[1] ==="doc" || result.fileId_path.split(".")[1] ==="docx"){
                setIdPreviewFunction(<a href ={"http://localhost:8000/"+result.fileId_path} target='_blank'>identification.{result.fileId_path.split(".")[1]}</a>)
            }
            else{
                setIdPreviewFunction(<img style={{width:150, height:150}} src={"http://localhost:8000/"+result.fileId_path}/>)
            }
        }
        if(result.filePay_path){
            if(result.filePay_path.split(".")[1] ==="pdf" || result.filePay_path.split(".")[1] ==="doc" || result.filePay_path.split(".")[1] ==="docx"){
                setPayPreviewFunction(<a href ={"http://localhost:8000/"+result.filePay_path} target='_blank'>payStubs.{result.filePay_path.split(".")[1]}</a>)
            }
            else{
                setPayPreviewFunction(<img style={{width:150, height:150}} src={"http://localhost:8000/"+result.filePay_path}/>)
            }
        }
        if(result.fileBank_path){
            if(result.fileBank_path.split(".")[1] ==="pdf" || result.fileBank_path.split(".")[1] ==="doc" || result.fileBank_path.split(".")[1] ==="docx"){
                setBankPreviewFunction(<a href ={"http://localhost:8000/"+result.fileBank_path} target='_blank'>bankStatements.{result.fileBank_path.split(".")[1]}</a>)
            }
            else{
                setBankPreviewFunction(<img style={{width:150, height:150}} src={"http://localhost:8000/"+result.fileBank_path}/>)
            }
        }
        if(result.fileCheque_path){
            if(result.fileCheque_path.split(".")[1] ==="pdf" || result.fileCheque_path.split(".")[1] ==="doc" || result.fileCheque_path.split(".")[1] ==="docx"){
                setChequePreviewFunction(<a href ={"http://localhost:8000/"+result.fileCheque_path} target='_blank'>specimenCheque.{result.fileCheque_path.split(".")[1]}</a>)
            }
            else{
                setChequePreviewFunction(<img style={{width:150, height:150}} src={"http://localhost:8000/"+result.fileCheque_path}/>)
            }
        }
    },[])


    async function update (e){
        e.preventDefault();
        const formData = new FormData();
        if(firstName === ""){
            formData.append('firstName',data.firstName);
        }else{
            formData.append('firstName',firstName);
        }
        if(email === ""){
            formData.append('email',data.email);
        }else{
            formData.append('email',email);
        }
        if(lastName === ""){
            formData.append('lastName',data.lastName);
        }else{
            formData.append('lastName',lastName);
        }
        if(dateOfBirth === ""){
            formData.append('dateOfBirth',data.dateOfBirth);
        }else{
            formData.append('dateOfBirth',dateOfBirth);
        }
        if(sin === ""){
            formData.append('sin',data.sin);
        }else{
            formData.append('sin',sin);
        }
        if(phone === ""){
            formData.append('phone',data.phone);
        }else{
            formData.append('phone',phone);
        }
        if(desiredPayment === ""){
            formData.append('desiredPayment',data.desiredPayment);
        }else{
            formData.append('desiredPayment',desiredPayment);
        }
        if(maritalStatus === ""){
            formData.append('maritalStatus',data.maritalStatus);
        }else{
            formData.append('maritalStatus',maritalStatus);
        }
        if(bankrupt === ""){
            formData.append('bankrupt',data.bankrupt);
        }else{
            formData.append('bankrupt',bankrupt);
        }
        if(proposalConsumer === ""){
            formData.append('proposalConsumer',data.proposalConsumer);
        }else{
            formData.append('proposalConsumer',proposalConsumer);
        }
        if(house === ""){
            formData.append('house',data.house);
        }else{
            formData.append('house',house);
        }
        if(mortgageRent === ""){
            formData.append('mortgageRent',data.mortgageRent);
        }else{
            formData.append('mortgageRent',mortgageRent);
        }
        if(streetAddress === ""){
            formData.append('streetAddress',data.streetAddress);
        }else{
            formData.append('streetAddress',streetAddress);
        }
        if(city === ""){
            formData.append('city',data.city);
        }else{
            formData.append('city',city);
        }
        if(province === ""){
            formData.append('province',data.province);
        }else{
            formData.append('province',province);
        }
        if(postcode === ""){
            formData.append('postcode',data.postcode);
        }else{
            formData.append('postcode',postcode);
        }
        if(streetAddress2 === ""){
            formData.append('streetAddress2',data.streetAddress2);
        }else{
            formData.append('streetAddress2',streetAddress2);
        }
        if(city2 === ""){
            formData.append('city2',data.city2);
        }else{
            formData.append('city2',city2);
        }
        if(province2 === ""){
            formData.append('province2',data.province2);
        }else{
            formData.append('province2',province2);
        }
        if(postcode2 === ""){
            formData.append('postcode2',data.postcode2);
        }else{
            formData.append('postcode2',postcode2);
        }
        if(country2 === ""){
            formData.append('country2',data.country2);
        }else{
            formData.append('country2',country2);
        }

        if(sinceWhen === ""){
            formData.append('sinceWhen',data.sinceWhen);
        }else{
            formData.append('sinceWhen',sinceWhen);
        }
        if(vehicle === ""){
            formData.append('vehicle',data.vehicle);
        }else{
            formData.append('vehicle',vehicle);
        }
        if(vin === ""){
            formData.append('vin',data.vin);
        }else{
            formData.append('vin',vin);
        }
        if(kilometrage === ""){
            formData.append('kilometrage',data.kilometrage);
        }else{
            formData.append('kilometrage',kilometrage);
        }
        if(carCondition === ""){
            formData.append('carCondition',data.carCondition);
        }else{
            formData.append('carCondition',carCondition);
        }
        if(carFaxLink === ""){
            formData.append('carFaxLink',data.carFaxLink);
        }else{
            formData.append('carFaxLink',carFaxLink);
        }
        if(dealerName === ""){
            formData.append('dealerName',data.dealerName);
        }else{
            formData.append('dealerName',dealerName);
        }
        if(amountCar === ""){
            formData.append('amountCar',data.amountCar);
        }else{
            formData.append('amountCar',amountCar);
        }
        if(amountDeposit === ""){
            formData.append('amountDeposit',data.amountDeposit);
        }else{
            formData.append('amountDeposit',amountDeposit);
        }
        if(amountFinanced === ""){
            formData.append('amountFinanced',data.amountFinanced);
        }else{
            formData.append('amountFinanced',amountFinanced);
        }

        if(employer === ""){
            formData.append('employer',data.employer);
        }else{
            formData.append('employer',employer);
        }
        if(employerAddress === ""){
            formData.append('employerAddress',data.employerAddress);
        }else{
            formData.append('employerAddress',employerAddress);
        }
        if(nameSuperior === ""){
            formData.append('nameSuperior',data.nameSuperior);
        }else{
            formData.append('nameSuperior',nameSuperior);
        }
        if(employerPhone === ""){
            formData.append('employerPhone',data.employerPhone);
        }else{
            formData.append('employerPhone',employerPhone);
        }
        if(positionHeld === ""){
            formData.append('positionHeld',data.positionHeld);
        }else{
            formData.append('positionHeld',positionHeld);
        }
        if(employerSinceWhen === ""){
            formData.append('employerSinceWhen',data.employerSinceWhen);
        }else{
            formData.append('employerSinceWhen',employerSinceWhen);
        }
        if(schedules === ""){
            formData.append('schedules',data.schedules);
        }else{
            formData.append('schedules',schedules);
        }
        if(salary === ""){
            formData.append('salary',data.salary);
        }else{
            formData.append('salary',salary);
        }
        if(annualRevenue === ""){
            formData.append('annualRevenue',data.annualRevenue);
        }else{
            formData.append('annualRevenue',annualRevenue);
        }
        if(employer2 === ""){
            formData.append('employer2',data.employer2);
        }else{
            formData.append('employer2',employer2);
        }
        if(employerAddress2 === ""){
            formData.append('employerAddress2',data.employerAddress2);
        }else{
            formData.append('employerAddress2',employerAddress2);
        }
        if(nameSuperior2 === ""){
            formData.append('nameSuperior2',data.nameSuperior2);
        }else{
            formData.append('nameSuperior2',nameSuperior2);
        }
        if(employerPhone2 === ""){
            formData.append('employerPhone2',data.employerPhone2);
        }else{
            formData.append('employerPhone2',employerPhone2);
        }
        if(positionHeld2 === ""){
            formData.append('positionHeld2',data.positionHeld2);
        }else{
            formData.append('positionHeld2',positionHeld2);
        }
        if(employerSinceWhen2 === ""){
            formData.append('employerSinceWhen2',data.employerSinceWhen2);
        }else{
            formData.append('employerSinceWhen2',employerSinceWhen2);
        }
        if(schedules2 === ""){
            formData.append('schedules2',data.schedules2);
        }else{
            formData.append('schedules2',schedules2);
        }
        if(salary2 === ""){
            formData.append('salary2',data.salary2);
        }else{
            formData.append('salary2',salary2);
        }
        if(annualRevenue2 === ""){
            formData.append('annualRevenue2',data.annualRevenue2);
        }else{
            formData.append('annualRevenue2',annualRevenue2);
        }
        if(income1Name === ""){
            formData.append('income1Name',data.income1Name);
        }else{
            formData.append('income1Name',income1Name);
        }
        if(income1Amount === ""){
            formData.append('income1Amount',data.income1Amount);
        }else{
            formData.append('income1Amount',income1Amount);
        }
        if(income2Name === ""){
            formData.append('income2Name',data.income2Name);
        }else{
            formData.append('income2Name',income2Name);
        }
        if(income2Amount === ""){
            formData.append('income2Amount',data.income2Amount);
        }else{
            formData.append('income2Amount',income2Amount);
        }
        if(income3Name === ""){
            formData.append('income3Name',data.income3Name);
        }else{
            formData.append('income3Name',income3Name);
        }
        if(income3Amount === ""){
            formData.append('income3Amount',data.income3Amount);
        }else{
            formData.append('income3Amount',income3Amount);
        }
        if(feedbacks === ""){
            formData.append('feedbacks',data.feedbacks);
        }else{
            formData.append('feedbacks',feedbacks);
        }

        if(fileVehicle === ""){
            formData.append('fileVehicle_path',data.fileVehicle_path);
        }else{
            formData.append('fileVehicle_path',fileVehicle);
        }
        if(fileCredit === ""){
            formData.append('fileCredit_path',data.fileCredit_path);
        }else{
            formData.append('fileCredit_path',fileCredit);
        }
        if(fileId === ""){
            formData.append('fileId_path',data.fileId_path);
        }else{
            formData.append('fileId_path',fileId);
        }
        if(filePay === ""){
            formData.append('filePay_path',data.filePay_path);
        }else{
            formData.append('filePay_path',filePay);
        }
        if(fileBank === ""){
            formData.append('fileBank_path',data.fileBank_path);
        }else{
            formData.append('fileBank_path',fileBank);
        }
        if(fileCheque === ""){
            formData.append('fileCheque_path',data.fileCheque_path);
        }else{
            formData.append('fileCheque_path',fileCheque);
        }

        // for (var value of formData.values()) {
        //     console.log(value);
        //  }

        let result = await fetch("http://localhost:8000/api/profile/"+ profileIndex,{
            method: 'POST',
            body: formData
        });
        
        result = await result.json();
        console.log(result);
        if(result.error){
            console.log(result.error);
            history.push("/");
        }
        else{
        setIsReadonly(true);
            if(id){
                history.push("/admin")
            }else{
                alert("your profile has been updated successful")
                history.push("/profile")                
            }
        }
    }

    function passwordReset(){
        if(clientId){
            history.push("/password/"+clientId);
        }else{
            history.push("/password")
            
        }
    }

    useEffect(()=>{
        // console.log("fileVehicle:"+fileVehicle.name);
        if(fileVehicle){
            if(fileVehicle.name.split(".")[1] ==="pdf" || fileVehicle.name.split(".")[1] ==="doc" || fileVehicle.name.split(".")[1] ==="docx"){
                setImagePreviewFunction(<a href ={fileVehicle && URL.createObjectURL(fileVehicle)} target='_blank'>{fileVehicle.name}</a>)
            }
            else{
                setImagePreviewFunction(<img style={{width:150, height:150}} src={fileVehicle && URL.createObjectURL(fileVehicle)}/>)
            }
        }
    },[fileVehicle])
    useEffect(()=>{
        if(fileCredit){
            if(fileCredit.name.split(".")[1] ==="pdf" || fileCredit.name.split(".")[1] ==="doc" || fileCredit.name.split(".")[1] ==="docx"){
                setCreditPreviewFunction(<a href ={fileCredit && URL.createObjectURL(fileCredit)} target='_blank'>{fileCredit.name}</a>)
            }
            else{
                setCreditPreviewFunction(<img style={{width:150, height:150}} src={fileCredit && URL.createObjectURL(fileCredit)}/>)
            }
        }
    },[fileCredit])

    useEffect(()=>{
        if(fileId){
            if(fileId.name.split(".")[1] ==="pdf" || fileId.name.split(".")[1] ==="doc" || fileId.name.split(".")[1] ==="docx"){
                setIdPreviewFunction(<a href ={fileId && URL.createObjectURL(fileId)} target='_blank'>{fileId.name}</a>)
            }
            else{
                setIdPreviewFunction(<img style={{width:150, height:150}} src={fileId && URL.createObjectURL(fileId)}/>)
            }
        }
    },[fileId])
    useEffect(()=>{
        if(filePay){
            if(filePay.name.split(".")[1] ==="pdf" || filePay.name.split(".")[1] ==="doc" || filePay.name.split(".")[1] ==="docx"){
                setPayPreviewFunction(<a href ={filePay && URL.createObjectURL(filePay)} target='_blank'>{filePay.name}</a>)
            }
            else{
                setPayPreviewFunction(<img style={{width:150, height:150}} src={filePay && URL.createObjectURL(filePay)}/>)
            }
        }
    },[filePay])
    useEffect(()=>{
        if(fileBank){
            if(fileBank.name.split(".")[1] ==="pdf" || fileBank.name.split(".")[1] ==="doc" || fileBank.name.split(".")[1] ==="docx"){
                setBankPreviewFunction(<a href ={fileBank && URL.createObjectURL(fileBank)} target='_blank'>{fileBank.name}</a>)
            }
            else{
                setBankPreviewFunction(<img style={{width:150, height:150}} src={fileBank && URL.createObjectURL(fileBank)}/>)
            }
        }
    },[fileBank])

    useEffect(()=>{
        if(fileCheque){
            if(fileCheque.name.split(".")[1] ==="pdf" || fileCheque.name.split(".")[1] ==="doc" || fileCheque.name.split(".")[1] ==="docx"){
                setChequePreviewFunction(<a href ={fileCheque && URL.createObjectURL(fileCheque)} target='_blank'>{fileCheque.name}</a>)
            }
            else{
                setChequePreviewFunction(<img style={{width:150, height:150}} src={fileCheque && URL.createObjectURL(fileCheque)}/>)
            }
        }
    },[fileCheque])

    // if(!clientId){
    //     setDisplayPasswordResetBtn(<Button variant="outline-primary" onClick = {passwordReset}>{t("resetPassword")}</Button>)
    // }


    return(
        JSON.parse(localStorage.getItem('user-info')) ?
            <Wrapper>
                <Container> 
                    {clientId?
                    null
                    :
                    <div className="mt-5 text-end">
                    <Button variant="outline-primary" onClick = {passwordReset}>{t("resetPassword")}</Button>
                    </div>

                    }
                    {/* <div className="mt-5 text-end">
                        {displayPasswordResetBtn}
                    </div> */}
                    <h3 className="mt-3">{t("formInformation")}</h3> 
                    <Form className="mt-5 text-start p-3" onSubmit = {update} style={{boxShadow :'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}> 
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("email")}</Form.Label>
                                <Form.Control className="mb-3" type="email" defaultValue={data && data.email} readOnly/>
                            </Col>
                            <Col xs={12} md={4}>
                            <Form.Label >{t("firstName")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.firstName} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setFirstName(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("lastName")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.lastName} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setLastName(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("dateOfBirth")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.dateOfBirth} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setDateOfBirth(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("sin")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.sin} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setSin(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("phone")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.phone} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setPhone(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("desiredPayment")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.desiredPayment} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setDesiredPayment(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("maritalSatus")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.maritalSatus} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setMaritalStatus(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("bankrupt")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.bankrupt} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setBankrupt(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("proposalConsumer")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.proposalConsumer} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setProposalConsumer(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("house")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.house} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setHouse(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("mortgageRent")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.mortgageRent} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setMortgageRent(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("streetAddress")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.streetAddress} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setStreetAddress(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("city")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.city} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setCity(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("province")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.province} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setProvince(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("postcode")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.postcode} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setPostcode(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("streetAddress2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.streetAddress2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setStreetAddress2(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("city2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.city2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setCity2(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("province2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.province2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setProvince2(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("postcode2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.postcode2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setPostcode2(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("country2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.country2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setCountry2(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("sinceWhen")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.sinceWhen} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setSinceWhen(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("vehicle")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.vehicle} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setVehicle(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("vin")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.vin} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setVin(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("kilometrage")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.kilometrage} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setKilometrage(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("carCondition")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.carCondition} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setCarCondition(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("carFaxLink")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.carFaxLink} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setCarFaxLink(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("dealerName")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.dealerName} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setDealerName(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("amountCar")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.amountCar} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setAmountCar(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("amountDeposit")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.amountDeposit} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setAmountDeposit(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("amountFinanced")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.amountFinanced} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setAmountFinanced(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("employer")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.employer} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmployer(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("employerAddress")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.employerAddress} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmployerAddress(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("nameSuperior")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.nameSuperior} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setNameSuperior(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("employerPhone")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.employerPhone} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmployerPhone(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("positionHeld")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.positionHeld} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setPositionHeld(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("employerSinceWhen")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.employerSinceWhen} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmployerSinceWhen(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("schedules")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.schedules} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setSchedules(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("salary")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.salary} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setSalary(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("annualRevenue")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.annualRevenue} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setAnnualRevenue(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("employer2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.employer2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmployer2(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("employerAddress2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.employerAddress2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmployerAddress2(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("nameSuperior2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.nameSuperior2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setNameSuperior2(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("employerPhone2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.employerPhone2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmployerPhone2(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("positionHeld2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.positionHeld2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setPositionHeld2(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("employerSinceWhen2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.employerSinceWhen2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setEmployerSinceWhen2(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("schedules2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.schedules2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setSchedules2(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("salary2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.salary2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setSalary2(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("annualRevenue2")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.annualRevenue2} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setAnnualRevenue2(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("income1Name")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.income1Name} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setIncome1Name(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("income1Amount")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.income1Amount} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setIncome1Amount(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("income2Name")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.income2Name} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setIncome2Name(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("income2Amount")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.income2Amount} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setIncome2Amount(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("income3Name")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.income3Name} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setIncome3Name(e.target.value)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("income3Amount")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.income3Amount} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setIncome3Amount(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("feedbacks")}</Form.Label>
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.feedbacks} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setFeedbacks(e.target.value)} />
                            </Col>
                            <Col xs={12} md={4}>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4}>
                                <Form.Label >{t("vehicleWindowFilm")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFileVehicle(e.target.files[0])}/>
                                <div className="form-group preview mt-4">
                                    {imagePreviewFunction} 
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("creditReport")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFileCredit(e.target.files[0])}/>
                                <div className="form-group preview mt-4">
                                    {creditPreviewFunction} 
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("identification")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFileId(e.target.files[0])}/>
                                <Form.Text className="text-muted">
                                    Identification with front and back
                                </Form.Text>
                                <div className="form-group preview mt-4">
                                    {idPreviewFunction} 
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowStyle">
                            <Col xs={12} md={4}>
                                <Form.Label >{t("payStubs")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFilePay(e.target.files[0])}/>
                                <div className="form-group preview mt-4">
                                    {payPreviewFunction} 
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("bankStatements")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFileBank(e.target.files[0])}/>
                                <div className="form-group preview mt-4">
                                    {bankPreviewFunction} 
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("specimenCheque")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFileCheque(e.target.files[0])}/>
                                <div className="form-group preview mt-4">
                                    {chequePreviewFunction} 
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md={4}>            
                                <Button variant="primary" type="submit" className="mt-3">
                                    {t("update")}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
           </Wrapper>
        :
        <>
            <h6 className="mt-5 col-sm-6 offset-sm-2">Please click to < Link to="/login">login</Link> first! </h6>
        </>
    );
}

export default Profile

const Wrapper = styled.div`
    Form{
        color: darkturquoise !important;
        font-weight: 500;
    }
    .rowStyle{
        margin-top: 50px;
        margin-bottom: 40px;
    }
    Button{
        width:300px !important;
    }
 

`