import React from 'react';
import {Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
// import { GoRepo, GoGist } from 'react-icons/go';
// import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { RiBankLine,RiMoneyDollarCircleLine } from 'react-icons/ri';
import { GrSchedules } from 'react-icons/gr';
import { GiWorld } from 'react-icons/gi';

const FourBadges = ({data}) => {

  const items = [
    {
      id: 1,
      icon: <RiBankLine className ='icon' />,
      label: 'institution',
      value: data.institution,
      color: 'pink',
    },
    
    {
      id: 2,
      icon: <GrSchedules className ='icon' />,
      label: 'last refresh',
      value: data.lastRefresh,
      color: 'green',
    },
    {
      id: 3,
      icon: <RiMoneyDollarCircleLine className ='icon' />,
      label: 'total credit',
      value: '$'+data.totalCredit,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GiWorld className ='icon' />,
      label: 'country',
      value: data.userCountry,
      color: 'yellow',
    }

  ];
  return (
    <section className ='section'>
        <Wrapper className ='section-center'>
        <Row sm={2} className="g-4, my-5" >
        {items.map((item) => 
                // return 
            <Col lg={{span:3,offset:0.5}}style={{marginTop:'5px'}}>
            {/* <Col sm={{span:5,offset:1}} md={{span:3}} xs={{span:10}}> */}
                    <Item key= {item.id} {...item}></Item>
            </Col>
        )}
        </Row>
      </Wrapper>
    </section>
  );
};

const Item = ({icon,label,value,color}) => {
  return (
    <article className ='item'>
      <span className ={color}>{icon}</span>
      <div>
        <h4>{value}</h4>
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  } */
  .item {
    border-radius: 20px;
    padding: 1rem 2rem;
    background: #fff;
    /* background: aliceblue; */
    border-color: grey solid 1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /* background: lightgrey; */
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
      color: midnightblue;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
      color: grey;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: hsl(186, 100%, 94%);
      color: hsl(185, 62%, 45%);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default FourBadges;
