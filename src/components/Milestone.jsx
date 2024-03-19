const MilestoneVertical = ({ time, title }) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-main-500 rounded-full mt-1.5 -start-1.5 border border-main-500  "></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-600 ">
        {time}
      </time>
      <h3 className="text-lg font-semibold text-main-500">{title}</h3>
      {/*       <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Get access to over 20+ pages including a dashboard layout, charts,
        kanban board, calendar, and pre-order E-commerce & Marketing pages.
      </p> */}
    </li>
  );
};

export default MilestoneVertical;
