import {Carousel} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useState} from 'react';
import styled from 'styled-components';
import image6 from '../pictures/carousel6.jpg'
import image8 from '../pictures/carousel8.jpg'
import image9 from '../pictures/carousel9.jpg'

function CarouselComponent() {


    
    return(
        <>
            <Test>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image6}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image8}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image9}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Test>
        </>
    );
}

export default CarouselComponent;

const Test = styled.div`
    img{
        height: 450px;
    }
    margin-bottom: 100px;
`;