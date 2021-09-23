import React from 'react';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import {FaRegAddressCard} from 'react-icons/fa'
import { Col,Row,Button } from 'react-bootstrap';


const Card = ({data}) => {

    return (
        <Wrapper>
          <header>      
            <div>
              <Row className="g-4" style={{height:'50px', marginTop:'5px'}}>
                <Col xs={{span:2,offset:1}}>
                  <div className='iconBackground'>
                  <FaRegAddressCard style={{color:'midnightblue', fontSize:'40px',marginTop:'10px'}}/>
                  </div>
                </Col>
                <Col xs={{span:3}}>
                  <h4 style={{color:'darkturquoise'}}>{data.userName}</h4>
                  <p style={{color:'grey'}}>{data.userEmail}</p>
                </Col>
              </Row>

            </div>
          </header>
          <div className ='links'>
            <p>
              <MdBusiness />{data.userAddress}
            </p>
            <p>
              <MdLocationOn />{data.userCountry}
            </p>
            <a ><MdLink />{data.userEmail}</a>
          </div>
        </Wrapper>
      );
};


const Wrapper = styled.article`
  background: #fff;
  padding: 1.5rem 2rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  position: relative;
  height: 300px;

  .iconBackground{
    background: #e6e6ff;
    width: 60px;
    height: 60px !important;
    place-items: center;
    border-radius: 50% !important;
  }

  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    margin-top: 100px;
    margin-left:50px;
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: hsl(185, 62%, 45%);
      transition: all 0.3s linear;
      svg {
        color: hsl(210, 22%, 49%);
      }
      &:hover {
        color: hsl(185, 81%, 29%);
      }
    }
  }
`;

export default Card;
