import React from 'react';

import '../css/review.css';
class Review extends React.Component {
    render(){
        return (
            <>
            <div style={{float:"right",marginRight: "0px" , width:"50%"}}>
               <figure class="review">
                    <blockquote class="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
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
                </div>
            </>
        );
    }
}
export default Review;