import Artist from '@/types/Artist'

export interface Tag {
  name: string
}

export interface Album {
  mbid: string
  title: string
  image: string
  playCount: number
}

export interface ArtistData {
  name: string
  disambiguation: string
  country: string
  tags: {
    nodes: Tag[]
  }
  lastFM: {
    image: string
    biography: {
      summaryHTML: string
    }
    topAlbums: {
      nodes: Album[]
    }
    similarArtists: {
      nodes: Artist[]
    }
  }
}
