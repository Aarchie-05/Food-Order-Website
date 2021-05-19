import React from 'react';

import '../css/orderCard.css';
import Review from '../components/Review';

class About extends React.Component {
    render(){
        return (
            <>
               <div className="row" id="about">
                    <div class="two alt-two extra" style={{marginLeft: "660px"}}> 
                        <h1>El Diablo
                            <b><span style={{fontWeight:"900",color: "black"}}>Hasty And Tasty !</span></b>
                        </h1><br></br>
                        <p></p>
                    </div>
               </div>
               <br/>
               <br/>
            </>
        );
    }
}
export default About;