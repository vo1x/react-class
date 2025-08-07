import { useState } from "react";
import { toast } from "sonner";

function Searchbar({ setSearchResults, isLoading, setIsLoading }) {
  // const { setSearchResults, isLoading, setIsLoading } = props;
  const [searchTerm, setSearchTerm] = useState("");
  // const [loading, setLoading] = useState(false);

  function handleInputChange(event) {
    const query = event.target.value;
    setSearchTerm(query);
  }

  async function handleSearch() {
    if (searchTerm === "") {
      return toast.warning("Serach term is required.");
    }

    try {
      setIsLoading(true);
      const url = `https://dummyjson.com/products/search?q=${searchTerm}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("Error");

      const data = await response.json();
      setSearchResults(data.products);

      setIsLoading(false);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
      return toast.error(error.message);
    }
  }

  return (
    <div className="border flex items-center">
      <button className="border bg-teal-600 p-2" onClick={handleSearch}>
        {isLoading ? "Loading" : "Search"}
      </button>

      <input value={searchTerm} onChange={handleInputChange} type="text" />
    </div>
  );
}

export default Searchbar;
