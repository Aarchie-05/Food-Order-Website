import React from 'react';

const FinalOrderItem = (props) => {
    const { price, name, qty} = props.product;
    const { 
        product,  
        onDeleteProduct 
        } = props;
    return (
        <li class="list-group-item">
            <div class="d-flex">
                <div class="mr-auto p-2">
                    <h5>{name}</h5>
                    <span>Qty: {qty}</span>
                </div>
                <div class="p-2">
                    <span>$ {price*qty}</span>
                </div>
                <div class="p-2">
                    <a href="" style={{color: "black"}}><span><i class="fa fa-check"></i></span></a>
                </div>
            </div>
        </li>
    );
}
export default FinalOrderItem;