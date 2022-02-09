import TopTracksData from '../types'

export default function mergeData(oldData?: TopTracksData, newData?: TopTracksData): TopTracksData | undefined {
  if (!newData) {
    return
  }

  const oldNodes = oldData?.lastFM?.chart?.topTracks?.nodes || []
  const newNodes = newData?.lastFM?.chart?.topTracks?.nodes || []
  return {
    lastFM: {
      chart: {
        topTracks: {
          pageInfo: oldData?.lastFM?.chart?.topTracks?.pageInfo || newData?.lastFM?.chart?.topTracks?.pageInfo,
          nodes: [...oldNodes, ...newNodes]
        }
      }
    }
  }
}
