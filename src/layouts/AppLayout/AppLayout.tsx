import { Outlet, useNavigate } from 'react-router-dom'
import backIcon from '@/img/icons/back.svg'
import classes from './AppLayout.module.scss'

export default function AppLayout() {
  const navigate = useNavigate()
  const back = () => navigate(-1)

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <button type="button" className={classes.back} onClick={back}>
          <img src={backIcon} alt="back" className={classes.icon}/>
          Back
        </button>
      </div>
      <Outlet/>
    </div>
  )
}
