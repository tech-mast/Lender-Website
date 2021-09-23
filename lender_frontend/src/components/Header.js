import {Navbar, Nav, NavDropdown,Container} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import { MdGTranslate } from 'react-icons/md';
import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';


function Header() {
    // const[languageSelect, SetLanguageSelect] = useState(languageSelect? languageSelect:"en")
    let user = JSON.parse(localStorage.getItem('user-info'));
    const history = useHistory();
    function logOut(){
        localStorage.clear();
        history.push('/login')
    }

    const {i18n} = useTranslation();
    const changeLanguage = (language) =>{
        i18n.changeLanguage(language);
        localStorage.setItem("lang",language);
    };

    useEffect(()=>{
        localStorage.getItem('lang')?
        i18n.changeLanguage(localStorage.getItem('lang')) : i18n.changeLanguage("en");
    },[])

    const {t} = useTranslation();

    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand href="/" className="ml-4" style={{color: 'darkturquoise', fontSize:'25px', fontWeight:'bold', marginLeft:'50px'}}>Lender</Navbar.Brand>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navbar_wrapper ml-4">
                        {
                            (!localStorage.getItem('user-info')) &&
                            <>
                            <Nav.Link href= "https://static.cabinpanda.com/f/67970c244e43002e7c9b945f1ca7547c">{t("onlineform")}</Nav.Link>
                            <Nav.Link href= "/login">{t("login")}</Nav.Link>
                            </>                   
                        
                        }

                    </Nav>
                    <Nav>
                        <NavDropdown title={<MdGTranslate size={28}/>} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick = {() => changeLanguage("en")}>English</NavDropdown.Item>
                            <NavDropdown.Item onClick ={() => changeLanguage("fr")}>Française</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {localStorage.getItem('user-info')?
                            user.isAdmin === '1' ?
                            <Nav>
                            <NavDropdown title={user && user.email} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/admin">{t("adminInterface")}</NavDropdown.Item>
                                <NavDropdown.Item onClick ={logOut}>{t("logout")}</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            :
                            <Nav>
                                <NavDropdown title={user && user.email} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/profile">{t("account")}</NavDropdown.Item>
                                    <NavDropdown.Item href="/dashboard">{t("dashboard")}</NavDropdown.Item>
                                    <NavDropdown.Item onClick ={logOut}>{t("logout")}</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        :null
                    }
                    {/* </Nav> */}
                    {/* </Test> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>  
        </>
    );
}

export default Header;

const Test = styled.div`
    margin-left: 100px;

`;
