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
            cardNumber="74"
            cardTitle="especies"
            cardSubt="identificadas"
          />
          <CircleCard
            cardNumber="135"
            cardTitle="manzanas"
            cardSubt="identificadas"
          />
          <CircleCard
            cardNumber="48"
            cardTitle="meses"
            cardSubt="de relevamiento"
          />
        </div>
        <div className="my-auto space-y-8">
          <CircleCard
            cardNumber="4191"
            cardTitle="cazuelas"
            cardSubt="relevadas"
          />
          <CircleCard
            cardNumber="459"
            cardTitle="hectáreas"
            cardSubt="de trabajo"
          />
          <CircleCard
            cardNumber="335"
            cardTitle="cuadras"
            cardSubt="recorridas"
          />
        </div>
      </article>
    </section>
  );
};

export default Metrics;
