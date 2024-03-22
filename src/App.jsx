import { useState } from "react";
import { GifGrid, GifSearch, Title } from "./components";

function App() {
  const [searchValue, setSearchValue] = useState([]);

  const handleNewSearchValue = (newSearchValue) => {
    const newSearchValues = [newSearchValue, ...searchValue];
    setSearchValue(newSearchValues);
  };

  return (
    <>
      <Title text="GifsApp" />
      <GifSearch onNewSearchValue={handleNewSearchValue} />

      <section>
        {searchValue.length > 0 && (
          <ol>
            {searchValue.map((value) => {
              return (
                <div key={value}>
                  <h1>{value}</h1>
                  <GifGrid key={value} currentSearchValue={value} />
                </div>
              );
            })}
          </ol>
        )}
      </section>
    </>
  );
}

export default App;
