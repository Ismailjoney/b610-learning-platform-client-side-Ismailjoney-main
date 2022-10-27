import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDSetails = () => {
    const data = useLoaderData();
    const {header,img,name,details,admisionlastdate,coursefee,coursestart,Place,id} =data;
 
     
    return (
        
    );
};

export default CourseDSetails;