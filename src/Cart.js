import React from 'react';
import MenuNav from './components/MenuNav';
import CartList from './components/CartList';
class Cart extends React.Component {
    render(props) {
        const { products } = this.props;
        return (
            <>
              <MenuNav head="Your Cart" count={this.props.count} total={this.props.total} />
              <CartList 
                  products={products}
                  onIncreaseQuantity={this.props.onIncreaseQuantity}
                  onDecreaseQuantity={this.props.onDecreaseQuantity}
                  onDeleteProduct={this.props.onDeleteProduct}
              />
            </>
        )
    }
}
export default Cart;