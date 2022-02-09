import { ConditionalLink, PlayCount } from '@/components'
import { Album as AlbumData } from '../../types'
import classes from './Albums.module.scss'

export default function Album({ mbid, title, image, playCount }: AlbumData) {
  return (
    <ConditionalLink path="albums" mbid={mbid} className={classes.album}>
      <PlayCount count={playCount}/>
      <img src={image} alt={title} className={classes.img}/>
      <p className={classes.text}>{title}</p>
    </ConditionalLink>
  )
}
