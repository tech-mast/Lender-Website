import {CardGroup,Card,Container,Row,Col} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useState} from 'react';
import styled from 'styled-components';
import cardgroupimg1 from '../pictures/cardgroupimg1.png'
import cardgroupimg2 from '../pictures/cardgroupimg2.png'
import cardgroupimg3 from '../pictures/cardgroupimg3.png'
import mainpagecenterimage1 from '../pictures/mainpagecenterimage1.jpg'
import mainpagecenterimage2 from '../pictures/mainpagecenterimage2.jpg'
import carousel2 from '../pictures/carousel2.jpg'

function Footer() {
    return(
        <Container fluid>
            <RomWrapper>
                <Row xs={1} md={4} className="g-4, my-5" >
                <Col md={{span:2.5,offset:0.5}}>
                        <h5>Get in touch</h5>
                        <hr style={{color:'white'}}/>
                        <h6>email:lender@lender.com</h6>
                        <h6>tel: 123456789</h6>
                </Col>
                <Col md={{span:2.5,offset:0.5}}>
                        <h5>Borrow</h5>
                        <hr style={{color:'white'}}/>
                        <h6>Check your rate</h6>
                        <h6>How it works</h6>
                        <h6>Rates &amp; fees</h6>
                </Col>
                <Col md={{span:2.5,offset:0.5}}>
                        <h5>Invest</h5>
                        <hr style={{color:'white'}}/>
                        <h6>Start investing</h6>
                        <h6>Loan Statistic</h6>
                        <h6>Investor Help Centre</h6>
                </Col>
                <Col md={{span:2.5,offset:0.5}}>
                        <h5>Company</h5>
                        <hr style={{color:'white'}}/>
                        <h6>About us</h6>
                        <h6>Carrer</h6>
                        <h6>Terms of use</h6>
                </Col>
     
                </Row>
            </RomWrapper>
        </Container>
    );
}

export default Footer;

const RomWrapper = styled.div`
    margin-bottom: 50px;
    /* height: 210px; */
    background: teal;
    h5{
        margin-top:40px;
        color: white;

    }
    h6{
        margin-top:10px;
        color: white;
    }

`;