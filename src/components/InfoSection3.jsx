import triangleShape from "../assets/triangle-shape2.png";

const InfoSection3 = () => {
  return (
    <article id="info3" className="relative info-articles">
      <h2>Interferencias</h2>
      <h3>observadas</h3>
      <img
        className="absolute top-0 right-0 z-10 hidden lg:block "
        src={triangleShape}
        alt=""
      />
    </article>
  );
};

export default InfoSection3;
