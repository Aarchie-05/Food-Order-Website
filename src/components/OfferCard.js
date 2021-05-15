import React from 'react';
import '../css/offerCard.css';

class OfferCard extends React.Component {
    render(){
        return (
            <div style={{display:"flex"}}>
            <div class="special-offer" style={{float:"left",marginLeft: "70px",width:"50%"}}>
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
            <div style={{ marginLeft:"-20rem", width:"25%" }}>
               <figure class="review">
                    <blockquote class="review__text" style={{color:"grey"}}>
                   <p style={{marginLeft:"50px"}}> The food is excellent, generous portions and great prices. The service was fast and friendly. I highly recommended it</p></blockquote>
                    <figcaption class="review__person">
                    <img src="http://alexsommers.com/codepen/user-6.jpg" alt="User 1" class="review__photo" />
                    <div class="review__info">
                        <p class="review__info--name">Nikki Smith</p>
                        <p class="review__info--date"> April 26, 2020</p>
                    </div>
                    <div class="review__rating">7.8</div>
                    </figcaption>
                </figure>
                </div>
                </div>
                
        )
    }
}
export default OfferCard;