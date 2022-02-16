import { gql } from '@apollo/client'
import { Loader, Tracks } from '@/components'
import useScrollLoad from '@/utils/useScrollLoad'
import TopTracksData from './types'
import mergeData from './utils/mergeData'

const TOP_TRACKS = gql`
  query GetTopInfo($after: String) {
    lastFM {
      chart {
        topTracks(first: 50, after: $after) {
          pageInfo {
            hasNextPage
            startCursor
            endCursor
          }
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

export default function Songs() {
  const { loading, data } = useScrollLoad<TopTracksData>(TOP_TRACKS, mergeData, 'lastFM.chart.topTracks.pageInfo.endCursor')
  const topTracks = data?.lastFM?.chart?.topTracks?.nodes || []

  return loading ? <Loader/> : (
    <>
      <h1>Top Songs</h1>
      <div>
        <Tracks tracks={topTracks}/>
      </div>
    </>
  )
}
