import React from 'react';
import '../css/menuNav.css';
import { Link } from 'react-router-dom';
class MenuNav extends React.Component {
    render(props){
        const {head,count,total} = this.props;
        return (
            <>
                <div className="main">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/menu">Menu</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link text-dark">
                                        <i className="fa" style={{fontSize:"27px",color:"#bbc4c6"}}>&#xf07a;</i>
                                        <span className='badge badge-warning' id='lblCartCount'> {count} </span><span
                                            style={{fontSize: "24px",color:"#121518a6"}}> $ {total}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="jumbotron">
                            <div className="container text-center" style={{fontFamily: "'Raleway', sans-serif"}}>
                                <h1 className="display-4" style={{fontSize: "4rem"}}>{head}</h1>
                                <p className="lead text-left" style={{marginLeft: "23rem"}}>Some informations about our restaurant</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rest-icon">
                    <div className="psoload">
                        <div className="straight"></div>
                        <div className="curve"></div>
                        <div className="center"></div>
                        <div className="inner"></div>
                    </div>
                    <div className="two alt-two extra" style={{marginTop: "-35px"}}>
                        <h1>El Diablo
                            <b><span style={{fontWeight:"900"}}>Hasty And Tasty !</span></b>
                        </h1><br></br>
                        <p></p>
                    </div>
                </div>
            </>
        );
    }
}
export default MenuNav;