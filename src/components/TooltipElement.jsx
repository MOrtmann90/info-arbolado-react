import { Tooltip } from "flowbite";
import jsonData from "../data/tooltipData.json";

const TooltipElement = ({ idTitle, idData }) => {
  const data = jsonData;
  return (
    <div
      id={idTitle}
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-light text-white transition-opacity duration-300 rounded-lg shadow-sm opacity-0 bg-main-900 tooltip dark:bg-gray-700"
    >
      {data[idData].text}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default TooltipElement;
