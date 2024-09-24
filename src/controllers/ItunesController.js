import { useEffect, useReducer, useRef, useState } from "react";
import {
  useFetch,
  useInfiniteScroll,
  useLazyLoading,
} from "../custom_hooks/customHooks";

const useItunesController = () => {
  const [query, setQuery] = useState(""); // Search bar query

  const resReducer = (state, action) => {
    switch (action.type) {
      case "NEW_IMAGES":
        return {
          ...state,
          results: action.results.results,
        };
      case "RESET_IMAGES":
        return {
          ...state,
          results: [],
        };
      case "STACK_IMAGES":
        return {
          ...state,
          results: [...action.results.results, ...state.results],
        };
      case "FETCHING_IMAGES":
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };

  const [resData, resDispatch] = useReducer(resReducer, {
    results: [],
    fetching: true,
  });

  const pageReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_QUERY":
        return { ...state, offset: 0, query: query };
      case "ADVANCE_PAGE":
        console.log("Advancing page");
        return { ...state, offset: resData.results.length };
      default:
        return state;
    }
  };

  const [pager, pagerDispatch] = useReducer(pageReducer, {
    limit: 10,
    query: query,
    offset: resData.results.length, // then results.len
  });

  let bottomBoundaryRef = useRef(null);
  useFetch(pager, resDispatch);
  useLazyLoading(".card-img-top", resData.results);
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  useEffect(() => {
    if (query === "") resDispatch({ type: "RESET_IMAGES", fetching: false });
    pagerDispatch({ type: "UPDATE_QUERY", offset: 0, query: query });
  }, [query]);

  return {
    query,
    setQuery,
    resData,
    bottomBoundaryRef,
  };
};

export default useItunesController;
