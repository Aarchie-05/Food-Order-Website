import React from 'react';
import '../css/dishCard.css';
class DishCard extends React.Component {
    render(props){
        console.log(this.props);
        const {onAddToCart, product} = this.props;
        return (
            <div className="card-m">
                    <div className="card__image">
                        <img src={this.props.image}
                            alt="Salad" />
                    </div>
                    <div className="card__info">
                        <div className="car__info--title">
                            <h3>{this.props.name}</h3>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="card__info--price">
                            <br /><br />
                            <p>$ {this.props.price}</p>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="btn btn-outline-info mb-3" style={{borderRadius: "12px"}} onClick={() => onAddToCart(product)}>Add To Cart</button>
                    </div>
            </div>
        );
    }
}
export default DishCard;