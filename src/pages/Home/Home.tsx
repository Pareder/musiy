import {
  useQuery,
  gql
} from '@apollo/client'
import { Link } from 'react-router-dom'
import { Artist as ArtistBlock, Loader, Tracks } from '@/components'
import Artist from '@/types/Artist'
import Track from '@/types/Track'
import classes from './Home.module.scss'

const TOP_INFO = gql`
  query GetTopInfo {
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
        topTracks(first: 10) {
          nodes {
            mbid
            title
            duration
            playCount
            artist {
              name
              image(size: SMALL)
            }
            album {
              image(size: SMALL)
            }
          }
        }
      }
    }
  }
`

interface TopInfoData {
  lastFM: {
    chart: {
      topArtists: {
        nodes: Artist[]
      }
      topTracks: {
        nodes: Track[]
      }
    }
  }
}

export default function Home() {
  const { loading, data } = useQuery<TopInfoData>(TOP_INFO)
  const chart = data?.lastFM?.chart
  const topArtists = chart?.topArtists?.nodes || []
  const topTracks = chart?.topTracks?.nodes || []

  if (loading) {
    return <Loader/>
  }

  return (
    <div className={classes.content}>
      <div className={classes.tracks}>
        <div className={classes.heading}>
          <h3>Top 100</h3>
          <Link to="songs" className={classes.link}>Show all</Link>
        </div>
        <Tracks tracks={topTracks}/>
      </div>
      <div>
        <div className={classes.heading}>
          <h3>Top Artists</h3>
          <Link to="artists" className={classes.link}>Show all</Link>
        </div>
        <div className={classes.artists}>
          {topArtists.map(artist => <ArtistBlock key={artist.mbid} {...artist} className={classes.artist}/>)}
        </div>
      </div>
    </div>
  )
}
