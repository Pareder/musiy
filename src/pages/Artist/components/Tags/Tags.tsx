import { Tag as TagData } from '../../types'
import Tag from './Tag'
import classes from './Tags.module.scss'

interface TagsProps {
  tags?: TagData[]
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div className={classes.container}>
      {(tags || []).map(tag => <Tag key={tag.name} {...tag}/>)}
    </div>
  )
}
