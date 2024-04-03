import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";
import "./Footer.css";
import { useCategories } from "../../custom/useCategories";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const { categories } = useCategories();

  return (
    <footer className="footer mt-3">
      <div className="container">
        <div className="footer__wrapper">
          {/* top footer start */}
          <div className="footer__top">
            {/* logo */}
            <Logo size={"2.7rem"} type={"footer"} />

            <div className="footer__top-wrapper">
              <div className="footer-menu">
                {categories?.map((category, index) => (
                  <li key={index} className="footer-menu__item">
                    <Link className="footer-menu__link" to={"/products"}>
                      {category}
                    </Link>
                  </li>
                ))}
              </div>

              {/* social media */}
              <div className="social-media">
                <div className="media">
                  <FaInstagram className="media__icon media__icon--instagram" />
                </div>
                <div className="media">
                  <FaTwitter className="media__icon media__icon--twitter" />
                </div>
                <div className="media">
                  <FaFacebook className="media__icon media__icon--facebook" />
                </div>
              </div>
            </div>
          </div>
          {/* tof footer end */}

          {/* bottom footer start */}
          <div className="footer__bottom">
            <p>Terms Of Service</p>
            <p>Privacy Policy</p>
          </div>
          {/* bottom footer end */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
