export interface Recording {
  title: string
  length: number
}

export interface AlbumData {
  title: string
  date: string
  recordings: {
    nodes: Recording[]
  }
}
