import React from 'react';
import '../css/dishCard.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
const CartList = (props) => {
    const { products } = props;
    return (
        <>
            <div className="container">
                <div className="container text-center">
                    <div className="two alt-two extra" style={{marginTop: "10px"}}>
                        <h1>El Diablo
                            <b><span style={{fontWeight:"900",color:"black"}}>Hasty And Tasty !</span></b>
                        </h1><br></br>
                        <p></p>
                    </div>
                </div>
                <ul className="list-group">
                    {products.map((product) => {
                        return (
                            <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDeleteProduct={props.onDeleteProduct}
                            onAddToCart={props.onAddToCart}
                            />)
                    })}
                </ul>
                <div className="container mt-4 text-center mb-4">
                    <Link to="/checkout" className="btn btn-outline-secondary btn-lg">Checkout</Link>
                </div>
            </div>
        </>
    )
}

export default CartList;