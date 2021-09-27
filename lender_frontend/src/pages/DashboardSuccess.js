import {Row,Col,Container} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import FourBadges from '../components/FourBadges';
import Card from '../components/Card';
import {Pie3D, Column3D, Msline, MslineCredit } from '../components/Charts';
import styled from 'styled-components';
import loadingImage from '../pictures/preloader.gif';

function DashboardSuccess() {

    const[monthlyIncome, setMonthlyIncome] = useState([]);
    const[arrayHelper2, SetArrayHelper2] = useState([]);
    const[monthlyDescDebitData, SetMonthlyDescDebitData] = useState([]);
    const[monthlyDescCreditData, SetMonthlyDescCreditData] = useState([]);
    const[monthlyIncomeChartData, SetMonthlyIncomeChartData] = useState([]);
    const[monthlyDescDebitChartData1, SetMonthlyDescDebitChartData1] = useState([]);
    const[monthlyDescCreditChartData1, SetMonthlyDescCreditChartData1] = useState([]);
    const[monthlyDescDebitChartData2, SetMonthlyDescDebitChartData2] = useState([]);
    const[monthlyDescCreditChartData2, SetMonthlyDescCreditChartData2] = useState([]);
    const[pie3DInfoChartData, SetPie3DInfoChartData] = useState([]);
    const[cardBadgesInfoChartData, SetCardBadgesInfoChartData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let{zumId} = useParams();
    let user = JSON.parse(localStorage.getItem('user-info'));
    const[zumIdIndex, SetZumIdIndex] = useState(zumId? zumId:(user&&user.zumId));

    let arrayHelper3 =[];
    // const[descData, SetDescData] = useState([]);

    useEffect(async()=>{
        // set gear
        setIsLoading(true)
        let item = {Username: 'jstlouis+1@phinanse.com',Password:'Phinanse2021'}
        let tokenResult = await fetch("https://api-sandbox.zumrails.com/api/authorize",{
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type" : "application/json",
                "Accept" : 'application/json'
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error:'+ error)
        });
        
        tokenResult = await tokenResult.json();
        let tokenRefresh = tokenResult.result.Token;

        let result = await fetch("https://api-sandbox.zumrails.com/api/user/getbankaccountinformation/" +zumIdIndex,{
            method: 'GET',
            // body: JSON.stringify(item),
            headers:{
                "Content-Type" : "application/json",
                "Accept" : 'application/json',
                "Authorization" : "Bearer "+tokenRefresh
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error:'+ error)
        });
        result = await result.json();

        
        let m=0;
        for(let i= 0; i<25;i++){
            if(!result.result.Accounts[i].Transactions.length){          
            }
            else{
                m=i;
                break;
            }
            
        }

        let dataStr = result.result.Accounts[m].Transactions;
        const monthlyIncome = dataStr.reduce((total, item) => {
            const {Date, Credit} = item;
            if(!Date) return total;
            let dataStrShort = Date.substring(0,7);

            if( !total[dataStrShort]) {
            total[dataStrShort] = { label: dataStrShort, value: Credit};
            } else {
                total[dataStrShort] = {
                ...total[dataStrShort],
                value: total[dataStrShort].value +item.Credit,
                };
            }
            return total;
        },{});
        setMonthlyIncome(Object.values(monthlyIncome));
        SetMonthlyIncomeChartData(Object.values(monthlyIncome).slice(0,7));
        //credit data statistic
        //1.get date in array
        let dateArray = [];
        dataStr.forEach(item =>{
            dateArray.push(item.Date.substring(0,7));
        })
        dateArray = new Set(dateArray);
        //2. group by date then description
        let descData={};
        dateArray.forEach(itemDate =>{
            descData[itemDate] = dataStr.reduce((total, item) => {
                const {Date, Description, Debit, Credit} = item;
                if(!Date) return total;
                let dataStrShort = Date.substring(0,7);
                if(itemDate === dataStrShort){
                    if( !total[Description]) {
                        total[Description] = { label: Description, value: Credit, date:dataStrShort};
                    } else {
                        total[Description] = {
                        ...total[Description],
                        value: total[Description].value +item.Credit,
                        date: item.Date.substring(0,7)
                        };
                    
                    }
                }
                return total;
            },{});
        })

        let arrayHelper =[];

        dateArray.forEach(itemkey =>{
            for(const[key,value] of Object.entries(descData)){
                if (itemkey === (Object.keys(descData).find(key => descData[key] === value))){
                    Object.values(value).forEach((itemIn) =>{                    
                        arrayHelper.push({
                            label: itemIn.label,
                            value: itemIn.value,
                            date: key
                        });
                    });
                }
            }
            arrayHelper3.push(arrayHelper);
            arrayHelper =[];

        })
        SetArrayHelper2(arrayHelper3);

        // statis monthly description debit data
        const monthlyDescDebit = dataStr.reduce((total, item) => {
            const {Date, Description, Debit} = item;
            if(!Date) return total;
            let dataStrShort = Date.substring(0,7);
            if(!total[dataStrShort])
            {
                total[dataStrShort] = {};
            }

            if( !total[dataStrShort][Description]) {
                total[dataStrShort][Description] = { label: Description, value: Debit, date:dataStrShort};
            } else {
                total[dataStrShort][Description] = {
                    ...total[dataStrShort][Description],
                    value: total[dataStrShort][Description].value +item.Debit,
                    date: item.Date.substring(0,7)
                };
                
            
            }
           
            return total;
        },{});
        SetMonthlyDescDebitData(monthlyDescDebit);

        // set first Msline chart debit data
        let monthlyDescDebitChartDataHelp = [];
        Object.keys(monthlyDescDebit).forEach(item =>{
            monthlyDescDebitChartDataHelp.push({
                label: item
            })
        })
        let monthlyDescDebitChartData1=[];
        monthlyDescDebitChartData1.push({
            category: monthlyDescDebitChartDataHelp.slice(0,7)
        })
        SetMonthlyDescDebitChartData1(monthlyDescDebitChartData1)

        // set seconde Mslin chart debit data

        //get descriptions in array
        let descArray = [];
        (Object.values(monthlyDescDebit).forEach(item =>{
            descArray=[...descArray,...Object.keys(item)];
        }));
        descArray = new Set(descArray);

        let monthlyDescDebitChartData2={};
        let monthlyDescDebitChartData2Help=[];
        let total={};
        let flag=0;
        descArray.forEach(item=>{
            monthlyDescDebitChartData2Help=[];
            monthlyDescDebitChartData2Help.push({value: 0});
            flag = 0;
            total[item] = {seriesname:"", data:monthlyDescDebitChartData2Help}
            Object.values(monthlyDescDebit).slice(0,7).forEach(itemIn =>{
                Object.values(itemIn).forEach(itemInIn =>{
                        if (item === itemInIn.label){
                            if(flag === 0){
                                monthlyDescDebitChartData2Help=[];
                                flag = 1;
                            }
                            monthlyDescDebitChartData2Help.push({value: itemInIn.value});
                        total[item] = {...total[item],seriesname:itemInIn.label, data:monthlyDescDebitChartData2Help}
                        }
                });
            });
        });
        SetMonthlyDescDebitChartData2(Object.values(total));

        // statis monthly description credit data
        const monthlyDescCredit = dataStr.reduce((total, item) => {
            const {Date, Description, Credit} = item;
            if(!Date) return total;
            let dataStrShort = Date.substring(0,7);
            if(!total[dataStrShort])
            {
                total[dataStrShort] = {};
            }
                if( !total[dataStrShort][Description]) {
                    total[dataStrShort][Description] = { label: Description, value: Credit, date:dataStrShort};
                } else {
                    total[dataStrShort][Description] = {
                        ...total[dataStrShort][Description],
                        value: total[dataStrShort][Description].value +item.Credit,
                        date: item.Date.substring(0,7)
                    };
                    
                
                }           
            return total;
        },{});
        SetMonthlyDescCreditData(monthlyDescCredit);

        // set first Msline chart credit data
        let monthlyDescCreditChartDataHelp = [];
        Object.keys(monthlyDescCredit).forEach(item =>{
            monthlyDescCreditChartDataHelp.push({
                label: item
            })
        })
        let monthlyDescCreditChartData1=[];
        monthlyDescCreditChartData1.push({
            category: monthlyDescCreditChartDataHelp.slice(0,7)
        })
        SetMonthlyDescCreditChartData1(monthlyDescCreditChartData1);

        // set seconde Mslin chart credit data

        //get descriptions in array
        let descArrayCredit = [];
        (Object.values(monthlyDescCredit).forEach(item =>{
            descArrayCredit=[...descArray,...Object.keys(item)];
        }));
        descArrayCredit = new Set(descArrayCredit);

        let monthlyDescCreditChartData2={};
        let monthlyDescCreditChartData2Help=[];
        let totalCredit={};
        let flagCredit=0;
        descArrayCredit.forEach(item=>{
            monthlyDescCreditChartData2Help=[];
            monthlyDescCreditChartData2Help.push({value: 0});
            flagCredit = 0;
            totalCredit[item] = {seriesname:"", data:monthlyDescCreditChartData2Help}
            Object.values(monthlyDescCredit).slice(0,7).forEach(itemIn =>{
                Object.values(itemIn).forEach(itemInIn =>{
                        if (item === itemInIn.label){
                            if(flagCredit === 0){
                                monthlyDescCreditChartData2Help=[];
                                flagCredit = 1;
                            }
                            monthlyDescCreditChartData2Help.push({value: itemInIn.value});
                            totalCredit[item] = {...totalCredit[item],seriesname:itemInIn.label, data:monthlyDescCreditChartData2Help}
                        }
                });
            });
        });
        SetMonthlyDescCreditChartData2(Object.values(totalCredit));

        // fetch card info data

        let cardBadgesInfo={};
        cardBadgesInfo['userName']=result.result.HolderName;
        cardBadgesInfo['institution']=result.result.Institution.substring(0,4);
        cardBadgesInfo['lastRefresh']=result.result.LastRefresh.substring(0,7);
        cardBadgesInfo['userEmail']=result.result.HolderEmail;
        cardBadgesInfo['userAddress']=result.result.HolderCivicAddress +" "+ result.result.HolderCity+" "+result.result.HolderProvince+" "+ result.result.HolderPostalCode;
        cardBadgesInfo['userCountry']=result.result.HolderCountry;
        cardBadgesInfo['totalCredit']= result.result.Accounts.reduce((sum,item)=>{
            sum= sum+item.Balance;
            return Math.ceil(sum);
        },0)

        SetCardBadgesInfoChartData(cardBadgesInfo);
        //fetch Pie chart data
        let pie3DInfo={};
        result.result.Accounts.forEach(a=>{
            pie3DInfo[a.Title]={label:a.Title ? a.Title.substring(6,17):'No Description', value:a.Balance}
        })
        SetPie3DInfoChartData(Object.values(pie3DInfo));
        //gear finish
        setIsLoading(false)
    },[])

    return(
        user ?
            user.isMatch === "yes" || zumId ?
            isLoading?
                <img src={loadingImage} className = 'loading-img' alt = 'loading'/>
                :
                <Wrapper>
                    <Container>
                        <Row>
                            <FourBadges data ={cardBadgesInfoChartData}/>
                        </Row>

                            <Row xs={1} md={2} style={{marginTop:'10px', marginBottom:'60px'}}>
                                <Col md={{span:7,offset:0.5}} style={{marginTop:'30px'}}>
                                    <Card data ={cardBadgesInfoChartData}/>
                                </Col>
                                <Col md={{span:5,offset:0.5}} style={{marginTop:'30px'}}>
                                    <article>
                                        <Pie3D style={{borderColor:'green solid 3px'}} data ={pie3DInfoChartData}/>

                                    </article>
                                </Col>
                            </Row>
        
                        <Row style={{marginTop:'60px', marginBottom:'60px'}}>
                            <article>
                                <Column3D data = {monthlyIncomeChartData}></Column3D>
                            </article>
                        </Row>
                        <Row xs={1} md={2}style={{marginTop:'60px', marginBottom:'60px'}}>
                                <Col style={{marginTop:'50px'}}>
                            <article>
                                    <Msline data = {monthlyDescDebitChartData1} data2={monthlyDescDebitChartData2}></Msline>
                            </article>
                                </Col>
                                <Col style={{marginTop:'50px'}}>
                            <article>
                                    <MslineCredit data = {monthlyDescCreditChartData1} data2={monthlyDescCreditChartData2}></MslineCredit>
                            </article>
                                </Col>
                        </Row>
                        <Row style={{marginTop:'60px'}}>
                        </Row>
                    
                    </Container>
                </Wrapper>
            :
            <>
                <Dashboard />
            </>
        :
        <>
        <h6 className="mt-5 col-sm-6 offset-sm-2">Please click to < Link to="/login">login</Link> first! </h6>
        </>
    );
}

export default DashboardSuccess

const Wrapper = styled.div`
   background-color: whitesmoke;
   article{
    border-radius: 25px;
    /* border-color: green solid 1px; */
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

   }
       

`;
