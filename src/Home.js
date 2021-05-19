import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import OfferCard from './components/OfferCard';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Review from './components/Review';
class Home extends React.Component {
    render(props){
        return (
            <>
            <Navbar />
            <div className="row" style={{width:"100%"}}>
            <About />
            </div>
            <div className="row">
            <Gallery />
            <div className="container text-center">
                <div className="d-flex justify-content-center mt-4 p-4 mb-4">
                   <div>
                   <center><b><h2>About Us<hr/></h2></b></center>
                        <b><p class="mt-4">El Diablo is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market.
                        With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.</p>
                        <p>For those with pure food indulgence in mind, come next door and sate your desires with our ever changing 
                        internationally and seasonally inspired small plates. We love food, lots of different food, just like you.</p></b><br></br><br></br><br></br>
                    <center><h1 style={{fontSize: "45px"}}>Special Offers</h1></center>
                   </div>
                </div>
            </div>
            </div>
            <div className="row" style={{display:'flex'}}>
            <div className="row mt-4"><OfferCard /><br></br><br></br></div>
            <div className="row"><Review /></div>
            </div>
            <Footer />
            </>
        );
    }
}
export default Home;