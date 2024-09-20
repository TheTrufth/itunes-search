import "./App.css";
import MainContent from "./components/MainContent";
import SearchBar from "./components/SearchBar";
import useItunesController from "./controllers/ItunesController";

function App() {
  const {
    query,
    results,
    loading,
    error,
    loaded,
    handleSearch,
    setQuery,
    setResults,
    setLoaded,
    lastCardRef,
  } = useItunesController();

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          setResults={setResults}
          setLoaded={setLoaded}
        />
      </header>
      <div>
        <MainContent
          results={results}
          loading={loading}
          error={error}
          handleSearch={handleSearch}
          lastCardRef={lastCardRef}
          loaded={loaded}
        />
      </div>
    </div>
  );
}

export default App;
