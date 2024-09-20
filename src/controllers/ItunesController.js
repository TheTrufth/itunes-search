import { useRef, useState } from "react";
import { searchItunes } from "../api/itunes";

const useItunesController = () => {
  const [results, setResults] = useState([]); // List of ItunesObject objects
  const [query, setQuery] = useState(""); // Search bar query
  const [loading, setLoading] = useState(false); // Loading flag to display while fetching res
  const [loaded, setLoaded] = useState(false); // Needed to help with the Rety button logic
  const [error, setError] = useState(null); // Track errors
  const [hasMore, setHasMore] = useState(true); // To track if theres more data to load

  const observer = useRef(); // reference for the observer

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch initial results
      const res = await searchItunes(query, 10, 0); // Display 10 items and initial offset is 0
      setResults(res);
      setHasMore(res.length > 0);
      console.log("Result =>" + res);
    } catch (err) {
      setError("Something went wrong while fetching the results! Error: ", err);
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  };

  // Need to keep track of last card so we know when to fetch the next results from Itunes API
  const lastCardRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entities) => {
        if (entities[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.9 }
    );
    if (node) observer.current.observe(node);
  };

  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const data = await searchItunes(query, 10, results.length); // This time offset is the result of the last card in CardList
      // Only display unique items to avoid showing same songs
      const uniqueResults = data.filter(
        (newItem) =>
          !results.some(
            (existingItem) => existingItem.trackId === newItem.trackId
          )
      );
      setResults((prevResults) => [...uniqueResults, ...prevResults]); // Show the new results at the start
      setHasMore(uniqueResults.length > 0);
    } catch (err) {
      setError(
        "Something went wrong while fetching additional results! Error: ",
        err
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    results,
    loading,
    error,
    loaded,
    hasMore,
    handleSearch,
    loadMore,
    setQuery,
    setResults,
    setLoaded,
    lastCardRef,
  };
};

export default useItunesController;
