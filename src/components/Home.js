import React from 'react';
import '../styles/Home.css'

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import {Carousel,Row,Col,Container} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Tweet} from 'react-tweet';
import * as Icon from 'react-bootstrap-icons' ;
import Card from 'react-bootstrap/Card';


const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    
      <div>
        <header className='header'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src={img1} style={{'height':'400px',width:'100%'}}/>
              
            </Carousel.Item>
            <Carousel.Item>
              
                <img src={img2} style={{'height':'400px',width:'100%'}}/>
              
            </Carousel.Item>
            <Carousel.Item>
            <img src={img3} style={{'height':'400px',width:'100%'}}/>
                
            </Carousel.Item>
            </Carousel>
            
        </header>
        
        
        <main>
          
          <section className='mainpart' style={{'backgroundColor':'#f6f3ee'}}>

            <section style={{'width':'300px','textAlign':'left'}} className='about'>
              <h3>
                 About Department
              </h3>
              <p>
                Law Commission of India is a non-statutory body and is constituted by a notification of the Government of India, 
                Ministry of Law & Justice, Department of Legal Affairs with a definite terms of reference to carry out research in 
                the field of law and the Commission makes recommendations to the Government (in the form of Reports) as per its terms of reference. 
                The Law Commission has taken up various subjects on references made by Department of Legal Affairs, Supreme Court and High Courts 
                and submitted 277 reports.
                The Law Commission of India provides excellent thought provoking and vital review of the laws in India.
             </p>
            </section>
            <section  style={{"padding":'0px 10px'}}>
                  <Accordion  defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header >What's New</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href='#' style={{'color':'#545353'}}>Budget Information</a></li>
                        <li><a href='#'style={{'color':'#545353'}}>Annual Report 2020-21</a></li>
                        <li><a href='#'style={{'color':'#545353'}}>Annual Report 2021-22</a></li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                
                  
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Tenders</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
            </section>
            <section style={{'backgroundColor':'white','padding':'20px','height':'170px'}} className='twit'>
              
              <Icon.PersonFill size={100} style={{'color':'#808080c9','backgroundColor':'#e3dddd','border':'1px solid #e3dddd'}}/>
              <div>
              <Icon.Facebook size={20} />
              <Icon.TwitterX size={30} />
              </div>
            </section>
          </section>
           
          <section className='mainpart'>
              <section className='events'>
                <h3 style={{'color':'black','textAlign':'left'}}>
                  <Icon.Calendar2Check size={25}/>
                  Events
                </h3>
                <div style={{'display':'flex','padding':'10px','border':'1px solid grey'}}>
                  <img src={img4} style={{'width':'100px'}}/>
                  <div style={{'paddingLeft':'10px'}}>Sustainable Development In India : Evolution and Legal...</div>
                </div>
                <br />
                <div style={{'display':'flex','padding':'10px','border':'1px solid grey'}}>
                  <img src={img4} style={{'width':'100px'}}/>
                  <div style={{'paddingLeft':'10px'}}>Sustainable Development In India : Evolution and Legal...</div>
                </div>
              </section>
                
                <section style={{"padding":'0px 10px'}}>
                    <h3 style={{'color':'black','textAlign':'left'}}>
                    <Icon.Star size={25}/>
                      Important Links</h3>
                    <ul>
                        
                        <li className='links'>
                            <Icon.CaretRightFill size={20}/>
                            <a href="https://legislative.gov.in">Legislative Department</a>
                        </li>
                        <li className='links'>
                            <Icon.CaretRightFill size={20} />
                            <a href='https://doj.gov.in'>Department of Justice</a>
                        </li>
                        
                        <li className='links'>
                            <Icon.CaretRightFill size={20} />
                            <a href="https://main.sci.gov.in">Supreme court of india</a>
                        </li>
                    </ul>
                </section>
                <section>
                  <h3 style={{'color':'black','textAlign':'left'}}>Tweets</h3>
                  <Tweet id="1629307668568633344"></Tweet>
                </section>
            </section>
    </main>
    <footer className='footer1'>
      
      <section className='gallery'>
        <h3 style={{'color':'black','paddingBottom':'10px'}}>Photo Gallery</h3>
        <Carousel className='carousel1' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src={img4} style={{'height':'200px',width:'25%'}}/>
                <img src={img5} style={{'height':'200px',width:'25%'}}/>
                <img src={img6} style={{'height':'200px',width:'25%'}}/>
                <img src={img1} style={{'height':'200px',width:'25%'}}/>
           </Carousel.Item>
            <Carousel.Item>
            <img src={img5} style={{'height':'200px',width:'25%'}}/>
            <img src={img4} style={{'height':'200px',width:'25%'}}/>
            <img src={img6} style={{'height':'200px',width:'25%'}}/>
            <img src={img2} style={{'height':'200px',width:'25%'}}/>   
            </Carousel.Item>
          </Carousel>
          <div style={{'marginTop':'20px'}}>
            <Link to='/gallery' className='button'>View All</Link>
          </div>  
        </section>
    </footer>
    
    </div>
  )
}

export default Home
