import React from 'react';

import '../css/navbar.css';
import '../css/video.css';
import video_1 from '../images/video.mp4';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            myNav: {
                height: '0%'
            },
            text: {
                opacity: '1'
            }
        }
    }
    openNav = () => {
        this.setState((prevState) => {
            return {
                myNav: {
                    height: '100%'
                },
                text: {
                    opacity: '0'
                }
            }
        })
    }
    closeNav = () => {
        this.setState((prevState) => {
            return {
                myNav: {
                    height: '0%'
                },
                text: {
                    opacity: '1'
                }
            }
        })
    }

    render(){
        return (
          <>
            <div id="myNav" className="overlay" style={ this.state.myNav }>
                <a href="" className="closebtn" onClick={this.closeNav} style={{cursor: 'pointer'}}>&times;</a>
                <div className="overlay-content">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                </div>
            <span onClick={this.openNav} className="open">&#9776;</span>
            <header>
                <div className="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={ video_1 } type="video/mp4" />
                </video>
                <div className="container h-100" style={ this.state.text }>
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3 heading">Welcome to El Diablo</h1>
                            <p className="lead mb-0 tagline">Hasty And Tasty!</p>
                            <div className="psoload">
                                <div className="straight"></div>
                                <div className="curve"></div>
                                <div className="center"></div>
                                <div className="inner"></div>
                            </div>
                            <button className="btn btn-danger head-btn" onClick={ this.openNav }>Explore...</button>&nbsp;&nbsp;<Link to="/menu"  className="btn btn-info head-btn">Order Now..</Link>
                        </div>
                    </div>
                </div>
            </header>
          </>
        );
    }
}
export default Navbar;