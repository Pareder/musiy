import ArtistData from '@/types/Artist'
import cx from '@/utils/classnames'
import { ConditionalLink } from '@/components'
import PlayCount from '../PlayCount'
import classes from './Artist.module.scss'

interface ArtistProps extends ArtistData {
  className?: string
}

export default function Artist({ mbid, name, image, playCount, className }: ArtistProps) {
  return (
    <div className={cx(classes.artist, className)}>
      <ConditionalLink path="artists" mbid={mbid} className={classes.meta}>
        <img src={image} alt={name} className={classes.img}/>
        <PlayCount count={playCount}/>
      </ConditionalLink>
      <p className={classes.text}>{name}</p>
    </div>
  )
}
