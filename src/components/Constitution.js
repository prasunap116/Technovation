import React from 'react';
import logo4 from '../images/logo4.png'

const Constitution = () => {
  return (
    <div style={{'padding':'20px'}}>
      <header style={{'backgroundColor':'#d1edd1','lineHeight':'8px','border':'1px solid green','padding':'20px'}}>
        <p><b>Constitution of India</b> (2020)</p>
        <i>the Parliament of India</i>
      </header>
      <main>
        <img src={logo4}/>
        <h2>THE CONSTITUTION OF INDIA</h2>
        <i>[As on 9th September, 2020]</i>
        <h5>GOVERNMENT OF INDIA</h5>
        <h5>MINISTRY OF LAW AND JUSTICE</h5>
        <h5>LEGISLATIVE DEPARTMENT</h5><br/>
        <div style={{'textAlign':'left'}}>
            <h6>Article 3, Draft Constitution of India 1948</h6>
            <div>
            <p>Article 3 (Draft Article 3) was debated on 17 and 18 November 1948, and 13 October 1949. It empowered Parliament
                 to make law relating to the formation of new states and alteration of existing states.
             </p>

            <p>One member strongly believed that the proposal to alter an existing State must originate from the concerned State
                 Legislature and not the parliament. The State Legislature and the people residing in a State must be consulted and 
                 involved in this decision. He further argued that a ‘democratic regime’ must consult the stakeholders of a decision 
                 and not merely impose top-down orders. The Draft Article in its current form compromised federalism and granted 
                 unnecessary and excessive powers to the Centre.
            </p>
            <p>
            Not all were convinced by these arguments. Another member pointed out that this proposal 
            would stifle minority demands for separate states as it would be impossible to get a State 
            to support its own separation. Further, the Chairman of the Drafting Committee found this proposal 
            unnecessary in light of an amendment moved by him. Through the amendment, he sought to include a clause
             requiring the President to consult with the concerned states prior to passing any law under this Article.
     
            </p>           
            </div>
        </div>
      </main>
    </div>
  )
}

export default Constitution
