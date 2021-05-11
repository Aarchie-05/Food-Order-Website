import React from 'react';
import MenuNav from './components/MenuNav';
import CartList from './components/CartList';
class Cart extends React.Component {
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
    addToCart = (product) =>{
        console.log('jvngxggvhjrbgjrdbh');
        product.qty += 1;
        this.setState(prevState=>{
            return {products: prevState.products.push(product)}
        });
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
        return cartTotal;
    }
    render() {
        const { products } = this.state;
        return (
            <>
              <MenuNav head="Your Cart" count={this.getCartCount()} total={this.getCartTotal()} />
              <CartList 
                  products={products}
                  onIncreaseQuantity={this.handleIncreaseQunatity}
                  onDecreaseQuantity={this.handleDecreaseQunatity}
                  onDeleteProduct={this.handleDeleteProduct}
                  onAddToCart={this.addToCart}
              />
            </>
        )
    }
}
export default Cart;