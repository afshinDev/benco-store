import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";
import { useState } from "react";
import { LiaTimesSolid, LiaCartArrowDownSolid } from "react-icons/lia";
import { RiMenu4Fill } from "react-icons/ri";
import { PiSignIn } from "react-icons/pi";
import { SlLogout } from "react-icons/sl";

import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../slices/cartSlice";
import { logout } from "../../slices/userSlice";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState();

  // open menu handle
  function handleOpenMenu() {
    setOpenMenu((open) => !open);
  }

  const NAVBAR_LINKS = [
    { label: "home", to: "/" },
    { label: "products", to: "/products" },
    { label: "about us", to: "/aboutus" },
  ];

  const categoriesOptions = [
    { value: "electronics", label: "electronics" },
    { value: "jewelery", label: "jewelery" },
    { value: "men's clothing", label: "men's" },
    { value: "women's clothing", label: "women's" },
  ];

  const cart = useSelector(getCart);
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <div className="container">
          {/* headet top start */}

          <div className="header__top">
            <Logo size={"2.2rem"} type={"header"} />

            <div className="header__links">
              {!isAuth ? (
                <Link className="header__link" to={"/login"}>
                  <PiSignIn />
                </Link>
              ) : (
                <SlLogout onClick={() => dispatch(logout())} size={23} />
              )}
              <Link
                className="header__link header__link--relative"
                to={"/cart"}
              >
                <span className="header__badge-cart center">{cart.length}</span>
                <LiaCartArrowDownSolid />
              </Link>

              {/* toggle menu */}
              <div className="header__toggle-menu">
                <button onClick={handleOpenMenu} className="center">
                  {openMenu ? <LiaTimesSolid /> : <RiMenu4Fill />}
                </button>
              </div>
            </div>
          </div>

          {/* header top end */}

          <nav className="nav">
            {/* dekstop menu start */}

            <ul className={`menu`}>
              {NAVBAR_LINKS.map((link, index) => (
                <li
                  onClick={() => setActive(index)}
                  key={index}
                  className="menu__item"
                >
                  <Link
                    className={`menu__link ${
                      active === index ? "menu__link--active" : ""
                    }`}
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* dropdown */}

              <li className="menu__item dropdown">
                <span className="menu__link">categories</span>

                <ul className="dropdown__menu">
                  {categoriesOptions?.map((option, index) => (
                    <Link
                      to={`/category/${option.value}`}
                      key={index}
                      className="dropdown__link"
                    >
                      {option.label}
                    </Link>
                  ))}
                </ul>
              </li>
            </ul>

            {/* dekstop menu end */}

            {/* menu-mobile start */}

            <ul
              className={`mobile-menu ${openMenu ? "mobile-menu--active" : ""}`}
            >
              {NAVBAR_LINKS.map((link, index) => (
                <li
                  onClick={() => setActive(index)}
                  key={index}
                  className="mobile-menu__item"
                >
                  <Link
                    className={`mobile-menu__link ${
                      active === index ? "mobile-menu__link--active" : ""
                    }`}
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* menu-mobile end */}

              {/* dropdown */}
              <li className="mobile-menu__item dropdown">
                <span className="mobile-menu__link">categories</span>

                <ul className="dropdown__menu">
                  {categoriesOptions?.map((option, index) => (
                    <Link
                      to={`/category/${option.value}`}
                      key={index}
                      className="dropdown__link"
                    >
                      {option.label}
                    </Link>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
