import round from '@/utils/round'
import sound from '@/img/icons/sound.svg'
import classes from './PlayCount.module.scss'

interface Props {
  count: number
}

export default function PlayCount({ count }: Props) {
  return (
    <div className={classes.container}>
      <img src={sound} alt="plays count" className={classes.icon}/>
      <span>{round(count)}</span>
    </div>
  )
}
