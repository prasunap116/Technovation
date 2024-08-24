import React from 'react';
import '../styles/Member.css';
import hero from '../images/hero.png'
import { Table } from 'react-bootstrap';

const Member = () => {
  return (
    <div>
        <header className='box'>
            <img src={hero} style={{'width':'100%'}}/>
        </header>
      <main>
            <Table striped bordered hover align='center'>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  
                  <th>Address</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="S.No">1</td>
                  <td data-label="Name">Shri Ram Balak Mishra</td>
                  <td data-label="Address">120/503 Shivaji Nagar, Kanpur</td>
                </tr>  
                <tr>
                  <td data-label="S.No">2</td>
                  <td data-label="Name">Shri P.N. Balla </td>
                  <td data-label="Address">308 Vikas Nagar, Kanpur</td>
                </tr> 
                <tr>
                  <td data-label="S.No">3</td>
                  <td data-label="Name">Shri O.N. Seth</td>
                  <td data-label="Address">	47/68 Hatiya, General Ganj, Kanpur</td>
                </tr> 
                <tr>
                  <td data-label="S.No">4</td>
                  <td data-label="Name">Shri Gopi Shyam Nigam</td>
                  <td data-label="Address">111/151 Harsh Nagar, Kanpur</td>
                </tr> 
                <tr>
                  <td data-label="S.No">5</td>
                  <td data-label="Name">Shri Ram Prasad Gupta</td>
                  <td data-label="Address">Shivala, Kanpur</td>
                </tr> 
                <tr>
                  <td data-label="S.No">6</td>
                  <td data-label="Name">Shri Ram Krishna Awasthi</td>
                  <td data-label="Address">Shivala, Kanpur</td>
                </tr> 
                <tr>
                  <td data-label="S.No">7</td>
                  <td data-label="Name">Shri Gopal Krishna Pandey</td>
                  <td data-label="Address">2/504 Azad Nagar, Kanpur</td>
                </tr> 
                <tr>
                  <td data-label="S.No">8</td>
                  <td data-label="Name">Shri Laxmi Narayan Awasthi</td>
                  <td data-label="Address">118/618 Kaushalpuri, Kanpur</td>
                </tr> 
                <tr>
                  <td data-label="S.No">9</td>
                  <td data-label="Name">Shri Laxmi Narayan Awasthi</td>
                  <td data-label="Address">3/183 Vishnupuri, Kanpur</td>
                </tr> 
                <tr>
                  <td data-label="S.No">10</td>
                  <td data-label="Name">Shri Ravindra Kumar Tripathi</td>
                  <td data-label="Address"> 72/10 Sutar Khana, Kanpur</td>
                </tr>
              
                
                
                
                
              </tbody>
            </Table>
          </main>
    </div>
  )
}

export default Member
