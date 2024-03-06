import tandilWhite from "/src/assets/logo-tandil-white.png";
import fchLogo from "/src/assets/fch-logo.png";
import { Link } from "react-router-dom";

const links = [
  {
    id: 0,
    name: "Municipio de Tandil",
    path: "https://tandil.gov.ar/"
  },
  {
    id: 1,
    name: "Facultad de Ciencias Humanas",
    path: "https://www.fch.unicen.edu.ar/"
  },
  {
    id: 2,
    name: "IDE Tandil",
    path: "http://mapa.tandil.gov.ar/IdeTandil/"
  },
  {
    id: 3,
    name: "CINEA",
    path: "http://cinea.fch.unicen.edu.ar/"
  }
];

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-neutral-900">
      <div
        id="contacto"
        className="flex justify-between max-w-screen-xl px-2 pb-10 mx-auto"
      >
        <div className="hidden md:flex md:flex-col">
          <Link
            to="https://tandil.gov.ar/"
            target="_blank"
            className="self-center cursor-pointer"
          >
            <img className="logo" src={tandilWhite} alt="logo-municipio" />
          </Link>
          <Link to="https://www.fch.unicen.edu.ar/" target="_blank">
            <img className="cursor-pointer w-36" src={fchLogo} alt="logo-fch" />
          </Link>
        </div>

        <ul className="flex flex-col my-4 text-right text-white">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="hover:text-main-100"
              target="_blank"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full py-2 text-sm text-center text-white">
        Diseño y desarrollo IDE Tandil &copy; 2024
      </div>
    </footer>
  );
};

export default Footer;
