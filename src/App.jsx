import React, { useEffect, useState } from "react";
import { CardGroup, Filters, Header, Pagination, Search } from "./containers";

const App = () => {
  const [info, setInfo] = useState();
  const [results, setResults] = useState();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setResults(data.results);
      setInfo(data.info);
    })();
  }, [api]);

  return (
    <div className="font-primary gradient-bg-welcome tracking-wide">
      <Header />
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="grid grid-cols-10">
        <Filters
          setGender={setGender}
          setSpecies={setSpecies}
          setStatus={setStatus}
        />
        <CardGroup data={results} />
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        data={info}
      />
    </div>
  );
};

export default App;
