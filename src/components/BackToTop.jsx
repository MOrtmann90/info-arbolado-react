import { useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const [topBtn, setTopBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800 && window.innerWidth > 768) {
      setTopBtn(true);
    } else {
      setTopBtn(false);
    }
  });

  return (
    <div className="">
      {topBtn && (
        <FaChevronCircleUp
          onClick={scrollToTop}
          className="fixed z-50 bg-white rounded-full cursor-pointer ring-main-100 ring-2 right-10 bottom-10 size-8 text-main-500 hover:text-main-100"
          data-aos="fade-up"
        />
      )}
    </div>
  );
};

export default BackToTop;
