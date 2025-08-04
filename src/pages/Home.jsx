import ResultCard from "../components/ResultCard";

function Home(props) {
  const { searchResults } = props;

  return (
    <div className="flex flex-col gap-4">
      {searchResults.map((result) => (
        <ResultCard result={result} />
      ))}
    </div>
  );
}

export default Home;
