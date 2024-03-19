import { FaAnglesDown } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";
import "./hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero bg-image-bg">
      <div className="hero-bg"></div>
      <div className="relative max-w-screen-xl text-center ">
        <h1 className="">ARBOLADO PÚBLICO</h1>
        <p className="max-w-screen-lg px-2 py-12 mx-auto text-2xl font-light leading-relaxed text-white">
          Explora el corazón verde que embellece nuestra ciudad y mejora nuestra
          calidad de vida. Uníte a nuestra misión de promover un entorno más
          saludable y sostenible explorando nuestras estadísticas. Descubrí
          información clave para valorar y proteger este tesoro verde
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
