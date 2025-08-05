import Searchbar from "./Searchbar";

function Navbar() {
  const elements = ["Home", "Contact", "Cart", "Orders"];

  return (
    <div
      className="w-full border 
                    flex justify-between p-2 items-center"
    >
      <h1>Logo</h1>
      <Searchbar></Searchbar>
      <ul className="flex items-center gap-4">
        {elements.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
