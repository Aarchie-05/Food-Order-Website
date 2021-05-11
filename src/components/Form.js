import React from 'react';

class Form extends React.Component {
    render() {
        return(
            <div class="col-xl-8 col-lg-7 order-lg-first">
                <div class="bg-white p-4 p-md-5 mb-4">
                    <h4 class="border-bottom pb-4"><i class="fa fa-check-square-o" style={{color: "#ddae71"}}></i>&nbsp;&nbsp;Basic
                    informations</h4>
                    <div class="row mb-5">
                        <div class="form-group col-sm-6">
                            <label>Name:</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Surename:</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Street and number:</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>City:</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Phone number:</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>E-mail address:</label>
                            <input type="email" class="form-control" />
                        </div>
                    </div>

                    <h4 class="border-bottom pb-4"><i class="fa fa-cart-arrow-down"
                        style={{color: "#ddae71"}}></i>&nbsp;&nbsp;Delivery</h4>
                    <div class="row mb-5">
                        <div class="form-group col-sm-6">
                            <label>Delivery time:</label>
                            <div class="select-container">
                                <select class="form-control">
                                    <option>As fast as possible</option>
                                    <option>In one hour</option>
                                    <option>In two hours</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <h4 class="border-bottom pb-4"><i class="fa fa-credit-card" style={{color: "#ddae71"}}></i>&nbsp;&nbsp;Payment
                    </h4>
                    <div class="row text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="form-check form-check-inline col-sm-2">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                            value="option1" />
                            <label class="form-check-label" for="inlineRadio1">Paypal</label>
                        </div>
                        <div class="form-check form-check-inline col-sm-2">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Card</label>
                        </div>
                        <div class="form-check form-check-inline col-sm-2">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                            value="option3" />
                            <label class="form-check-label" for="inlineRadio3">Cash</label>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button class="btn btn-outline btn-lg mb-4" style={{backgroundColor: "#ddae71"}}><span>Order now!</span></button>
                </div>
            </div>
        );
    }
}

export default Form;