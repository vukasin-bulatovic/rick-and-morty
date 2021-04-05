import './Episode.css'
import {Link} from'react-router-dom'

const Episode = (props) =>{
    const {episode } = props

    return(
       <div className="layout">
        <div className="card">
            <img src={episode.image}/>
            <h3 className='heading'>{episode.name}</h3>
            <Link to={`/character/${episode.id}`}>
                <button className='btn'>Like</button>
            </Link>

        </div>
    </div> 
    )
}

export default Episode