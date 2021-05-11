import React from 'react';
import DishSection from './DishSection';
import Footer from './Footer';
class Dishes extends React.Component {
    render(props){
        return (
            <>
              <DishSection onAddToCart={this.props.onAddToCart} />
              <br></br><br></br>
              <Footer />
            </>
        );
    }
}
export default Dishes;