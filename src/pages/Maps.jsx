import MapCard from "../components/MapCard";

const Maps = () => {
  return (
    <section id="mapas" className="info-section bg-main-100">
      <h3>El relevamiento</h3>
      <h2>en mapas</h2>
      <div className="flex justify-between gap-4 my-10">
        <MapCard />
        <MapCard />
        <MapCard />
      </div>
    </section>
  );
};

export default Maps;
