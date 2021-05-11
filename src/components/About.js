import React from 'react';

import '../css/orderCard.css';
import Review from '../components/Review';

class About extends React.Component {
    render(){
        return (
            <>
               <div className="row">
                <div class="two alt-two extra" style={{marginLeft: "660px"}}> 
                        <h1>El Diablo
                            <b><span style={{fontWeight:"900",color: "black"}}>Hasty And Tasty !</span></b>
                        </h1><br></br>
                        <p></p>
                </div>
               </div>
               <br/>
               <br/>
               {/* <div className="row mt-4" style={{width:"100%"}}>
               <div className="col-sm-1"></div>
               <div class="blog-item col-sm-6">
                    <a href="#">
                        <div class="icon">
                            <img src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
                        </div>
                        <div class="content">
                            <div class="title">Pizzaria  <span class="blog-date">Yumm</span></div>
                            <div class="rounded"></div>

                            <p>
                                Decide toppings by your own and order your Yummy Pizza ..
                            </p>
                        </div>

                        <div class="item-arrow">
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </a>

                </div>
                </div>
                
                <div className="row" style={{width:"100%"}}>
                <div className="col-sm-6"></div>
                <div class="blog-item col-sm-6">
                    <a href="#">
                        <div class="icon">
                            <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                        </div>
                        <div class="content">
                            <div class="title">Other Delicacy  <span class="blog-date">Enjoy</span></div>
                            <div class="rounded"></div>

                            <p>
                                Order chinese, desert, drinks and much more ..
                            </p>
                        </div>

                        <div class="item-arrow">
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </a>

                </div>
                </div> */}
                <Review />
            </>
        );
    }
}
export default About;