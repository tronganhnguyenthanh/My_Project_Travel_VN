import React, { Fragment } from 'react';
import BookingComponent from '../../src/component/Booking';
function Cuisine() {
    return (
        <Fragment>
            <h3>Ẩm thực yêu thích</h3>
            <h2><strong style={{ color: "#333333" }}>Nhà Hàng Vịnh Thủy</strong></h2>
            <h6><i>156 Lê Thánh Tông,P.Bạch Đằng, TP Hạ Long, Quảng Ninh</i></h6>
            <div className="row">
                <div className="col-3" style={{ borderRight: "1px solid grey" }}>
                    <span className="fa fa-star checked text-warning float-left"></span>
                    <span className="fa fa-star checked text-warning float-left"></span>
                    <span className="fa fa-star checked text-warning float-left"></span>
                    <span className="fa fa-star checked text-warning float-left"></span>
                    <span className="fa fa-star float-left"></span>
                    <span className="float-left">
                        <h6>(2 review)</h6>
                    </span>
                </div>
                <div className="col-3" style={{ borderRight: "1px solid grey;" }}>
                    <a><i className='fas'>&#xf1e0;</i> Chia sẻ</a>
                </div>
                <div className="col-3" style={{ borderRight: "1px solid grey;" }}>
                    <a><i className="fa">&#xf277;</i> Chỉ đường</a>
                </div>
                <div className="col-3">
                    <a><i className='fas'>&#xf030;</i> Hình ảnh</a>
                </div>
            </div>
            <div className="row">
               <BookingComponent/>
            </div>
        </Fragment>
    );
}
export default Cuisine;