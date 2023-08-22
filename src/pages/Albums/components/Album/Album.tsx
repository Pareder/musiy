import { ConditionalLink, PlayCount } from '@/components'
import Tags from '@/pages/Artist/components/Tags'

import { AlbumWithArtist } from '../../types'
import classes from './Album.module.scss'

interface AlbumProps {
  album: AlbumWithArtist
}

export default function Album({ album }: AlbumProps) {
  return (
    <ConditionalLink path="albums" mbid={album.mbid} className={classes.album}>
      <p className={classes.artist}>{album.artist}</p>
      <div className={classes.imageWrapper}>
        <PlayCount count={album.playCount}/>
        <img src={album.image} alt={album.title} className={classes.img}/>
      </div>
      <p className={classes.title}>{album.title}</p>
      <Tags tags={album.topTags.nodes}/>
    </ConditionalLink>
  )
}
