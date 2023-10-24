import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import WebLogo from "../assets/img/logo.svg";
import I from "../assets/icon/i.svg";
import F from "../assets/icon/f.svg";
import T from "../assets/icon/t.svg";

function Footer({ selectedLink, setSelectedLink }) {
  const { t } = useTranslation();
  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };
  return (
    <main className="border-t-2 border-[#ebebeb] ">
      <section className="container mx-auto flex items-center justify-between py-11">
        <Link to="/" className="cursor-pointer">
          <img src={WebLogo} alt="Website Logo" />
        </Link>
        <div className="flex items-center gap-14">
          {t("pageLinks", { returnObjects: true }).map((item, index) => (
            <Link
              className={` text-xl font-medium hover:opacity-100 cursor-pointer duration-100 text-textColor  ${
                selectedLink === index ? " opacity-100" : "opacity-60"
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
        <div className="flex items-center gap-11">
          <span className="text-textColor text-xl font-bold">
            {t("followUs")}
          </span>
          <div className="flex gap-6">
            <div className={styles.icon}>
              <img src={F} alt="Facabook logo" />
            </div>
            <div className={styles.icon}>
              <img src={I} alt="Instagram logo" />
            </div>
            <div className={styles.icon}>
              <img src={T} alt="Twitter logo" />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full py-4 bg-jadeColor"></div>
    </main>
  );
}

export default Footer;
Footer.propTypes = {
  selectedLink: PropTypes.number.isRequired,
  setSelectedLink: PropTypes.func.isRequired,
};

const styles = {
  icon: "h-12 w-12 bg-jadeColor flex items-center justify-center rounded-full",
};
