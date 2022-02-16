import ArtistsData from '../types'

export default function mergeData(oldData?: ArtistsData, newData?: ArtistsData): ArtistsData | undefined {
  if (!newData) {
    return
  }

  const oldNodes = oldData?.lastFM?.chart?.topArtists?.nodes || []
  const newNodes = newData?.lastFM?.chart?.topArtists?.nodes || []
  return {
    lastFM: {
      chart: {
        topArtists: {
          pageInfo: oldData?.lastFM?.chart?.topArtists?.pageInfo || newData?.lastFM?.chart?.topArtists?.pageInfo,
          nodes: [...oldNodes, ...newNodes]
        }
      }
    }
  }
}
