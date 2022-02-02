import ArtistData from '@/types/Artist'
import { Artist as ArtistBlock } from '@/components'
import classes from './SimilarArtists.module.scss'

interface SimilarArtistsProps {
  artists: ArtistData[]
}

export default function SimilarArtists({ artists }: SimilarArtistsProps) {
  return (
    <>
      <h2>Similar Artists</h2>
      <div className={classes.container}>
        {artists.map(artist => <ArtistBlock key={artist.mbid} {...artist}/>)}
      </div>
    </>
  )
}
