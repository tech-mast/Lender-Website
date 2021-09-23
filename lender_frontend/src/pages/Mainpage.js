import {Form, Button,Container,Row,Col,ListGroup} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselComponent from '../components/CarouselComponent';
import GroupCards from '../components/GroupCards';
import {useTranslation} from 'react-i18next';

function Mainpage() {
    const history = useHistory();
    const {t} = useTranslation();
    function logOut(){
        localStorage.clear();
        history.push('/login')
    }
    let user = JSON.parse(localStorage.getItem('user-info'));
    return(
        user?
        <>
        <Header />
        <Wrapper>
            <Container fluid>
                <Row xs={1} md={2}>
                    <Col md={{span:2}} id='leftSidebarCol'>
                        <ListGroup id='listGroupLeft'>
                            <ListGroup.Item id='listG'action href="/profile">{t('account')}</ListGroup.Item>
                            <ListGroup.Item id='listG'  action href="/dashboard">{t('dashboard')}</ListGroup.Item>
                            <ListGroup.Item id='listG'  action onClick ={logOut}>{t('logout')}</ListGroup.Item>
                            <ListGroup.Item id='listG'  action>******</ListGroup.Item>
                            <ListGroup.Item id='listG'  action>******</ListGroup.Item>
                            <ListGroup.Item id='listG'  action>******</ListGroup.Item>
                            <ListGroup.Item id='listG'  action>******</ListGroup.Item>
                            <ListGroup.Item id='listG'  action>******</ListGroup.Item>
                            <ListGroup.Item id='listG'  action>******</ListGroup.Item>
                            <ListGroup.Item id='listG'  action>******</ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col md={{span:10}}>
                        <GroupCards/>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
        <Footer/>
        </>
        :
        <>
        <Header />
        <CarouselComponent/>
        <GroupCards/>
        <Footer/>
        </>
    );
}

export default Mainpage

const Wrapper = styled.div`
   #leftSidebarCol{
    background: #f5f7fa;
   }
   #listG{
       border: 0 none !important;
       background: #f5f7fa;
       color: darkturquoise;
       font-size:18px;
       :hover{
         background-color: white;
       }
   }
   #listGroupLeft{
     padding-top: 30px;

   }
`;