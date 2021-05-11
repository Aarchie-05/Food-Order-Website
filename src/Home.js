import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import OfferCard from './components/OfferCard';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
class Home extends React.Component {
    render(props){
        console.log(this.props.products);
        return (
            <>
            <Navbar />
            <div className="row" style={{width:"100%"}}>
            <About />
            </div>
            <div className="row">
            <Gallery />
            </div>
            <div className="row">
            <OfferCard />
            </div>
            <Footer />
            </>
        );
    }
}
export default Home;