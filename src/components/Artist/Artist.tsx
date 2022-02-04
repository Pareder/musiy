import { Link } from 'react-router-dom'
import ArtistData from '@/types/Artist'
import PlayCount from '../PlayCount'
import classes from './Artist.module.scss'


export default function Artist({ mbid, name, image, playCount }: ArtistData) {
  return (
    <div className={classes.artist}>
      <Link to={`/artists/${mbid}`} className={classes.meta}>
        <img src={image} alt={name} className={classes.img}/>
        <PlayCount count={playCount}/>
      </Link>
      <p className={classes.text}>{name}</p>
    </div>
  )
}
