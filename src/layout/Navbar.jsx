import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import WebLogo from "../assets/img/logo.svg";
import { useState } from "react";

function Navbar({ selectedLink, setSelectedLink }) {
  const { t, i18n } = useTranslation();
  const [langBtn, setLangBtn] = useState(i18n.language.toUpperCase());
  const [clickedBtn, setClickedBtn] = useState(false);
  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };
  const handleClickLang = (name, lang) => {
    i18n.changeLanguage(lang);
    setLangBtn(name.toUpperCase());
  };
  const langObj = [
    {
      id: 1,
      name: "AZ",
      lng: "az",
    },
    {
      id: 2,
      name: "EN",
      lng: "en",
    },
    {
      id: 2,
      name: "RU",
      lng: "ru",
    },
  ];
  return (
    <main className="w-full fixed top-0 left-1/2 translate-x-[-50%] z-50 px-3">
      <section className="container mx-auto flex items-center justify-around sm:justify-between py-11">
        <Link to="/" className="cursor-pointer">
          <img src={WebLogo} alt="Website Logo" />
        </Link>
        <div className=" items-center gap-14 hidden md:flex">
          {t("pageLinks", { returnObjects: true }).map((item, index) => (
            <Link
              className={`text-xl font-medium hover:opacity-100 cursor-pointer duration-100 text-textColor ${
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
        <button className="bg-jadeColor hidden md:flex hover:opacity-80 sm:text-xs  lg:text-base font-medium text-white rounded sm:px-4 sm:py-2 lg:px-10 lg:py-4 shrink-0 duration-100">
          {t("shopNow")}
        </button>
        {/* <div className="relative">
          <span className=" w-10 h-10 bg-jadeColor flex items-center justify-center text-white rounded shrink-0 text-base font-medium">
            {langBtn}
          </span>
          <nav className="absolute flex flex-col items-center top-12 left-1/2 translate-x-[-50%] bg-jadeColorHover w-10 rounded">
            <span
              href="#"
              onClick={() => handleClickLang("az")}
              className="cursor-pointer p-1 w-full flex justify-center hover:bg-jadeColor hover:text-white rounded duration-100"
            >
              Az
            </span>
            <span
              href="#"
              onClick={() => handleClickLang("en")}
              className="cursor-pointer p-1 w-full flex justify-center hover:bg-jadeColor hover:text-white rounded duration-100"
            >
              En
            </span>
            <span
              href="#"
              onClick={() => handleClickLang("ru")}
              className="cursor-pointer p-1 w-full flex justify-center hover:bg-jadeColor hover:text-white rounded duration-100"
            >
              Ru
            </span>
          </nav>
        </div> */}
        <div className="relative flex items-center gap-2">
          <div className="bg-jadeColor w-10 h-10 flex md:hidden items-center justify-center text-white rounded shrink-0 text-lg font-medium cursor-pointer">
            <i className="fa-solid fa-bars"></i>
          </div>
          <span
            onClick={() => setClickedBtn(true)}
            className=" cursor-pointer w-10 h-10 bg-jadeColor flex items-center justify-center text-white rounded shrink-0 text-base font-medium"
          >
            {langBtn}
          </span>
          <nav className="absolute flex flex-col items-center top-12 left-1/2 translate-x-[-50%] bg-jadeColorHover w-10 rounded">
            {langObj.map((item, index) =>
              clickedBtn ? (
                <span
                  key={index}
                  onClick={() => {
                    handleClickLang(item.name, item.lng), setClickedBtn(false);
                  }}
                  className={`${
                    langBtn === item.name
                      ? "text-textColor cursor-wait bg-transparent"
                      : "hover:bg-jadeColor hover:text-white"
                  } cursor-pointer p-1 w-full flex justify-center   rounded text-base font-medium duration-100`}
                >
                  {item.name}
                </span>
              ) : null
            )}
          </nav>
        </div>
      </section>
    </main>
  );
}

export default Navbar;

Navbar.propTypes = {
  selectedLink: PropTypes.number.isRequired,
  setSelectedLink: PropTypes.func.isRequired,
};
