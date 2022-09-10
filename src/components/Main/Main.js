import React from "react";
import "./Main.css";
import Episodes from "../Episodes/Episodes";
import Pagination from "../Pagination/Pagination";

function Main() {
  const [episodes, setEpisodes] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  console.log(pageNumber);
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, [pageNumber]);

  return (
    <div className="main">
      <Pagination setPageNumber={setPageNumber} />
      <Episodes episodes={episodes} />
    </div>
  );
}

export default Main;
