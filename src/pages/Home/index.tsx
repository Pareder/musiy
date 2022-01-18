import {
  useQuery,
  gql
} from '@apollo/client'
import { Loader } from '@/components'
import Artist from './types'
import ArtistBlock from './components/ArtistBlock/ArtistBlock'
import classes from './Home.module.scss'

const TOP_ARTISTS = gql`
  query GetTopArtists {
    lastFM {
      chart {
        topArtists(first: 10) {
          nodes {
            mbid
            name
            image
            playCount
          }
        }
      }
    }
  }
`

interface TopArtistsData {
  lastFM: {
    chart: {
      topArtists: {
        nodes: Artist[]
      }
    }
  }
}

export default function Home() {
  const { loading, data } = useQuery<TopArtistsData>(TOP_ARTISTS)
  const topArtists = data?.lastFM?.chart?.topArtists?.nodes || []

  return (
    <div className={classes.container}>
      {loading && <Loader/>}
      {!loading && (
        <>
          <h1 className={classes.title}>Top Artists worldwide <span className={classes.text}>*based on <a href="https://www.last.fm/" target="_blank" rel="nofollow noopener noreferrer">Last.fm</a></span></h1>
          {topArtists.map(artist => <ArtistBlock key={artist.mbid} {...artist}/>)}
        </>
      )}
    </div>
  )
}
