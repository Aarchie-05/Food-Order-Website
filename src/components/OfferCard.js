import React from 'react';
import '../css/offerCard.css';

class OfferCard extends React.Component {
    render(){
        return (
            <div class="special-offer" style={{float:"left",marginLeft: "200px"}}>
                <img src="http://assets.suelo.pl/soup/img/photos/special-burger.jpg" alt="" class="special-offer-image" />
                <div class="special-offer-content">
                    <h2 class="mb-2">Free Burger</h2>
                    <h5 class="text-muted mb-5">Get free burger from orders higher that $40!</h5>
                    <ul class="list-check text-lg mb-0">
                        <li>Only on Tuesdays</li>
                        <li class="false">Order higher that $40</li>
                        <li>Unless one burger ordered</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default OfferCard;