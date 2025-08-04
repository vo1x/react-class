import { useState } from "react";

function Searchbar(props) {
  const { setSearchResults } = props;
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(event) {
    const query = event.target.value;
    setSearchTerm(query);
  }

  async function handleSearch() {
    if (searchTerm === "") return;

    const url = `https://dummyjson.com/products/search?q=${searchTerm}`;
    const response = await fetch(url);

    if (!response.ok) console.error("Error occureed");

    const data = await response.json();
    setSearchResults(data.products);
    // console.log(data);
  }

  return (
    <div className="border flex items-center">
      <button className="border bg-teal-600 p-2" onClick={handleSearch}>
        Search
      </button>
      <input value={searchTerm} onChange={handleInputChange} type="text" />
    </div>
  );
}

export default Searchbar;
