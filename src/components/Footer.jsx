import cineaLogo from "/src/assets/cinea.png";
import ideLogo from "/src/assets/logo-ide.png";
import { Link } from "react-router-dom";

const links = [
  {
    id: 0,
    name: "Municipio de Tandil",
    path: "https://tandil.gov.ar/",
  },
  {
    id: 1,
    name: "Facultad de Ciencias Humanas",
    path: "https://www.fch.unicen.edu.ar/",
  },
  {
    id: 2,
    name: "IDE Tandil",
    path: "http://mapa.tandil.gov.ar/IdeTandil/",
  },
  {
    id: 3,
    name: "CINEA",
    path: "http://cinea.fch.unicen.edu.ar/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-neutral-900">
      <div
        id="contacto"
        className="flex flex-col justify-between max-w-screen-xl px-4 pt-10 pb-10 mx-auto md:flex-row"
      >
        <div className="items-center justify-between mx-auto mb-10 md:m-0 md:flex md:flex-col">
          <Link
            to="http://cinea.fch.unicen.edu.ar/"
            target="_blank"
            className="self-center cursor-pointer"
          >
            <img className="logo" src={cineaLogo} alt="logo-municipio" />
          </Link>
          <Link to="http://mapa.tandil.gov.ar/IdeTandil/" target="_blank">
            <div className="flex flex-col items-center justify-center">
              <img
                className="pb-2 border-b-[1px] border-neutral-500 cursor-pointer w-52"
                src={ideLogo}
                alt="logo-fch"
              />
              <p className="text-sm font-bold text-center text-neutral-500">
                ESTADÍSTICA LOCAL
              </p>
            </div>
          </Link>
        </div>

        <ul className="flex flex-col mx-auto my-4 text-center md:m-0 md:text-right text-neutral-500">
          <p className="font-bold text-neutral-400">ENLACES</p>
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="hover:text-neutral-400"
              target="_blank"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
      <hr className="w-3/4 mx-auto border-neutral-600" />
      <div className="w-full py-2 text-sm text-center text-neutral-400">
        Diseño y desarrollo IDE Tandil &copy; 2024
      </div>
    </footer>
  );
};

export default Footer;
