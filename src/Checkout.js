import React from 'react';

import MenuNav from './components/MenuNav';
import FinalOrder from './components/FinalOrder';
import Form from './components/Form';
class Checkout extends React.Component {
    render(props) {
        const { products } = this.props;
        return(
            <>
               <MenuNav head="Checkout"  count={this.props.count} total={this.props.total} />
               <section className="section bg-light">
                   <div className="container">
                    <div className="container text-center">
                        <div className="two alt-two extra" style={{marginTop: "10px"}}>
                                <h1>El Diablo
                                    <b><span style={{fontWeight:"900",color:"black"}}>Hasty And Tasty !</span></b>
                                </h1><br></br>
                                <p></p>
                            </div>
                        </div>
                        <div className="row">
                            <FinalOrder products={products} count={this.props.count} total={this.props.total} />
                            <Form total={this.props.total} />
                        </div>
                   </div>
               </section>
            </>
        );
    }
}
export default Checkout;