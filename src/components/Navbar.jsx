import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

function Navbar() {
  const elements = ["Home", "Contact", "Cart", "Orders"];

  return (
    <div
      className="w-full border 
                    flex justify-between p-2 items-center"
    >
      <h1>Logo</h1>
      <Searchbar></Searchbar>
      <div className="flex items-center gap-4">
       <Link to={'/home'}>Home</Link>
       <Link to={'/orders'}>Orders</Link>
       <Link to={'/cart'}>Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
