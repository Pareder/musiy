import Pagination from '@/types/Pagination'
import Track from '@/types/Track'

export default interface TopTracksData {
  lastFM: {
    chart: {
      topTracks: {
        pageInfo: Pagination
        nodes: Track[]
      }
    }
  }
}
