export default function SearchBar({
  query,
  setQuery,
  handleSearch,
  setResults,
  setLoaded,
}) {
  return (
    <>
      <div className="pt-10 flex flex-row gap-x-5 justify-center text-xl md:text-2xl">
        <input
          className="text-black rounded-3xl text-center w-9/12 ml-10"
          type="text"
          value={query}
          onChange={(e) => {
            e.preventDefault();
            setQuery(e.target.value);
            handleSearch();
          }}
          placeholder=" Type in a song name, artist, or album!"
        />
        <div className="flex flex-col gap-y-1 w-3/12 mr-10 text-xl md:text-2xl ">
          <button
            className="rounded-xl bg-black p-1"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="rounded-xl bg-black p-1"
            type="submit"
            onClick={() => {
              setResults([]);
              setLoaded(false);
              setQuery("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
