import React from "react";
import "../Styles/Header.css";
import { GiSelfLove } from "react-icons/gi";
import { BsBorderWidth, BsHeadset, BsSearch, BsXLg } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { RiTruckLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../UI/FirstDropdown";
import FirstDropdown from "../UI/FirstDropdown";
import SecondDropdown from "../UI/SecondDropdown";
import ThirdDropdown from "../UI/ThirdDropdown";
import ForthDropdown from "../UI/ForthDropdown";
import FifthDropdown from "../UI/FifthDropdown";
import SeventhDropdown from "../UI/SeventhDropdown";
import Eighthdropdown from "../UI/Eighthdropdown";
import SixthDropdown from "../UI/SixthDropdown";

const Header = () => {
  const showMenu = () => {
    document.querySelector(".mobile-menu").classList.add("show");
  };
  const hideMenu = () => {
    document.querySelector(".mobile-menu").classList.remove("show");
  };
  return (
    <header>
      {/* delivery */}
      <div className="delivery d-flex align-items-center justify-content-around py-1">
        <div className="d-flex align-items-center gap-2 first">
          <span>
            <GiSelfLove />
          </span>
          <p className="mb-0">Passion for Sports</p>
        </div>
        <div className="d-flex align-items-center gap-2 middle">
          <span>
            <RiTruckLine />
          </span>
          <p className="mb-0">Worldwide Delivery</p>
        </div>
        <div className="d-flex align-items-center gap-2 last">
          <span>
            <BsHeadset />
          </span>
          <p className="mb-0">Call us: +31 416 652 803</p>
        </div>
      </div>

      {/* logo, search, cart */}
      <div className="logo-search d-flex align-items-center">
        <div className="d-flex align-items-center gap-3">
          <div className="mobile-menu-btn">
            <BsBorderWidth onClick={showMenu} />
          </div>
          <Link to="/home" className="home-link mb-0 logo">
            TRAINING<span>.</span>COM
          </Link>
          <div className="searchBar px-5 py-2">
            <input
              type="text"
              className="searchInput"
              placeholder="Search For ..."
            />
            <button className="searchBtn">
              <BsSearch />
            </button>
          </div>
        </div>

        <div className="wishlist-cart d-flex align-items-center gap-3">
          <Link to="/login" className="nav-link">
            <AiOutlineUser />
          </Link>
          <Link to="/wishlist" className="nav-link">
            <AiOutlineHeart />
          </Link>
          <div className="cart">
            <Link to="/cart" className="nav-link">
              <AiOutlineShoppingCart />
            </Link>
            <div className="cart-count">
              <p className="m-0">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      <section>
        <div className="container mb-0">
          <div className="menu-nav p-3">
            <ul className="list-unstyled menu-links">
              <li className="dropdown">
                <Link className="nav-link link" to="/basketball">
                  Basketball
                </Link>
                <div className="dropdown-content">
                  <FirstDropdown />
                </div>
              </li>
              <li className="dropdown">
                <Link className="nav-link link" to="/field-hockey">
                  Field Hockey
                </Link>
                <div className="dropdown-content">
                  <SecondDropdown />
                </div>
              </li>
              <li className="dropdown">
                <Link className="nav-link link" to="/handball">
                  Handball
                </Link>
                <div className="dropdown-content">
                  <ThirdDropdown />
                </div>
              </li>
              <li className="dropdown">
                <Link className="nav-link link" to="/korfball">
                  Korfball
                </Link>
                <div className="dropdown-content">
                  <ForthDropdown />
                </div>
              </li>
              <li className="dropdown">
                <Link className="nav-link link" to="/padel">
                  Padel
                </Link>
                <div className="dropdown-content">
                  <FifthDropdown />
                </div>
              </li>
              <li className="dropdown">
                <Link className="nav-link link" to="/running">
                  Running
                </Link>
                <div className="dropdown-content">
                  <SixthDropdown />
                </div>
              </li>
              <li className="dropdown">
                <Link className="nav-link link" to="/tennis">
                  Tennis
                </Link>
                <div className="dropdown-content">
                  <SeventhDropdown />
                </div>
              </li>
              <li className="dropdown">
                <Link className="nav-link link" to="/vollyball">
                  Vollyball
                </Link>
                <div className="dropdown-content">
                  <Eighthdropdown />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr className="m-0 underline" />
      </section>

      {/* mobile responsive */}
      <div className="mobile-menu animate__animated animate__backInLeft p-3">
        <div className="mobile-close-btn float-end">
          <BsXLg onClick={hideMenu} />
        </div>

        <div className="mobile-searchBar py-2 rounded-0">
          <input
            type="text"
            className="searchInput"
            placeholder="Search For ..."
          />
          <button className="searchBtn">
            <BsSearch />
          </button>
        </div>

        <div className="mobile-menu-nav mt-3">
          <ul className="list-unstyled d-grid">
            <li>
              <Link className="nav-link" to="/basketball">
                Basketball
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/field-hockey">
                Field Hockey
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/handball">
                Handball
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/korfball">
                Korfball
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/padel">
                Padel
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/running">
                Running
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/tennis">
                Tennis
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/vollyball">
                Vollyball
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
