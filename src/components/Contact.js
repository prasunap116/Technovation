import React from 'react';
import { Form,Row,Button, FormControl, Table } from 'react-bootstrap';
import { useState } from 'react';
import '../styles/Contact.css'
//import { useNavigate } from 'react-router-dom';

const Contact = () => {
    //const[inputArr,setInputArr]=useState([])

    const [data,setData]=useState({
        mail:'',
        message:''

    });
    let{mail,message}=data
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        
    }

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        
        event.preventDefault();

        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        
        }
        else{
            console.log(data)
            alert('message successfully sent')
        
        }
        
        setValidated(true);
    
};
  return (
    <div className='contact'>
        <h4>Contact Us</h4>
      <main>

        <section className='contactInfo'>
            
            <div style={{'textAlign':'left','paddingBottom':'10px'}}>
                <b>Address:</b>Law Commission of India, 4th  Floor, B Wing, Lok Nayak Bhawan ,Khan Market, New Delhi-110 003<br/>

                <b>Email:</b>lci-dla[at]nic[dot]in<br/>

                <b>Tel.:</b> +91 – 011- 24654954, Fax:011 – 24654935<br/>

                <b>Website:</b> http://lawcommissionofindia.nic.in
            </div>
        </section>
        <section>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}  className='form' id='form'>
                
                <Row className="mb-3">
                    
                    <Form.Group  controlId="validationCustom02">
                        <Form.Label>Email</Form.Label>
                        <Form.Control  type="email" placeholder="Email" name='mail' value={mail} onChange={changeHandler}  required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                </Row>
                <Row className="mb-3">
                    
                    <Form.Group  controlId="validationCustom02">
                        <Form.Label>message</Form.Label>
                        <Form.Control  type="text" placeholder="message" name='message' value={message} onChange={changeHandler}  required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                </Row>
                
                <Button type="submit" >Send</Button>
            </Form> 
            
        </section>
    
        
      </main>
      
                
      
      
    </div>
  )
}

export default Contact
