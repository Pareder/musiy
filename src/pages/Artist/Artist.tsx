import { useParams } from 'react-router-dom'
import {
  useQuery,
  gql
} from '@apollo/client'
import { ArtistData } from '@/pages/Artist/types'
import { Loader } from '@/components'
import Tags from './components/Tags'
import classes from './Artist.module.scss'

const ARTIST = gql`
  query GetArtist($mbid: MBID!) {
    lookup {
      artist(mbid: $mbid) {
        name
        disambiguation
        country
        tags {
          nodes {
            name
          }
        }
        theAudioDB {
          biography
          thumbnail
        }
      }
    }
  }
`

interface ArtistQueryData {
  lookup: {
    artist: ArtistData
  }
}

export default function Artist() {
  const { mbid } = useParams()
  const { loading, data } = useQuery<ArtistQueryData>(ARTIST, {
    variables: { mbid }
  })
  const artist = data?.lookup?.artist
  const tags = (artist?.tags?.nodes || []).slice(0, 5)

  return loading ? <Loader/> : (
    <div>
      <div className={classes.info}>
        <img src={artist?.theAudioDB?.thumbnail} alt={artist?.name} className={classes.img}/>
        <div className={classes.description}>
          <h2 className={classes.name}>{artist?.name}</h2>
          <Tags tags={tags}/>
          <p className={classes.bio}>{artist?.theAudioDB?.biography}</p>
        </div>
      </div>
    </div>
  )
}
