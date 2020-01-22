import React from 'react';
function MenuComponent() {
    return (
        <div className="navbar-collapse ml-5">
            <ul className="nav navbar-nav mr-auto">
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
        </div>
    );
}

export default MenuComponent;