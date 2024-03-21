import InfoSection1 from "../components/InfoSection1";
import InfoSection2 from "../components/InfoSection2";
import InfoSection3 from "../components/InfoSection3";
import "./info.css";

const Info = () => {
  return (
    <section id="info" className="max-w-screen-xl px-10 pb-10 mx-auto pt-28">
      <InfoSection1 />
      <InfoSection2 />
      <InfoSection3 />
    </section>
  );
};

export default Info;
