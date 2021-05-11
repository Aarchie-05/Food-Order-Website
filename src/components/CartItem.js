import React from 'react';

const cartItem = (props) => {
    const { price, name, qty, description, img } = props.product;
    const { 
        product, 
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct 
        } = props;

    return(
        <>
            <li className="list-group-item">
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h4>{name}&nbsp;&nbsp;</h4>
                        <p><span className="badge badge-pill badge-danger" style={{fontSize:"13px"}}>$ {price}</span>&nbsp;{description}</p>
                    </div>
                    <div className="btn-group mb-3 mt-3 actions p-2">
                        <button className="btn btn-outline-info" type="button" id="button-addon1" onClick={() => onDecreaseQuantity(product)}><i className="fa fa-minus"></i></button>
                        <div className="value"><span>{qty}</span></div>
                        <button className="btn btn-outline-info" type="button" id="button-addon1" onClick={() => onIncreaseQuantity(product)}><i className="fa fa-plus"></i></button>
                    </div>
                    <div className="p-4">
                            <a href="#" style={{color: "black"}} onClick={() => onDeleteProduct(product.id)}><i className="fa fa-remove fa-2x"></i></a>
                    </div>
                </div>
            </li>
        </>
    );
}

export default cartItem;