import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import aboutImg from '../images/gym2.jpg';
// import bg from '../images/bg.jpg'
import './About.css';

const About = () => {
    return (
       
        <section className="about-container mt-5 ">
            <div>
        <h1 className="text-center">ABOUT OUR STORICS & PHILOSOPHY </h1>
        </div>
        <Container fluid>
                <Row className="align-items-center justify-content-center bannerbg">
                    <Col md={6}>
                        <Fade left duration={2000} distance="40px">
                            <Image src={aboutImg} fluid />
                        </Fade>
                    </Col>
                    <Col md={4} className="p-md-5 mt-md-0 mt-4">
                        <Fade right duration={2000} distance="40px">
                            <p className="text-white">ABOUT OUR PHILOSOPHY </p>
                            <h3 className="text-white" >We’re fitness club  & Personal Training</h3>
                            <p className="text-white my-4 pr-md-5">as summarised in our philosophy and mission statement we believe that the potential to achieve any desired health and fitness goal lies within each and every one. 💪

                            <br/>
                            the scope of practice for a personal trainer has a primary focus on prevention and involves enhancing components of health and fitness for the general, healthy population or those cleared for exercise.</p>
                            <Button
                                className="btn-main"
                                href="#pricing">
                                Learn More
                            </Button>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;