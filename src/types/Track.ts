import Artist from './Artist'

export default interface Track {
  mbid: string
  title: string
  duration: string
  playCount: number
  artist?: Pick<Artist, 'name' | 'image'>
  album?: {
    image?: string
  }
}
