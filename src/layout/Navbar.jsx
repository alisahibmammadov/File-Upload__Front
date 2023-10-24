import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import WebLogo from "../assets/img/logo.svg";

function Navbar({ selectedLink, setSelectedLink }) {
  const { t } = useTranslation();

  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };
  return (
    <main className="w-full fixed top-0 left-1/2 translate-x-[-50%] z-50">
      <section className="container mx-auto flex items-center justify-between py-11">
        <Link to="/">
          <img src={WebLogo} alt="Website Logo" />
        </Link>
        <div className="flex items-center gap-14">
          {t("pageLinks", { returnObjects: true }).map((item, index) => (
            <Link
              className={`text-xl font-medium hover:opacity-100 cursor-pointer text-textColor opacity-60  ${
                selectedLink === index ? " opacity-100" : "text-textColor"
              }`}
              smooth={true}
              duration={500}
              to={item.link}
              key={index}
              onClick={() => handleLinkClick(index)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button></button>
      </section>
    </main>
  );
}

export default Navbar;

Navbar.propTypes = {
  selectedLink: PropTypes.number.isRequired,
  setSelectedLink: PropTypes.func.isRequired,
};
