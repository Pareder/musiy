import { Album as AlbumData } from '../../types'
import Album from './Album'
import classes from './Albums.module.scss'

interface AlbumsProps {
  albums: AlbumData[]
}

export default function Albums({ albums }: AlbumsProps) {
  return (
    <>
      <h2>Top albums</h2>
      <div className={classes.container}>
        {albums.map(album => <Album key={album.mbid || album.title} {...album}/>)}
      </div>
    </>
  )
}
