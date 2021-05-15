import React from 'react';
import DishCard from './DishCard';
import {Pizzas,Soups,Desserts,Indian} from '../data/pizza';
class DishSection extends React.Component {

    render(props){
        const category = this.props.category;
        return (
            <>
            <section className="dishes">
                <div className="container">
                    <div className="row" style={{fontFamily: "'Raleway', sans-serif",borderBottom: "#bbc4c6 solid 1px"}}>
                        <p style={{fontSize: "40px"}}>&nbsp;<span className="dash" style={{color: "#bbc4c6"}}>∘⎯⎯</span>Pizzas<span
                                className="dash" style={{color: "#bbc4c6"}}>⎯⎯∘</span></p>
                                
                    </div>
                    <div className="row" style={{marginLeft: "60px"}}>
                        {Pizzas.map((dish) => (
                            <DishCard name={dish.name} price={dish.price} image={dish.img} description={dish.description} product={dish} onAddToCart={this.props.onAddToCart} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="dishes">
                <div className="container">
                    <div className="row" style={{fontFamily: "'Raleway', sans-serif",borderBottom: "#bbc4c6 solid 1px"}}>
                        <p style={{fontSize: "40px"}}>&nbsp;<span className="dash" style={{color: "#bbc4c6"}}>∘⎯⎯</span>Soups And Salads<span
                                className="dash" style={{color: "#bbc4c6"}}>⎯⎯∘</span></p>
                    </div>
                    <div className="row" style={{marginLeft: "60px"}}>
                        {Soups.map((dish) => (
                            <DishCard name={dish.name} price={dish.price} image={dish.img} description={dish.description} product={dish} onAddToCart={this.props.onAddToCart} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="dishes">
                <div className="container">
                    <div className="row" style={{fontFamily: "'Raleway', sans-serif",borderBottom: "#bbc4c6 solid 1px"}}>
                        <p style={{fontSize: "40px"}}>&nbsp;<span className="dash" style={{color: "#bbc4c6"}}>∘⎯⎯</span>Desserts<span
                                className="dash" style={{color: "#bbc4c6"}}>⎯⎯∘</span></p>
                    </div>
                    <div className="row" style={{marginLeft: "60px"}}>
                        {Desserts.map((dish) => (
                            <DishCard name={dish.name} price={dish.price} image={dish.img} description={dish.description} product={dish} onAddToCart={this.props.onAddToCart} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="dishes">
                <div className="container">
                    <div className="row" style={{fontFamily: "'Raleway', sans-serif",borderBottom: "#bbc4c6 solid 1px"}}>
                        <p style={{fontSize: "40px"}}>&nbsp;<span className="dash" style={{color: "#bbc4c6"}}>∘⎯⎯</span>Main Dishes<span
                                className="dash" style={{color: "#bbc4c6"}}>⎯⎯∘</span></p>
                    </div>
                    <div className="row" style={{marginLeft: "60px"}}>
                        {Indian.map((dish) => (
                            <DishCard name={dish.name} price={dish.price} image={dish.img} description={dish.description} product={dish} onAddToCart={this.props.onAddToCart} />
                        ))}
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default DishSection;
