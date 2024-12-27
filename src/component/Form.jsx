"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserAdd = () => {
    return (
        <>
            <div style={{margin:"20px 0px 40px 500px"}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                        <Form.Control type="text" placeholder="Add Title" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3">
                        
                        <Form.Control type="text" placeholder="Add Body" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default UserAdd
