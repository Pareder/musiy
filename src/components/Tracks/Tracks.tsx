import TrackData from '@/types/Track'
import Track from './Track'

interface TracksProps {
  tracks: TrackData[]
}

export default function Tracks({ tracks }: TracksProps) {
  return (
    <div className="tracks">
      {tracks.map((track, index) => (
        <Track key={track.mbid || track.title} {...track} index={index}/>
      ))}
    </div>
  )
}
