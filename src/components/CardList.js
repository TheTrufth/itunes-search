const { default: Card } = require("./Card");

const CardList = ({ results, bottomBoundaryRef }) => {
  return (
    <>
      <ul className="text-black flex flex-col items-center h-[52rem] mt-32 flex-grow-0 space-y-5 overflow-y-auto ">
        {results.length > 0 &&
          results.map((result, index) => {
            return <Card key={index} result={result} />;
          })}
        <div
          id="page-bottom-boundary"
          className="border-solid border border-red-900 p-5"
          ref={bottomBoundaryRef}
        ></div>
      </ul>
    </>
  );
};

export default CardList;
