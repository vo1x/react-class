import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { useState } from "react";

function App(){

  const [searchResults, setSearchResults] = useState([]);
  
  return <div className="min-h-screen">
    {/* <Navbar></Navbar> */}

    <Searchbar setSearchResults={setSearchResults} />
    <Home searchResults={searchResults}/>
  </div>
}

export default App;