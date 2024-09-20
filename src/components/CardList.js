const { default: Card } = require("./Card");

const CardList = ({ results, lastCardRef }) => {
  return (
    <ul className="text-black flex flex-col items-center h-[52rem] mt-32 flex-grow-0 space-y-5 overflow-y-auto ">
      {results.map((result, index) => {
        if (results.length === index + 1) {
          return <Card key={index} result={result} ref={lastCardRef} />;
        } else {
          return <Card key={index} result={result} />;
        }
      })}
    </ul>
  );
};

export default CardList;
