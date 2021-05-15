import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import OfferCard from './components/OfferCard';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Review from './components/Review';
import { findByLabelText } from '@testing-library/dom';
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
            </div>
            <div className="row" style={{display:'flex'}}>
            
                {/* <div style={{float:"right",marginRight: "0px" , width:"50%"}}><Review/></div> */}
            <div ><OfferCard /></div>
            
            </div>
            <Footer />
            </>
        );
    }
}
export default Home;