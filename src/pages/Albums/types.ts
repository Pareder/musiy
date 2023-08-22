export interface Album {
  mbid: string
  title: string
  image: string
  playCount: number
  topTags: {
    nodes: {
      name: string
    }[]
  }
}

export interface AlbumWithArtist extends Album {
  artist: string
}
