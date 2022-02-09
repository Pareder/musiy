import dayjs from 'dayjs'
import TrackData from '@/types/Track'
import classes from './Tracks.module.scss'

interface TrackProps extends TrackData {
  index: number
}

export default function Track({ title, duration, artist, album, index }: TrackProps) {
  const time = Number(duration) ? dayjs(Number(duration)).format('m:ss') : null

  return (
    <div className={classes.outer}>
      <div className={classes.track}>
        <span className={classes.index}>{index + 1}</span>
        <img src={album?.image || artist?.image} alt={title} className={classes.img}/>
        <div className={classes.info}>
          <p className={classes.title}>{title}</p>
          <p className={classes.artist}>{artist?.name}</p>
        </div>
        {time && <span className={classes.duration}>{time}</span>}
      </div>
    </div>
  )
}
