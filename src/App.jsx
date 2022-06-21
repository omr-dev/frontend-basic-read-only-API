import { useState, useEffect } from "react";
import axios from "axios";

import { Noun } from "./components/Noun";
import { Book } from "./components/Book";
import { TechPerson } from "./components/TechPerson";
import { Employee } from "./components/Employee";
import { Translation } from "./components/Translation";
import { Job } from "./components/Job";
import "./App.scss";

function App() {
  const [query, setQuery] = useState("");
  const [constructeredData, setConstructeredData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const apiURL = "http://localhost:3007/all";
  useEffect(() => {
    (async () => {
      const _allDataInAPI = (await axios.get(apiURL)).data;
      const _constructeredData = [];
      Object.keys(_allDataInAPI).map((key) => {
        switch (key) {
          case "nouns": {
            _allDataInAPI[key].map((item) => {
              _constructeredData.push({
                kind: "noun",
                bulkSearch: item.singular,
                item,
              });
            });
          }
          case "books": {
            _allDataInAPI[key].map((item) => {
              _constructeredData.push({
                kind: "book",
                bulkSearch: item.title,
                item,
              });
            });
          }
          case "techPersons": {
            _allDataInAPI[key].map((item) => {
              _constructeredData.push({
                kind: "techPerson",
                bulkSearch: item.fullName,
                item,
              });
            });
          }

          case "employees": {
            _allDataInAPI[key].map((item) => {
              _constructeredData.push({
                kind: "employee",
                bulkSearch: item.FIRST_NAME + " " + item.LAST_NAME,
                item,
              });
            });
          }
          case "translations": {
            _allDataInAPI[key].map((item) => {
              _constructeredData.push({
                kind: "translation",
                bulkSearch: item.fromPhrase,
                item,
              });
            });
          }
          case "jobs": {
            _allDataInAPI[key].map((item) => {
              _constructeredData.push({
                kind: "job",
                bulkSearch: item.html,
                item,
              });
            });
          }
        }
      });

      setConstructeredData(_constructeredData);
    })();
  }, []);

  const filterData = (query) => {
    if (query === "") {
      setFilteredData([]);
    } else {
      const _filteredData = constructeredData.filter((item) => {
        if (item.bulkSearch) {
          console.log(typeof item.bulkSearch, query);
          return item.bulkSearch.toLowerCase().includes(query.toLowerCase());
        }
      });
      setFilteredData(_filteredData);
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    filterData(newQuery);
  };
  return (
    <div className="App">
      <h1>Search in API Page</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
          value={query}
        />
        <p>
          Results: {filteredData.length} from {constructeredData.length}
        </p>
        <ol>
          {filteredData.map((item) => {
            switch (item.kind) {
              case "noun": {
                return <Noun item={item.item} />;
              }
              case "book": {
                return <Book item={item.item} />;
              }
              case "techPerson": {
                return <TechPerson item={item.item} />;
              }
              case "employee": {
                return <Employee item={item.item} />;
              }
              case "translation": {
                return <Translation item={item.item} />;
              }
              case "job": {
                return <Job item={item.item} />;
              }
              default: {
                return <p>Undefined data type!</p>;
              }
            }
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
