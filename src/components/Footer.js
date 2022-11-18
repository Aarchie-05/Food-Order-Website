import React from 'react';

import '../css/footer.css';
class Footer extends React.Component {
    render(){
        return (
            <footer class="footer-f">
                <div class="container-f">
                    <div class="row-f">
                         <div class="footer-col">
                            <h4>Our Team</h4>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/aarchie-girdhar-0038651a6/">Gauri Arora</a></li>
//                                 <li><a href="https://www.linkedin.com/in/rashmi-3209121a7/">Rashmi</a></li>
//                                 <li><a href="https://www.linkedin.com/in/divyanshi-bajpai-a6114a13a/">Divyanshi Bajpai</a></li>
//                                 <li><a href="https://www.linkedin.com/in/sofia-singla-943ab8184/">Sofia Singla</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">order status</a></li>
                                <li><a href="#">payment options</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Order Now</h4>
                            <ul>
                                <li><a href="#">Pizzas</a></li>
                                <li><a href="#">Soups & Salads</a></li>
                                <li><a href="#">Indian</a></li>
                                <li><a href="#">Dessert</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
