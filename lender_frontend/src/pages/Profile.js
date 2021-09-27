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

    const [previewFunction, setPreviewFunction] = useState({ imagePreview: "", chequePreview: "",creditPreview:"",idPreview:"",payPreview:"",bankPreview:"" });

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
        // set initial images and file preview
        function previewBox(a,b){
            if(a.split(".")[1] ==="pdf" || a.split(".")[1] ==="doc" || a.split(".")[1] ==="docx"){
                setPreviewFunction(prevState =>({...prevState,[b]:<a href ={"http://localhost:8000/"+a} target='_blank'> {b}.{a.split(".")[1]}</a>}))
            }
            else{
                setPreviewFunction(prevState =>({...prevState,[b]:<img style={{width:150, height:150}} src={"http://localhost:8000/"+a}/>}))
            }
        }

        if(result.fileVehicle_path){
            previewBox(result.fileVehicle_path,"imagePreview");
        }

        if(result.fileCredit_path){
            previewBox(result.fileCredit_path,"creditPreview");
        }
        if(result.fileId_path){
            previewBox(result.fileId_path,"idPreview");
        }
        if(result.filePay_path){
            previewBox(result.filePay_path,"payPreview");
        }
        if(result.fileBank_path){
            previewBox(result.fileBank_path,"bankPreview");
        }
        if(result.fileCheque_path){
            previewBox(result.fileCheque_path,"chequePreview");
        }
    },[])

    function verifyInput(n,o,st){

    }

    async function update (e){
        e.preventDefault();
        const formData = new FormData();
        function verifyInput(n,o,st){
            if(n === ""){
                formData.append(st,o);
            }else{
                formData.append(st,n);
            }
        }

        verifyInput(email,data.email,"email");
        verifyInput(firstName,data.firstName,"firstName");
        verifyInput(lastName,data.lastName,"lastName");
        verifyInput(dateOfBirth,data.dateOfBirth,"dateOfBirth");
        verifyInput(sin,data.sin,"sin");
        verifyInput(phone,data.phone,"phone");
        verifyInput(desiredPayment,data.desiredPayment,"desiredPayment");
        verifyInput(maritalStatus,data.maritalStatus,"maritalStatus");
        verifyInput(bankrupt,data.bankrupt,"bankrupt");
        verifyInput(proposalConsumer,data.proposalConsumer,"proposalConsumer");
        verifyInput(house,data.house,"house");
        verifyInput(mortgageRent,data.mortgageRent,"mortgageRent");
        verifyInput(streetAddress,data.streetAddress,"streetAddress");
        verifyInput(city,data.city,"city");
        verifyInput(province,data.province,"province");
        verifyInput(postcode,data.postcode,"postcode");
        verifyInput(streetAddress2,data.streetAddress2,"streetAddress2");
        verifyInput(city2,data.city2,"city2");
        verifyInput(province2,data.province2,"province2");
        verifyInput(postcode2,data.postcode2,"postcode2");
        verifyInput(country2,data.country2,"country2");
        verifyInput(sinceWhen,data.sinceWhen,"sinceWhen");
        verifyInput(vehicle,data.vehicle,"vehicle");
        verifyInput(vin,data.vin,"vin");
        verifyInput(kilometrage,data.kilometrage,"kilometrage");
        verifyInput(carCondition,data.carCondition,"carCondition");
        verifyInput(carFaxLink,data.carFaxLink,"carFaxLink");
        verifyInput(dealerName,data.dealerName,"dealerName");
        verifyInput(amountCar,data.amountCar,"amountCar");
        verifyInput(amountDeposit,data.amountDeposit,"amountDeposit");
        verifyInput(amountFinanced,data.amountFinanced,"amountFinanced");
        verifyInput(employer,data.employer,"employer");
        verifyInput(employerAddress,data.employerAddress,"employerAddress");
        verifyInput(nameSuperior,data.nameSuperior,"nameSuperior");
        verifyInput(employerPhone,data.employerPhone,"employerPhone");
        verifyInput(positionHeld,data.positionHeld,"positionHeld");
        verifyInput(employerSinceWhen,data.employerSinceWhen,"employerSinceWhen");
        verifyInput(schedules,data.schedules,"schedules");
        verifyInput(salary,data.salary,"salary");
        verifyInput(annualRevenue,data.annualRevenue,"annualRevenue");
        verifyInput(employer2,data.employer2,"employer2");
        verifyInput(employerAddress2,data.employerAddress2,"employerAddress2");
        verifyInput(nameSuperior2,data.nameSuperior2,"nameSuperior2");
        verifyInput(employerPhone2,data.employerPhone2,"employerPhone2");
        verifyInput(positionHeld2,data.positionHeld2,"positionHeld2");
        verifyInput(employerSinceWhen2,data.employerSinceWhen2,"employerSinceWhen2");
        verifyInput(schedules2,data.schedules2,"schedules2");
        verifyInput(salary2,data.salary2,"salary2");
        verifyInput(annualRevenue2,data.annualRevenue2,"annualRevenue2");
        verifyInput(income1Name,data.income1Name,"income1Name");
        verifyInput(income1Amount,data.income1Amount,"income1Amount");
        verifyInput(income2Name,data.income2Name,"income2Name");
        verifyInput(income2Amount,data.income2Amount,"income2Amount");
        verifyInput(income3Name,data.income3Name,"income3Name");
        verifyInput(income3Amount,data.income3Amount,"income3Amount");
        verifyInput(feedbacks,data.feedbacks,"feedbacks");

        verifyInput(fileVehicle,data.fileVehicle_path,"fileVehicle_path");
        verifyInput(fileCredit,data.fileCredit_path,"fileCredit_path");
        verifyInput(fileId,data.fileId_path,"fileId_path");
        verifyInput(filePay,data.filePay_path,"filePay_path");
        verifyInput(fileBank,data.fileBank_path,"fileBank_path");
        verifyInput(fileCheque,data.fileCheque_path,"fileCheque_path");

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

    // set update images and file preview
    function updatePreviewBox(a,b){
        if(a.name.split(".")[1] ==="pdf" || a.name.split(".")[1] ==="doc" || a.name.split(".")[1] ==="docx"){
            setPreviewFunction(prevState =>({...prevState,[b]:<a href ={a && URL.createObjectURL(a)} target='_blank'>{a.name}</a>}))
        }
        else{
            setPreviewFunction(prevState =>({...prevState,[b]:<img style={{width:150, height:150}} src={a && URL.createObjectURL(a)}/>}))
        }
    }

    useEffect(()=>{

        if(fileVehicle){updatePreviewBox(fileVehicle,"imagePreview")}
        if(fileCheque){updatePreviewBox(fileCheque,"chequePreview")}
        if(fileId){updatePreviewBox(fileId,"idPreview")}
        if(fileCredit){updatePreviewBox(fileCredit,"creditPreview")}
        if(filePay){updatePreviewBox(filePay,"payPreview")}
        if(fileBank){updatePreviewBox(fileBank,"bankPreview")}
    },[fileVehicle,fileCheque,fileId,fileCredit,filePay,fileBank])
    
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
                                <Form.Control className="mb-3" type="text" defaultValue={data && data.maritalStatus} onClick = {() => setIsReadonly(false)} readOnly ={isReadonly} onChange = {(e) => setMaritalStatus(e.target.value)} />
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
                                    {previewFunction.imagePreview}
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("creditReport")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFileCredit(e.target.files[0])}/>
                                <div className="form-group preview mt-4">
                                    {previewFunction.creditPreview}
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("identification")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFileId(e.target.files[0])}/>
                                <Form.Text className="text-muted">
                                    Identification with front and back
                                </Form.Text>
                                <div className="form-group preview mt-4">
                                    {previewFunction.idPreview}
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowStyle">
                            <Col xs={12} md={4}>
                                <Form.Label >{t("payStubs")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFilePay(e.target.files[0])}/>
                                <div className="form-group preview mt-4">
                                    {previewFunction.payPreview}
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("bankStatements")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFileBank(e.target.files[0])}/>
                                <div className="form-group preview mt-4">
                                    {previewFunction.bankPreview}
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label >{t("specimenCheque")}</Form.Label>
                                <input type="file" className="form-control" onChange = {(e) => setFileCheque(e.target.files[0])}/>
                                <div className="form-group preview mt-4">
                                    {previewFunction.chequePreview}
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
