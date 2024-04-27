import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { Button, Card, Row, Col } from "react-bootstrap";

function Book_click() {
    const { _id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const author = searchParams.get('author');
    const price = searchParams.get('price');
    const description = searchParams.get('description');
    const available = searchParams.get('available');
    const download = searchParams.get('download');
    const image = searchParams.get('image');

    // Extracting file ID from the download link
    const fileId = download.match(/[-\w]{25,}/);
    const googleDrivePdfLink = fileId ? `https://drive.google.com/file/d/${fileId[0]}/preview` : ''; // Constructing Google Drive PDF link

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
            <h1 className="text-center mb-4">Book Details</h1>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title className="mb-4">{name}</Card.Title>
                            <Card.Img variant="top" src={image} className="mb-4" />
                            <Card.Text>Author: {author}</Card.Text>
                            <Card.Text>Price: ${price}</Card.Text>
                            <Card.Text>Description: {description}</Card.Text>
                            <Card.Text>Available: {available ? 'Yes' : 'No'}</Card.Text>
                            <div className="mt-4">
                                {price <= 0 ? (
                                    <Button variant="success" href={download} target="_blank" rel="noreferrer">
                                        Download
                                    </Button>
                                ) : (
                                    <Button variant="warning">
                                        <Link to="/payment" style={{ color: 'black', textDecoration: 'none' }}>Buy Now</Link>
                                    </Button>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="mt-4">
                <h2 className="text-center mb-4">PDF Viewer</h2>
                <Row className="justify-content-center">
                    <Col md={8}>
                        {googleDrivePdfLink && (
                            <iframe
                                src={googleDrivePdfLink}
                                style={{ width: '100%', height: '500px', border: 'none' }}
                                title="PDF Viewer"
                            />
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Book_click;
