import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Logo from '../../src/img/logo-card/hellovn.jpg';
import vn from '../../src/flags/4x3/vn.svg';
import gb from '../../src/flags/4x3/gb.svg';
import Cuisine from '../../src/component/Cuisine';
import AsNavfor from '../../src/component/Slider';
import '../../src/css/index.css';
function LogoComponent() {
    return (
        <div className="App">
            <div className="container-fluid pb-3">
                <div className="row pl-3">
                    <div className="col-xl-6 col-lg-12 col-md-12 bottom-border">
                        <nav className="header-navbar navbar-expand-sm navbar navbar-with-menu border-grey">
                            <div className="content" style={{ width: "100%" }}>
                                <div className="navbar-collapse">
                                    <ul className="nav navbar-nav mr-auto">
                                        <li className="nav-item" id="logo-hellovn">
                                            <img className="brand-logo ml-1" src={Logo} style={{ width: "100px", height: "45px" }} />
                                        </li>
                                        <li className="nav-item ml-2">
                                            <a className="nav-link active" href="#">Trang chủ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Bộ sưu tập</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Ứng dụng</a>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav float-right ml-3">
                                        <li className="nav-item selected-language">
                                            <a href="#" className="nav-link">
                                                <img src={vn} style={{ width: "30px", height: "25px" }} />
                                                <span> VI </span>
                                            </a>
                                        </li>
                                        <li className="nav-item selected-language">
                                            <a href="#" class="nav-link">
                                                <img src={gb} style={{ width: "30px", height: "25px" }} />
                                                <span> EN </span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="dropdown-language">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"black"}}> 
                                            <i className="fas fa-bars"></i>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#" class="nav-link">
                                                <img src={vn} style= {{width:"30px" , height:"25px"}}/>
                                                <span> VI </span>
                                            </a>
                                            <a className="dropdown-item" href="#" className="nav-link">
                                                <img src={gb} style={{width:"30px", height:"25px"}}/>
                                                <span> EN </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="text pt-3 pl-3">
                           <Cuisine/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 bottom-border mt-1">
                       <AsNavfor/>
                    </div>
                </div>
                <div className="row pl-3">
                   
                </div>
            </div>
        </div>
    );
}

export default LogoComponent;