import {CardGroup,Card,Container,Row,Col} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useState} from 'react';
import styled from 'styled-components';
import cardgroupimg1 from '../pictures/cardgroupimg1.png'
import cardgroupimg2 from '../pictures/cardgroupimg2.png'
import cardgroupimg3 from '../pictures/cardgroupimg3.png'
import mainpagecenterimage1 from '../pictures/mainpagecenterimage1.jpg'
import carousel2 from '../pictures/carousel2.jpg'
import {useTranslation} from 'react-i18next';

function GroupCards() {
    var well={
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        height:'420px', 
        width:'320px',
        borderRadius: '15px 50px',
        marginLeft: '50px'
    }
    const {t} = useTranslation();
    return(
        <>
        <Container>
            <Row xs={1} md={3} className="g-4, my-5" >
            <Col md={{span:3.5,offset:0.5}} sm={10} xs={10}>
                {/* <Card className = "text-center" style={{ height:'420px', width:'320px'}}  border="info" > */}
                <Card className = "text-center" style={well}  border="info" >
                    <ImgInCard>
                    <Card.Img variant="top" src={cardgroupimg1} style={{ width: '100%', height:'150px'}}/>
                    </ImgInCard>
                    <Card.Body>
                    <Card.Title>{t("card1up")}</Card.Title>
                    <Card.Text style={{ margin:'40px'}}>
                       {t("card1down")}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={{span:3.5,offset:0.5}} sm={10} xs={10}>
                <Card style={well}  border="info">
                    <ImgInCard>
                    <Card.Img variant="top" src={cardgroupimg2} style={{ width: '100%', height:'150px'}}/>
                    </ImgInCard>
                    <Card.Body>
                    <Card.Title>{t("card2up")}</Card.Title>
                    <Card.Text style={{ margin:'40px'}}>
                        {t("card2down")}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={{span:3.5,offset:0.5}} sm={10} xs={10}>
                <Card style={well}  border="info"> 
                    <ImgInCard>
                    <Card.Img variant="top" src={cardgroupimg3} style={{ width: '100%',height:'150px'}}/>
                    </ImgInCard>
                    <Card.Body>
                    <Card.Title>{t("card3up")}</Card.Title>
                    <Card.Text style={{ margin:'40px'}}>
                       {t("card3down")}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>        
            </Row>
        </Container>
        <Container fluid>
            <RomWrapperGrey>
                <Row md={2} xs={1} tyle={{ background:'blue'}}>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h5>{t("card4up")}</h5>
                        <h3>{t("card4m")}</h3>
                        <h6>{t("card4down")}</h6>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }}>
                        <img src = {mainpagecenterimage1} alt ='mainpagecenterimage1' />
                    </Col>
                </Row>
            </RomWrapperGrey>
            <RomWrapper>
                <Row md={2} xs={1} tyle={{ background:'blue'}}>
                    <Col md={{ span: 6, offset: 0.5 }}>
                        <img src = {carousel2} alt ='mainpagecenterimage2' />
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h5>{t("card5up")}</h5>
                        <h3>{t("card5m")}</h3>
                        <h6>{t("card5down")}</h6>
                    </Col>
                </Row>
            </RomWrapper>
        </Container>
    </>
    );
}

export default GroupCards;

const ImgInCard = styled.div`
 
    margin-top: 30px !important;
    margin-bottom: 70px !important;
    margin-left: 70px !important;
    margin-right: 70px !important;
    

`;
const RomWrapperGrey = styled.div`
    margin-bottom: 50px;
    /* height: 450px; */
    background: #f5f7fa;
    img{
        height: 350px;
        width: 85%;
        margin: 20px;
        margin-top: 50px;
        border-radius: 25px;
        border-bottom: 4px solid lightblue;
        border-right: 4px solid lightblue;

    }
    h5{
        margin-top:100px;
        color: darkturquoise;

    }
    h3{
        margin-top:30px;
        color:MidnightBlue;
    }
    h6{
        margin-top:30px;
        color: grey;
    }
`;
const RomWrapper = styled.div`
    margin-bottom: 50px;
    /* height: 450px; */
    background: white;
    img{
        height: 350px;
        width: 85%;
        margin: 20px;
        margin-top: 50px;
        border-radius: 25px;
        border-bottom: 4px solid lightblue;
        border-right: 4px solid lightblue;

    }
    h5{
        margin-top:100px;
        color: darkturquoise;

    }
    h3{
        margin-top:30px;
        color:MidnightBlue;
    }
    h6{
        margin-top:30px;
        color: grey;
    }

`;