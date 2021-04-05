import React from 'react';
import './Main.css';
import Episodes from '../Episodes/Episodes';
import Pagination from '../Pagination/Pagination'

function Main() {
 const [episodes, setEpisodes] = React.useState([])
  React.useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then(res => res.json())
    .then(data => setEpisodes(data.results))
  }, [])

  return (
    <div className="main">  
     <Pagination />
     <Episodes  episodes={episodes}/>
    </div>
  );
}

export default Main;