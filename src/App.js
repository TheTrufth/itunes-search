import "./App.css";
import MainContent from "./components/MainContent";
import SearchBar from "./components/SearchBar";
import useItunesController from "./controllers/ItunesController";

function App() {
  const { query, setQuery, resData, bottomBoundaryRef } = useItunesController();

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          query={query}
          setQuery={setQuery}
          // handleSearch={handleSearch}
          // setResults={setResults}
          // setLoaded={setLoaded}
        />
      </header>
      <div>
        <MainContent
          resData={resData}
          // results={results}
          // loading={loading}
          // error={error}
          // handleSearch={handleSearch}
          bottomBoundaryRef={bottomBoundaryRef}
          // loaded={loaded}
        />
      </div>
    </div>
  );
}

export default App;
