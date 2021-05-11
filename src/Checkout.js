import React from 'react';

import MenuNav from './components/MenuNav';
import FinalOrder from './components/FinalOrder';
import Form from './components/Form';
class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Fried Rice",
                    description: "Carrots, Capsicum",
                    price: 4.50,
                    qty: 1,
                    img: 'https://images.pexels.com/photos/4913349/pexels-photo-4913349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                },
                {
                    id: 2,
                    name: "Mango Smoothie",
                    description: "Nut milk, Ice cubes",
                    price: 14,
                    qty: 3,
                    img: 'https://images.pexels.com/photos/2103962/pexels-photo-2103962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                },
                {
                    id: 3,
                    name: "Italian Pizza",
                    description: "Mozarella & Parmagiano",
                    price: 4.50,
                    qty: 5,
                    img: 'https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                }
            ]
        }
    }
    getCartCount = () => {
        const { products } = this.state;

        let count = 0;
        products.forEach((product) => {
            count += product.qty;
        })
        return count;
    }
    getCartTotal = () => {
        const { products } = this.state;

        let cartTotal = 0;
        products.forEach((product) => {
            cartTotal = cartTotal + product.qty * product.price;
        })
        return cartTotal;
    }
    render() {
        const { products } = this.state;
        return(
            <>
               <MenuNav head="Checkout"  count={this.getCartCount()} total={this.getCartTotal()} />
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
                            <FinalOrder products={products} count={this.getCartCount()} total={this.getCartTotal()} />
                            <Form />
                        </div>
                   </div>
               </section>
            </>
        );
    }
}
export default Checkout;