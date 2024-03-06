import { FaAnglesDown } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";
import "./hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero bg-image-bg">
      <div className="hero-bg"></div>
      <div className="relative max-w-screen-xl text-center ">
        <h1 className="">ARBOLADO PÚBLICO</h1>
        <p className="w-2/3 py-12 mx-auto text-2xl font-light leading-relaxed text-white">
          Desde la diversidad de especies hasta su impacto en el aire que
          respiramos, descubre información clave para valorar y proteger este
          tesoro verde. ¡Únete a nuestra misión de promover un entorno más verde
          y saludable explorando nuestras estadísticas!{" "}
        </p>
      </div>

      <Link
        to="#acerca"
        className="flex text-center text-white animate-bounce justify-self-end size-10"
      >
        <span className="self-center mx-auto">
          <FaAnglesDown />
        </span>
      </Link>
    </div>
  );
};

export default Hero;
