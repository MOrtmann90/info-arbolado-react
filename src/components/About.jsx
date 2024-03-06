import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
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
      <div className="space-y-8 text-center">
        <p>
          Lorem ipsum dolor sit amet <span className="text-bold">consectetur</span> adipisicing elit. Quo laborum
          optio excepturi sint. Veritatis tempore est asperiores animi ex
          sapiente iusto dolores cupiditate omnis ipsum expedita velit at maxime
          totam esse similique quo ad quas, ab aliquam perferendis optio
          consectetur distinctio. Natus ut provident officiis minima veniam?
          Temporibus, cumque eos?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          voluptatibus dolores! Voluptas eum eveniet magnam reiciendis eos
          similique dolorum ut perferendis, quaerat expedita laboriosam
          asperiores nesciunt voluptates eligendi iusto modi?
        </p>
      </div>
      {/* --------- TIMELINE --------- */}
      <div className="hidden md:block">
        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center bg-white rounded-full size-6 ring-0 sm:ring-8 ring-main-500 shrink-0">
                <FaCalendarAlt className="text-main-500" />
              </div>
              <div className="hidden sm:flex w-full  h-0.5 bg-main-500"></div>
            </div>

            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Inicio del relevamiento
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                Diciembre 2020
              </time>
              <p className="text-base font-normal text-gray-500">
                Se da inicio a las tareas de relevamiento en el área X
              </p>
            </div>
          </li>

          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center bg-white rounded-full size-6 ring-0 sm:ring-8 ring-main-500 shrink-0">
                <FaCalendarAlt className="text-main-500" />
              </div>
              <div className="hidden sm:flex w-full  h-0.5 bg-main-500"></div>
            </div>

            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Inicio del relevamiento
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                Diciembre 2020
              </time>
              <p className="text-base font-normal text-gray-500">
                Se da inicio a las tareas de relevamiento en el área X
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default About;
