import Pagination from '@/types/Pagination'
import Artist from '@/types/Artist'

export default interface ArtistsData {
  lastFM: {
    chart: {
      topArtists: {
        pageInfo: Pagination
        nodes: Artist[]
      }
    }
  }
}
