const CircleCard = ({ cardNumber, cardTitle, cardSubt }) => {
  return (
    <div className="flex items-center w-72">
      <span className="z-10 flex items-center justify-center text-3xl font-bold text-white align-middle rounded-full bg-main-500 size-24">
        {cardNumber}
      </span>
      <div className="ml-4">
        <h3 className="font-black">{cardTitle.toUpperCase()}</h3>
        <p className="text-xl">{cardSubt}</p>
      </div>
    </div>
  );
};

export default CircleCard;
