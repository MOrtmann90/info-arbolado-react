import TreesHeight from "./TreesHeight";

const InfoSection2 = () => {
  return (
    <article id="info2" className="info-articles">
      <h2>Altura</h2>
      <h3>estimada de los ejemplares</h3>
      <div className="flex flex-col items-center justify-between py-32 lg:items-end lg:flex-row ">
        {/* CARD 1 */}
        <TreesHeight
          treeClass="&gt;9"
          treeCount="506"
          treeHeight="h-96"
          personHeight="h-14"
          personRight="right-24"
          personBottom="bottom-1"
        />
        {/* CARD 2 */}
        <TreesHeight
          treeClass="3 a 6"
          treeCount="2501"
          treeHeight="h-72"
          personHeight="h-20"
          personRight="right-20"
          personBottom="bottom-1"
        />
        {/* CARD 3 */}
        <TreesHeight
          treeClass="&#60;3"
          treeCount="873"
          treeHeight="h-52"
          personHeight="h-24"
          personRight="right-10"
          personBottom="bottom-0"
        />
      </div>
    </article>
  );
};

export default InfoSection2;
