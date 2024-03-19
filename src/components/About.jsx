import React, { useEffect } from "react";
import MilestoneVertical from "./Milestone";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="acerca"
      className="flex flex-col justify-between info-section"
      data-aos="fade-right"
    >
      <h2>Sobre el proyecto</h2>
      <div className="space-y-8 text-justify">
        <p>
          La urbanización creciente y sus efectos plantean desafíos
          significativos en la gestión ambiental urbana, especialmente en un
          contexto de cambio climático global. Las soluciones basadas en la
          naturaleza, entre ellas la
          <span className="extra-info"> infraestructura verde urbana</span>,
          emergen como estrategias para abordar los problemas urbanos. La
          comunidad mundial ha adoptado los Objetivos de Desarrollo Sostenible
          (ODS), donde los
          <span className="extra-info"> bosques urbanos</span> desempeñan un rol
          fundamental en la consecución de estos y específicamente contribuyen a
          lograr ciudades inclusivas, seguras, resilientes y sostenibles.
        </p>
        <p>
          En tal sentido, se propuso estudiar el{" "}
          <span className="extra-info">arbolado urbano en alineación </span>
          de la ciudad de Tandil.
        </p>
        <p>
          Para ello, se realizó un relevamiento abarcando un total de 700
          manzanas con presencia de cordón cuneta. Los trabajos de campo
          tuvieron una duración total aproximada de 34 meses con jornadas de 4
          horas diarias entre los años 2019 - 2023. El relevamiento se realizó a
          pie, registrando en cada frente la presencia de árboles, así como
          también su ausencia (<span className="extra-info">planteras</span>{" "}
          vacías o inexistentes).
        </p>
        <p>
          Todos los árboles fueron referenciados por su ubicación, seguidamente
          identificados a nivel de especie (nombre científico y vulgar) y
          caracterizados (altura, inclinación, heridas visibles y estado
          general). Además, se registraron posibles interferencias del arbolado
          con su entorno como problemas con de alumbrado, tendido eléctrico,
          señalización, daños a estructuras e infraestructuras.
        </p>
        <p>
          A partir de este relevamiento se generó una base de datos que facilita
          la elaboración de diagnósticos indispensables para planificar y
          gestionar el mejoramiento del arbolado de alineación de la ciudad de
          Tandil.
        </p>
      </div>
      {/* --------- TIMELINE --------- */}

      <div className="px-5 py-3 my-10 rounded-lg bg-main-100">
        <ol className="relative border-gray-300 border-s">
          <MilestoneVertical
            time="2001 - 2003"
            title="Antecedente de relevamiento"
          />
          <MilestoneVertical
            time="Octubre 2019"
            title="Definición de variables"
          />
          <MilestoneVertical
            time="Noviembre 2019"
            title="Taller de formación de relevadores"
          />
          <MilestoneVertical
            time="Marzo 2020"
            title="Interrupción de actividades (pandemia COVID-19)"
          />
          <MilestoneVertical
            time="Octubre 2020"
            title="Reinicio de actividades"
          />
          <MilestoneVertical
            time="Abril 2023"
            title="Taller de formación de relevadores"
          />
          <MilestoneVertical
            time="Diciembre 2023"
            title="Finalización de relevamiento"
          />
        </ol>
      </div>
    </section>
  );
};

export default About;
