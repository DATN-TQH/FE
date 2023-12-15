import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-2">
            <div className="logo">
              <a href="/">
                <img src="/images/LOGO1.png" alt="FlatShop" />
              </a>
            </div>
          </div>
          <div className="col-md-10 col-sm-10">
            <div className="header_top">
              <div className="row">
                <div className="col-md-9">
                  <ul className="topmenu">
                    <li>
                      <a href="#">Thông tin</a>
                    </li>
                    <li>
                      <a href="#">Tin tức</a>
                    </li>
                    <li>
                      <a href="#">Dịch vụ</a>
                    </li>
                    <li>
                      <a href="#">Hỗ trợ</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="usermenu">
                    <li>
                      <a href="checkin" className="log">
                        Đăng nhập
                      </a>
                    </li>
                    <li>
                      <a href="checkin" className="reg">
                        Đăng kí
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="header_bottom">
              <ul className="option">
                <li id="search" className="search">
                  <form>
                    <input
                      className="search-submit"
                      type="submit"
                      value=""
                      onChange={() => console.log("abc")}
                    />
                    <input
                      className="search-input"
                      placeholder="Enter your search term..."
                      type="text"
                      value=""
                      name="search"
                      onChange={() => console.log("abc")}
                    />
                  </form>
                </li>
                <li className="option-cart">
                  <a href="#" className="cart-icon">
                    cart <span className="cart_no">02</span>
                  </a>
                  <ul className="option-cart-item">
                    <li>
                      <div className="cart-item">
                        <div className="image">
                          <img
                            src="images/products/thum/products-01.png"
                            alt=""
                          />
                        </div>
                        <div className="item-description">
                          <p className="name">Lincoln chair</p>
                          <p>
                            Size: <span className="light-red">One size</span>
                            <br />
                            Quantity: <span className="light-red">01</span>
                          </p>
                        </div>
                        <div className="right">
                          <p className="price">$30.00</p>
                          <a href="#" className="remove">
                            <img src="images/remove.png" alt="remove" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="cart-item">
                        <div className="image">
                          <img
                            src="images/products/thum/products-02.png"
                            alt=""
                          />
                        </div>
                        <div className="item-description">
                          <p className="name">Lincoln chair</p>
                          <p>
                            Size: <span className="light-red">One size</span>
                            <br />
                            Quantity: <span className="light-red">01</span>
                          </p>
                        </div>
                        <div className="right">
                          <p className="price">$30.00</p>
                          <a href="#" className="remove">
                            <img src="images/remove.png" alt="remove" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span className="total">
                        Total <strong>$60.00</strong>
                      </span>
                      <button
                        className="checkout"
                        onClick={() => {
                          console.log("checkout");
                        }}
                      >
                        CheckOut
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Trang chủ
                    </a>
                    <div className="dropdown-menu">
                      <ul className="mega-menu-links">
                        <li>
                          <a href="index.html">Trang chủ</a>
                        </li>
                        <li>
                          <a href="home2.html">Trang chủ 2</a>
                        </li>
                        <li>
                          <a href="home3.html">Trang chủ 3</a>
                        </li>
                        <li>
                          <a href="productlitst.html">Productlitst</a>
                        </li>
                        <li>
                          <a href="productgird.html">Productgird</a>
                        </li>
                        <li>
                          <a href="details.html">Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">CheckOut</a>
                        </li>
                        <li>
                          <a href="checkout2.html">CheckOut2</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="productgird.html">Xe</a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Điện thoại
                    </a>
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <ul className="mega-menu-links">
                            <li>
                              <a href="productgird.html">Ip</a>
                            </li>
                            <li>
                              <a href="productgird.html">Sam Sung</a>
                            </li>
                            <li>
                              <a href="productgird.html">Oppo</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <ul className="mega-menu-links">
                            <li>
                              <a href="productgird.html">LG</a>
                            </li>
                            <li>
                              <a href="productgird.html">Xiaomi</a>
                            </li>
                            <li>
                              <a href="productgird.html">Realme</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="productgird.html">Đồ gia dụng</a>
                  </li>
                  <li>
                    <a href="productgird.html">Nội thất</a>
                  </li>
                  <li>
                    <a href="productgird.html">Thú cưng</a>
                  </li>
                  <li>
                    <a href="productgird.html">Văn phòng</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
