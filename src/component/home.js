import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Footer from './footer';
import Footer2 from './Footer2';
import BackgroundVideo from './background_video/BackgroundVideo';

export default function Home() {
    return (
        <div className="App">

            <Container>
                <Row className="mt-5">
                    <Col className="text-center">
                        <h1 className="mb-4" style={{ color: '#31473A', fontWeight: 'bold', fontSize: '42px' }}>Welcome to Engineering Book Emporium</h1>
                        <p style={{ color: 'black' }}>Unleash the power of knowledge and innovation!</p>
                        {/* <p style={{ color: 'black' }}>Dive deep into the world of engineering with our extensive collection of books covering every discipline and specialty.</p> */}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} className="text-center">
                        <dotlottie-player
                            src="https://lottie.host/94bcc43d-33c0-48b9-8654-4a297a044a67/o9qVKqh037.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                            style={{ height: '250px' }}
                        ></dotlottie-player>
                        <p className="mt-4" style={{ color: 'black' }}>Explore our vast collection of engineering books across various disciplines.</p>
                        <div style={{ position: 'relative', zIndex: '1' }}>
                            <Button variant="dark">
                                <Link to="/books" style={{ color: 'white' }}>
                                    Browse Books
                                </Link>
                            </Button>
                        </div>

                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="text-center">
                        <h2 className="mb-4" style={{ color: '#31473A', fontWeight: 'bold' }}>Why Choose Us?</h2>
                        <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum justo vitae justo dictum, ut dictum risus pretium. Integer aliquam, dolor nec varius elementum, lorem ligula facilisis metus, vitae facilisis nunc ipsum non ipsum.</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} sm={6} className="text-center">
                        <h3 style={{ color: '#31473A' }}>Wide Range of Genres</h3>
                        <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum justo vitae justo dictum, ut dictum risus pretium.</p>
                    </Col>
                    <Col xs={12} sm={6} className="text-center">
                        <h3 style={{ color: '#31473A' }}>Quality Selection</h3>
                        <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum justo vitae justo dictum, ut dictum risus pretium.</p>
                    </Col>
                </Row>
            </Container>
            <div style={{ height: '500px' }}>
                <BackgroundVideo />
            </div>
            <Footer />
            <Footer2 />
        </div>
    );
}
