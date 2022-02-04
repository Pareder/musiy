import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import classes from './AppLayout.module.scss'

export default function AppLayout() {
  return (
    <div className={classes.wrapper}>
      <Menu/>
      <div className={classes.content}>
        <Outlet/>
      </div>
    </div>
  )
}
