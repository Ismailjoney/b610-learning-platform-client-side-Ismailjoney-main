import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CheckOut = () => {
    const data = useLoaderData();
    const { name, header, img, details } = data;
    
    return (
        <div className='mb-5 mt-5'>
            <h2 className='text-center mb-5 mt-5'>{header}</h2>

            <Card style={{ width: '80%',margin:"0 auto" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                
                 
            </Card>
        </div>
    );
};

export default CheckOut;