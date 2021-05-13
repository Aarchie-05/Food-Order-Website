import React from 'react';

import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';
import Checkout from './Checkout';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    handleAddToCart = (product) => {
        console.log(product);
        const { products } = this.state;
        const index = products.length;
        products[index] = product;
        product.qty += 1;
        this.setState({
            products
        }, console.log(this.state.products));
    }
    handleIncreaseQunatity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        })
    }

    handleDecreaseQunatity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products
        })
    }
    handleDeleteProduct = (id) => {
        const { products } = this.state;

        const items = products.filter((item) => item.id !== id);

        this.setState({
            products: items
        })
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
        console.log(cartTotal)
        return cartTotal;
    }
    render(){
        const {products} = this.state;
        return(
            <Router>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => <Home />} exact />
                        <Route exact path="/cart" 
                               render={() => <Cart products={products}
                                                   onIncreaseQuantity={this.handleIncreaseQunatity}
                                                   onDecreaseQuantity={this.handleDecreaseQunatity}
                                                   onDeleteProduct={this.handleDeleteProduct}
                                                   count={this.getCartCount()}
                                                   total={this.getCartTotal()}
                                            />} 
                        exact />
                        <Route exact path="/menu" render={() => <Menu products={products}
                                                                      onIncreaseQuantity={this.handleIncreaseQunatity}
                                                                      onDecreaseQuantity={this.handleDecreaseQunatity}
                                                                      onDeleteProduct={this.handleDeleteProduct}
                                                                      onAddToCart={this.handleAddToCart}
                                                                      count={this.getCartCount()}
                                                                      total={this.getCartTotal()}
                                                                />} 
                        exact />
                        <Route exact path="/checkout" render={() => <Checkout products={products}
                                                                              onIncreaseQuantity={this.handleIncreaseQunatity}
                                                                              onDecreaseQuantity={this.handleDecreaseQunatity}
                                                                              onDeleteProduct={this.handleDeleteProduct}
                                                                              count={this.getCartCount()}
                                                                              total={this.getCartTotal()}
                                                                    />} 
                        exact />
                    </Switch>
                </BrowserRouter>
           </Router>
        );
    }
}
export default App;