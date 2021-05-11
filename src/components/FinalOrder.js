import React from 'react';

import FinalOrderItem from '../components/FinalOrderItem';
const FinalOrder = (props) => {
    const { products, count, total } = props;
    return (
        <div class="col-xl-4 col-lg-5">
            <div class="cart-details shadow bg-white stick-to-content mb-4">
                <div class="bg-dark dark p-4">
                    <h5 class="mb-0" style={{color: "white"}}>You order</h5>
                </div>
                <ul class="list-group">
                    {products.map((product) => {
                        return (
                            <FinalOrderItem 
                                product={product} 
                                key={product.id} 
                                onDeleteProduct={props.onDeleteProduct}
                            />)
                    })}
                    <li className="list-group-item">
                        <div className="d-flex justify-content-center">
                            <h3>TOTAL: $ {total}</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FinalOrder;