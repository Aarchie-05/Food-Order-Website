import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


class Gallery extends React.Component {
    
    render(){
          
        return (
            <div style={{width:"100%"}}>
            <OwlCarousel className="owl-theme" loop responsiveClass autoplay>
                <div class="item" style={{margin:"2rem"}}>
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" height="300px" width="290px" style={{position: "relative"}} />
                <h1 style={{position: "absolute",bottom: "8px",right: "40px",color:"white",fontSize:"6rem"}}>Pizza</h1>
                </div>
                <div class="item" style={{margin:"2rem"}}>
                <img src="https://images.unsplash.com/photo-1597393353415-b3730f3719fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="300px" width="290px" style={{position: "relative"}} />
                <h1 style={{position: "absolute",bottom: "8px",right: "40px",color:"white",fontSize:"6rem"}}>Pasta</h1>
                </div>
                <div class="item" style={{margin:"2rem"}}>
                <img src="https://images.unsplash.com/photo-1516901121982-4ba280115a36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" height="300px" width="290px" style={{position: "relative"}} />
                <h1 style={{position: "absolute",bottom: "8px",right: "40px",color:"white",fontSize:"6rem"}}>Chinese</h1>
                </div>
                <div class="item" style={{margin:"2rem"}}>
                <img src="https://images.unsplash.com/photo-1567337710282-00832b415979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80" height="300px" width="290px" style={{position: "relative"}} />
                <h1 style={{position: "absolute",bottom: "8px",right: "40px",color:"white",fontSize:"6rem"}}>Indian</h1>
                </div>
                <div class="item" style={{margin:"2rem"}}>
                <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1125&q=80" height="300px" width="290px" style={{position: "relative"}} />
                <h1 style={{position: "absolute",bottom: "8px",right: "40px",color:"white",fontSize:"6rem"}}>Drinks</h1>
                </div>
                <div class="item" style={{margin:"2rem"}}>
                <img src="https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="300px" width="290px" style={{position: "relative"}} />
                <h1 style={{position: "absolute",bottom: "8px",right: "40px",color:"white",fontSize:"6rem"}}>Desserts</h1>
                </div>
            </OwlCarousel>
            </div>
        );
    }
}
export default Gallery;