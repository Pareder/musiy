import { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Loader, Tracks } from '@/components'
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
  const { loading, data, previousData, refetch } = useQuery<TopTracksData>(TOP_TRACKS)
  const mergedData = mergeData(previousData, data)
  const chart = mergedData?.lastFM?.chart
  const endCursor = chart?.topTracks?.pageInfo?.endCursor
  const topTracks = chart?.topTracks?.nodes || []

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.offsetHeight - window.innerHeight - window.scrollY < 500) {
        refetch({
          after: endCursor
        })
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [endCursor])

  return loading ? <Loader/> : (
    <>
      <h1>Top Songs</h1>
      <div>
        <Tracks tracks={topTracks}/>
      </div>
    </>
  )
}
