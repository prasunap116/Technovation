import React from 'react';
import "../styles/Footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'

const Footer = () => {
  return (
    <section>
        <div style={{'backgroundColor':'#2a2a2a'}}>
            <p style={{'marginBottom':'0', 'padding':'10px'}}> <a href='#'>Website Policies /</a> <a href='#'>Contact Us /</a> <a href='#'>Help /</a> <a href='#'>Web Information Manager</a> </p>
        </div>
        <section class="footer">
        <div class="copyRightsText">
            <p style={{'margin':'0'}}>Content Owned by Law Commission of India</p>
            <p>Developed and hosted by <a href='#' className='foot'>National Informatics Centre,</a><br/><a>Ministry of Electronics & Information Technology,</a> Government of India</p>
            <p>Last Updated: <b>May 14, 2024</b></p>
        </div>
        <Container>
            
            <Row style={{'width':'600px', 'display':'ruby'}}>
                <Col sm={4} style={{'marginBottom':'10px'}}><a href='https://s3waas.gov.in/'><Image src={logo1} fluid /></a></Col>
                <Col sm={4} style={{'marginBottom':'10px'}}><a href='http://www.digitalindia.gov.in/'><Image src={logo2} fluid /></a></Col>
                <Col sm={4} style={{'marginBottom':'10px'}}><a href='http://www.digitalindia.gov.in/'><Image src={logo3} fluid /></a></Col>
            </Row>
        </Container>
        </section>
        
    </section>
  )
}

export default Footer
