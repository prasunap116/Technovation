import React from 'react';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import '../styles/Gallery.css'


const Gallery = () => {
  return (
    <section>
        <Row style={{'display':'flex','justifyContent':'center'}}>
            <Card name='im1' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                        Blood Organ
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                    
                    <Card.Text>
                    Hindi Pakhwada 2023
                    </Card.Text>
                    
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                    
                    <Card.Text>
                    Sustainable Development In : India Evolution and Legal Perspective
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                    
                    <Card.Text>
                    Sustainable Development In India : Evolution and Legal Perspective
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                    
                    <Card.Text>
                    Appointment of Chairperson and Members
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                    
                    <Card.Text>
                    National Law Day.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Row>
    </section>
  )
}

export default Gallery
