import { Tag as TagData } from '../../types'
import classes from './Tags.module.scss'

export default function Tag({ name }: TagData) {
  return (
    <div className={classes.tag}>
      {name}
    </div>
  )
}
