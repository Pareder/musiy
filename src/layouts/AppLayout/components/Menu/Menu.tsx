import Link from './Link'
import home from '@/img/icons/home.svg'
import crown from '@/img/icons/crown.svg'
import album from '@/img/icons/album.svg'
import artist from '@/img/icons/artist.svg'
import classes from './Menu.module.scss'

export default function Menu() {
  return (
    <>
      <input type="checkbox" id="menu__checkbox" className={classes.input}/>
      <label htmlFor="menu__checkbox" className={classes.label}/>
      <div className={classes.menu}>
        <h1 className={classes.title}>Musiy</h1>
        <Link to="/" icon={home} className={classes.link}>Home</Link>
        <Link to="/songs" icon={crown} className={classes.link}>Top Songs</Link>
        <Link to="/albums" icon={album} className={classes.link}>Albums</Link>
        <Link to="/artists" icon={artist} className={classes.link}>Artists</Link>
      </div>
    </>
  )
}
