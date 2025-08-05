import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { useState } from "react";

import { Toaster } from "sonner";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="min-h-screen ">
        {/* <Navbar></Navbar> */}

        <Searchbar
          setSearchResults={setSearchResults}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Home searchResults={searchResults} isLoading={isLoading} />
      </div>
      <Toaster position="top-right" richColors={true}/>
    </>
  );
}

export default App;
