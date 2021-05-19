import React from 'react';

import '../css/review.css';
class Review extends React.Component {
    render(){
        return (
            <>
               <figure className="review mt-4 mb-4">
                    <blockquote class="review__text">
                    The food is excellent, generous portions and great prices. The service was fast and friendly. I highly recommended it
                    </blockquote>
                    <figcaption class="review__person">
                    <img src="http://alexsommers.com/codepen/user-6.jpg" alt="User 1" class="review__photo" />
                    <div class="review__info">
                        <p class="review__info--name">Nikki Smith</p>
                        <p class="review__info--date"> April 26, 2020</p>
                    </div>
                    <div class="review__rating">7.8</div>
                    </figcaption>
                </figure>
            </>
        );
    }
}
export default Review;