import treeSvg from "../assets/tree.svg";
import humanSvg from "../assets/human.svg";

const TreesHeight = ({
  treeClass,
  treeCount,
  treeHeight,
  personHeight,
  personRight,
  personBottom,
}) => {
  return (
    <div className="flex flex-col text-center w-80 rounded-t-md">
      <div className="relative flex items-end mb-4 h-96">
        <img
          src={treeSvg}
          className={`${treeHeight} mx-auto`}
          alt="tree-size"
        />
        <img
          src={humanSvg}
          className={`absolute ${personRight} ${personBottom} ${personHeight} `}
          alt="human-size"
        />
      </div>
      <p className="text-footer">{treeClass} metros</p>
      <h3 className="text-3xl font-black text-main-500">{treeCount}</h3>
      <p className="text-xl">árboles</p>
    </div>
  );
};

export default TreesHeight;
