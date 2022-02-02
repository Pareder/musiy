import { useParams } from 'react-router-dom'
import {
  useQuery,
  gql
} from '@apollo/client'
import { Loader } from '@/components'
import { AlbumData } from './types'
import Recordings from './components/Recordings'
import classes from './Album.module.scss'

const ALBUM = gql`
  query GetAlbum($mbid: MBID!) {
    lookup {
      release(mbid: $mbid) {
        title
        date
        recordings {
          nodes {
            title
            length
          }
        }
      }
    }
  }
`

interface AlbumQueryData {
  lookup: {
    release: AlbumData
  }
}

export default function Album() {
  const { mbid } = useParams()
  const { loading, data } = useQuery<AlbumQueryData>(ALBUM, {
    variables: { mbid }
  })
  const album = data?.lookup?.release
  const recordings = album?.recordings?.nodes || []

  return loading ? <Loader/> : (
    <div>
      <h2>{album?.title} - {album?.date}</h2>
      <Recordings recordings={recordings}/>
    </div>
  )
}
