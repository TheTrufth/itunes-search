import { useEffect, useState } from "react";

export default function SearchBar({
  query,
  setQuery,
  handleSearch,
  setResults,
  setLoaded,
}) {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms delay to wait for the user to stop typing

    // Cleanup the timeout if the user types before the delay ends
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Trigger search whenever debouncedQuery changes
  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      return; // Avoid searching if the query is empty
    }
    handleSearch();
  }, [debouncedQuery, handleSearch, setQuery]);

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
