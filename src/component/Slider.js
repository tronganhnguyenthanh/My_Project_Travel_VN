import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import React, { Component } from "react";
import Slider from "react-slick";
import '../../src/css/index.css';
import mauthietkenhahangdep from '../../src/img/images/mẫu-thiết-kế-nhà-hàng-đẹp.jpg';
import nhahangsangtrong from '../../src/img/images/nha-hang-kien-truc-dep-back-ground-co-dien-1-hem-quan-hoang-cau-6.jpg';
import nhahangkientruc from '../../src/img/images/nha-hang-kien-truc-dep-back-ground-co-dien-5-nha-hang-hem-quan-96-xa-dan.jpg';
import nhahanggo from '../../src/img/images/nha-hang-sang-trong.jpg';
export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <div>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    <div>
                        <img src={mauthietkenhahangdep} alt="" className="Slider" />
                    </div>
                    <div>
                        <img src={nhahangsangtrong} alt="" className="Slider" />
                    </div>
                    <div>
                        <img src={nhahangkientruc} alt="" className="Slider" />
                    </div>
                    <div>
                        <img src={nhahanggo} alt="" className="Slider" />
                    </div>
                </Slider>

                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    <div>
                        <img src={mauthietkenhahangdep} alt="" className="Slider1" />
                    </div>
                    <div>
                        <img src={mauthietkenhahangdep} alt="" className="Slider1" />
                    </div>
                    <div>
                        <img src={mauthietkenhahangdep} alt="" className="Slider1" />
                    </div>
                    <div>
                        <img src={mauthietkenhahangdep} alt="" className="Slider1" />
                    </div>
                </Slider>
            </div>
        );
    }
}