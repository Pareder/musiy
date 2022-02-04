import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PlayCount } from '@/components'
import { Album as AlbumData } from '../../types'
import classes from './Albums.module.scss'

interface ConditionalWrapperProps {
  mbid?: string
  children: ReactNode
}

function ConditionalWrapper({ mbid, children }: ConditionalWrapperProps) {
  return mbid
    ? <Link to={`/albums/${mbid}`} className={classes.album}>{children}</Link>
    : <div className={classes.album}>{children}</div>
}

export default function Album({ mbid, title, image, playCount }: AlbumData) {
  return (
    <ConditionalWrapper mbid={mbid}>
      <PlayCount count={playCount}/>
      <img src={image} alt={title} className={classes.img}/>
      <p className={classes.text}>{title}</p>
    </ConditionalWrapper>
  )
}
