import { Link } from 'react-router-dom'
import round from '@/utils/round'
import Artist from '../../types'
import sound from '@/img/icons/sound.svg'
import classes from './ArtistBlock.module.scss'


export default function ArtistBlock({ mbid, name, image, playCount }: Artist) {
  return (
    <div className={classes.artist}>
      <Link to={`artist/${mbid}`} className={classes.meta}>
        <img src={image} alt={name} className={classes.img}/>
        <div className={classes.info}>
          <img src={sound} alt="plays count" className={classes.icon}/>
          <span>{round(playCount)}</span>
        </div>
      </Link>
      <p className={classes.text}>{name}</p>
    </div>
  )
}
