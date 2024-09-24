import CardList from "./CardList";

export default function MainContent({ resData, bottomBoundaryRef }) {
  return (
    <>
      {resData.fetching && <p className="z-50 ">Loading...</p>}
      {/* {error && (
        <div className="mt-10">
          <p className="text-2xl">{error}</p>
          <button
            className="bg-black md:text-3xl mt-5 p-4 px-7 rounded-2xl"
            onClick={handleSearch}
          >
            Retry
          </button>
        </div>
      )} */}
      {resData && resData.results.length > 0 && (
        <CardList
          results={resData.results}
          bottomBoundaryRef={bottomBoundaryRef}
        />
      )}
      {/* {!loading && !error && results.length > 0 && (
        <CardList results={results} bottomBoundaryRef={bottomBoundaryRef} />
      )} */}
      {/* {loaded && !loading && results.length === 0 && <p>No results found</p>} */}
    </>
  );
}
