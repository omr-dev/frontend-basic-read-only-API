import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [query, setQuery] = useState("");
  const [constructeredData, setConstructeredData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const apiURL = "http://localhost:3007/all";
  useEffect(() => {
    (async () => {
      const _allDataInAPI = (await axios.get(apiURL)).data;
      const _constructeredData = Object.keys(_allDataInAPI).map((key) => {
        switch (key) {
          case "nouns": {
            _allDataInAPI[key].map((item) => {
              return { kind: "noun", bulkSearch: item.singular, item };
            });
          }
          case "books": {
            _allDataInAPI[key].map((item) => {
              return { kind: "book", bulkSearch: item.title, item };
            });
          }
          case "techPersons": {
            _allDataInAPI[key].map((item) => {
              return { kind: "techPerson", bulkSearch: item.fullName, item };
            });
          }
          case "settings": {
            _allDataInAPI[key].map((item) => {
              return { kind: "setting", bulkSearch: item.type, item };
            });
          }
          case "employees": {
            _allDataInAPI[key].map((item) => {
              return {
                kind: "employee",
                bulkSearch: item.FIRST_NAME + " " + LAST_NAME,
                item,
              };
            });
          }
          case "translations": {
            _allDataInAPI[key].map((item) => {
              return {
                kind: "translation",
                bulkSearch: item.fromLanguage,
                item,
              };
            });
          }
          case "jobs": {
            _allDataInAPI[key].map((item) => {
              return { kind: "job", bulkSearch: item.html, item };
            });
          }
        }
      });
      setConstructeredData(_constructeredData);
    })();
  }, []);

  const filterData = (query) => {
    const _filteredData = Object.entries(constructeredData).filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredData(_filteredData);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    filterData(query);
  };
  return (
    <div className="App">
      <h1>Search in API Page</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
          value={query}
        />
      </div>
    </div>
  );
}

export default App;
