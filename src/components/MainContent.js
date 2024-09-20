import CardList from "./CardList";

export default function MainContent({
  loading,
  error,
  results,
  lastCardRef,
  handleSearch,
  loaded,
}) {
  return (
    <>
      {loading && <p className="z-50 ">Loading...</p>}
      {error && (
        <div className="mt-10">
          <p className="text-2xl">{error}</p>
          <button
            className="bg-black md:text-3xl mt-5 p-4 px-7 rounded-2xl"
            onClick={handleSearch}
          >
            Retry
          </button>
        </div>
      )}
      {!loading && !error && results.length > 0 && (
        <CardList results={results} lastCardRef={lastCardRef} />
      )}
      {loaded && !loading && results.length === 0 && <p>No results found</p>}
    </>
  );
}
