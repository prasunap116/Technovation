import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import  '../styles/Payment.css'


const Payment = () => {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className='payment'>
        <h2 style={{'padding':'10px'}}>Payment Section</h2>
       <Form noValidate validated={validated} onSubmit={handleSubmit}  className='form'>
            <Row className="mb-3">
                <Form.Group  controlId="validationCustom01" >
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Full name"
                    
                />
                <Form.Control.Feedback type="invalid">
                        Please provide a valid full name.
                    </Form.Control.Feedback>
                
                
                </Form.Group>
                
            </Row>
            <Row className="mb-3">
                
                <Form.Group  controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group   controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group  controlId="validationCustom01">
                    <Form.Label>Card Numer</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="card number"
                        
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid card number.
                    </Form.Control.Feedback>
                    
                    
                </Form.Group>
                
            </Row>
            <Row className="mb-3">
                
                <Form.Group  controlId="validationCustom04" >
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="text" placeholder="expiry date" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid expiry date.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group  controlId="validationCustom05" >
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" placeholder="cvv" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid cvv.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group  controlId="validationCustom05" >
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" placeholder="amount" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid amount.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
      
            <Button type="submit">Pay Now</Button>
        </Form>
    </div>
  )
}

export default Payment
