export interface Tag {
  name: string
}

export interface ArtistData {
  name: string
  disambiguation: string
  country: string
  tags: {
    nodes: Tag[]
  }
  theAudioDB: {
    biography: string
    thumbnail: string
  }
}
