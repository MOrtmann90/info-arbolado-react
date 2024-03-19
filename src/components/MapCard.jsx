import { FcPicture } from "react-icons/fc";

const MapCard = () => {
  return (
    <div className="text-justify">
      <div className="bg-white rounded-t-lg">
        <FcPicture className="mx-auto size-64" />
      </div>
      <h3 className="py-5 font-bold text-center text-main-500">
        Título del mapa
      </h3>
      <p className="rounded-b-lg text-neutral-500 ">
        Permite visualizar la relación entre el número de árboles existentes por
        cuadra con el número de árboles deseable (12 por vereda par o impar).
        Para ilustrar el grado de arborización en base a una escala de bajo,
        medio y alto, en cada cuadra relevada, se trazaron líneas de colores
        rojo, amarillo y verde respectivamente.
      </p>
    </div>
  );
};

export default MapCard;
