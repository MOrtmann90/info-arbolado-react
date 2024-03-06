import CircleCard from "./CircleCard";

const Metrics = () => {
  return (
    <section id="resumen" className="relative info-section">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-hero-pattern"></div>
      <h2>Resumen</h2>
      <h3>de los datos obtenidos</h3>
      <article className="flex flex-col items-center justify-between w-full h-full mx-auto my-auto md:flex-row md:w-1/2">
        <div className="my-auto space-y-8">
          <CircleCard
            cardNumber="98"
            cardTitle="especies"
            cardSubt="identificadas"
          />
          <CircleCard
            cardNumber="98"
            cardTitle="ESPECIES"
            cardSubt="identificadas"
          />
          <CircleCard
            cardNumber="98"
            cardTitle="ESPECIES"
            cardSubt="identificadas"
          />
        </div>
        <div className="my-auto space-y-8">
          <CircleCard
            cardNumber="98"
            cardTitle="cazuelas"
            cardSubt="identificadas"
          />
          <CircleCard
            cardNumber="98"
            cardTitle="ESPECIES"
            cardSubt="identificadas"
          />
          <CircleCard
            cardNumber="98"
            cardTitle="ESPECIES"
            cardSubt="identificadas"
          />
        </div>
      </article>
    </section>
  );
};

export default Metrics;
