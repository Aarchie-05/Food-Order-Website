import React from 'react';
import image from '../images/chef.jpg';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            hno: '',
            city: '',
            phone: '',
            email: ''
        };
    }
    nameHandle = (event) => {
        this.setState({name: event.target.value});
    }
    surnameHandle = (event) => {
        this.setState({surname: event.target.value});
    }
    hnoHandle = (event) => {
        this.setState({hno: event.target.value});
    }
    cityHandle = (event) => {
        this.setState({city: event.target.value});
    }
    phoneHandle = (event) => {
        this.setState({phone: event.target.value});
    }
    emailHandle = (event) => {
        this.setState({email: event.target.value});
    }
    render(props) {
        return(
            <div class="col-xl-8 col-lg-7 order-lg-first">
                <div class="bg-white p-4 p-md-5 mb-4">
                    <h4 class="border-bottom pb-4"><i class="fa fa-check-square-o" style={{color: "#ddae71"}}></i>&nbsp;&nbsp;Basic
                    informations</h4>
                    <div class="row mb-5">
                        <div class="form-group col-sm-6">
                            <label>Name:</label>
                            <input type="text" class="form-control" onChange={this.nameHandle} />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Surename:</label>
                            <input type="text" class="form-control" onChange={this.surnameHandle} />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Street and number:</label>
                            <input type="text" class="form-control" onChange={this.hnoHandle} />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>City:</label>
                            <input type="text" class="form-control" onChange={this.cityHandle} />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Phone number:</label>
                            <input type="text" class="form-control" onChange={this.phoneHandle} />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>E-mail address:</label>
                            <input type="email" class="form-control" onChange={this.emailHandle} />
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
                    <button class="btn btn-outline btn-lg mb-4" style={{backgroundColor: "#ddae71"}} data-toggle="modal" data-target="#Modal"><span>Order now!</span></button>
                </div>
                <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel" style={{marginLeft: "10rem"}}><b>Order Placed</b></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                           <div className="container">
                           <div className="two alt-two extra">
                                <h1>El Diablo
                                    <b><span style={{fontWeight:"900",color: "black"}}>Hasty And Tasty !</span></b>
                                </h1><br></br>
                                <p></p>
                            </div>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th>Name : </th>
                                        <td>{this.state.name} {this.state.surname}</td>
                                    </tr>
                                    <tr>
                                        <th>Address : </th>
                                        <td>{this.state.hno}, {this.state.city}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone Number : </th>
                                        <td>{this.state.phone}</td>
                                    </tr>
                                    <tr>
                                        <th>Email ID : </th>
                                        <td>{this.state.email}</td>
                                    </tr>
                                    <tr>
                                        <th>TOTAL : </th>
                                        <td>$ {this.props.total}</td>
                                    </tr>
                                </tbody>
                        </table>
                           </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;