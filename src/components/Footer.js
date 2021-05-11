import React from 'react';

import '../css/footer.css';
class Footer extends React.Component {
    render(){
        return (
            <footer class="footer-f">
                <div class="container-f">
                    <div class="row-f">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">shipping</a></li>
                                <li><a href="#">returns</a></li>
                                <li><a href="#">order status</a></li>
                                <li><a href="#">payment options</a></li>
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
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;