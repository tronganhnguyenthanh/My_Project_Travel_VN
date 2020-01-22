import React, { Fragment } from 'react';
function BookingComponent() {
    return (
        <Fragment>
            <div className="col-4 text-center" style={{ borderRight: "1px solid grey" }}>
                <a><i className='fas'>&#xf1b9;</i> Giao hàng</a>
                <h4><strong className="text-danger"> Miễn phí</strong></h4>
            </div>
            <div className="col-4 text-center" style={{ borderRight: "1px solid grey" }}>
                <a><i className="fa">&#xf017;</i> Giờ giao hàng</a>
                <h4><strong style={{color:"#333333"}}> 6:00AM</strong></h4>
            </div>
            <div className="col-4 text-center">
                <a><i className="fa" style={{color:"red"}}>&#xf017;</i> Giờ đóng cửa</a>
                <h4><strong style={{color:"#333333"}}> 10:00PM</strong></h4>
            </div>
        </Fragment>
    );
}
export default BookingComponent
