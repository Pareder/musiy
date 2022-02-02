import dayjs from 'dayjs'
import { Recording } from '../../types'
import classes from './Recordings.module.scss'

interface RecordingsProps {
  recordings: Recording[]
}

export default function Recordings({ recordings }: RecordingsProps) {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {recordings.map(({ title, length }) => (
          <tr key={title}>
            <td>{title}</td>
            <td>{dayjs(length).format('m:ss')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}