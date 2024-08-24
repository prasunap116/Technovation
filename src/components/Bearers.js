import React from 'react';
import { Table } from 'react-bootstrap';
import '../styles/Beares.css'
import person1 from '../images/person1.png';
import person2 from '../images/person2.png';
import hero from '../images/hero.png'


const Bearers = () => {
  return (
    
        <div>
          <header>
            <img src={hero} style={{'width':'100%'}}/>
          </header>
          <main>
            <Table striped bordered hover align='center'>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name Of Member</th>
                  <th>Disignation</th>
                  <th>Father's Name</th>
                  <th>Address</th>
                  <th>Contact No.</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="S.No">1</td>
                  <td data-label="Name Of Member">PRAMOD KUMAR DWIVEDI</td>
                  <td data-label="Disignation">President</td>
                  <td data-label="Father's Name">SRI KASHI PRASAD DWIVEDI</td>
                  <td data-label="Address">87/338 acharya nagar kanpur</td>
                  <td data-label="Contact No.">9935013853</td>
                  <td data-label="Photo"><img src={person1} alt='photo1'/></td>
                </tr>
                <tr>
                  <td data-label="S.No">2</td>
                  <td data-label="Name Of Member">SANJEEV KUMAR DUBEY</td>
                  <td data-label="Disignation">Sr. Vice- president</td>
                  <td data-label="Father's Name">SHRI SHIV NATH PRASAD DUBY</td>
                  <td data-label="Address">130/90 BAGAHI T.P.NAGAR KANPUR</td>
                  <td data-label="Contact No.">9839131903</td>
                  <td data-label="Photo"><img src={person2} alt='photo1'/></td>
                </tr>
                <tr>
                  <td data-label="S.No">3</td>
                  <td data-label="Name Of Member">SANJEEV KANAUJIYA</td>
                  <td data-label="Disignation">Vice- president</td>
                  <td data-label="Father's Name">S.K. KANAUJIYA</td>
                  <td data-label="Address">C 37 NEW CIVIL LINES KANPUR</td>
                  <td data-label="Contact No.">9839854455</td>
                  <td data-label="Photo"><img src={person2} alt='photo1'/></td>
                </tr>
              
                <tr>
                  <td data-label="S.No">4</td>
                  <td data-label="Name Of Member">ADITYA KUMAR SINGH</td>
                  <td data-label="Disignation">General Secretary</td>
                  <td data-label="Father's Name">SHRI JITENDRA MOHAN SINGH</td>
                  <td data-label="Address">31 A VIKAS NAGAR KANPUR</td>
                  <td data-label="Contact No.">9935206464</td>
                  <td data-label="Photo"><img src={person2} alt='photo1'/></td>
                </tr>
                <tr>
                  <td data-label="S.No">5</td>
                  <td data-label="Name Of Member">SHISHIR KUMAR PANDEY</td>
                  <td data-label="Disignation">Secretary</td>
                  <td data-label="Father's Name">PRAMOD KUMAR PANDEY</td>
                  <td data-label="Address">118/398 KAUSHALPURI KANPUR</td>
                  <td data-label="Contact No.">9936628125</td>
                  <td data-label="Photo"><img src={person2} alt='photo1'/></td>
                </tr>
                <tr>
                  <td data-label="S.No">6</td>
                  <td data-label="Name Of Member">NAGESH CHANDRA TRIPATHI</td>
                  <td data-label="Disignation">Treasurar</td>
                  <td data-label="Father's Name">SHRI KRISHN CHANDRA TRIPATHI</td>
                  <td data-label="Address">88/2 N.L.C BABUPURWA KIDWAINAGAR KANPUR</td>
                  <td data-label="Contact No.">9935206464</td>
                  <td data-label="Photo"><img src={person2} alt='photo1'/></td>
                </tr>
                
                
                
              </tbody>
            </Table>
          </main>
        </div>
    
  )
}

export default Bearers
