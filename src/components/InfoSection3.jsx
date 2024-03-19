import triangleShape from "../assets/triangle-shape2.png";

const InfoSection3 = () => {
  return (
    <article id="info3" className="relative info-articles">
      <h2>Interferencias</h2>
      <h3>observadas</h3>
      <div className="my-5 text-justify">
        <p>
          Aunque el arbolado urbano de alineación aporta numerosos beneficios,
          también puede generar inconvenientes, como es la interferencia con el
          cableado aéreo y luminarias, obstrucción de cloacas y desagües,
          levantamiento de veredas, interiores de viviendas y pavimentos, puede
          causar daños a bienes o personas ya sea por caídas o fracturas de sus
          partes, y problemas a la salud.
        </p>
        <p>
          Abordar estas cuestiones eficazmente puede garantizar que el arbolado
          siga siendo una característica positiva y sostenible en nuestras
          ciudades.
        </p>
      </div>
      <img
        className="absolute top-0 right-0 hidden -z-10 lg:block "
        src={triangleShape}
        alt=""
      />
    </article>
  );
};

export default InfoSection3;
