import Episode from '../Episode/Episode'
import './Episodes.css'


const Episodes = (props) =>{
    return(
        <div className='episodes'>
            {props.episodes.map(episode => {
                return(
                    <Episode episode ={episode} key={episode.id}/>
                )
            })}
        </div>
    )
}

export default Episodes