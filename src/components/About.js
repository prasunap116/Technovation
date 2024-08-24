import React from 'react';
import hero from '../images/hero.png';

const About = () => {
  return (
    <div>
      <header>
        <img src={hero} style={{'width':'100%'}}/>
      </header>
      <main style={{'textAlign':'left','padding':'20px'}}>
        <h2 style={{'padding':'10px 0px'}}>Vision & Mission</h2>
        <h4 style={{'borderBottom':'1px solid','borderLeft':'5px solid',}}>Vision</h4>
        <p>Reforming the laws for maximizing justice in society and promoting good governance under the rule of law.</p>
        <h4 style={{'borderBottom':'1px solid','borderLeft':'5px solid'}}>Mission</h4>
        <p>The Terms of Reference of the Law Commission, inter alia, includes review/repeal of obsolete laws, 
            to examine the Laws which affect the poor and carry out post-audit for socio-economic legislations,
             to keep under review the system of judicial administration to ensure that it is responsive to the reasonable demands of 
             the times and in particular to secure, to examine the existing laws in the light of Directive Principles of State Policy
              and to suggest ways of improvement and reform and also to suggest such legislations as might be necessary to implement 
              the Directive Principles and to attain the objectives set out in the Preamble to the Constitution, Examine the existing 
              laws with a view for promoting gender equality and suggesting amendments thereto, to revise the Central Acts of general 
              importance so as to simplify them and to remove anomalies, ambiguities and inequities, to examine the impact of globalization
               on food security, 
            unemployment and recommend measures for the protection of the interests of the marginalized.</p>
      </main>
      
    </div>
  )
}

export default About
