import React from 'react';
import MenuNav from './components/MenuNav';
import Dishes from './components/Dishes';
class Menu extends React.Component {
    render(props){
        const { products } = this.props;
        return (
            <>
            <MenuNav head="Menu List" count={this.props.count} total={this.props.total} />
            <Dishes onAddToCart={this.props.onAddToCart} />
            </>
        );
    }
}
export default Menu;