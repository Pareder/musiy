import { ReactNode } from 'react'
import { Link as RouteLink, useMatch, useResolvedPath } from 'react-router-dom'
import cx from '@/utils/classnames'
import classes from './Menu.module.scss'

interface LinkProps {
  to: string
  icon: string
  className?: string
  children: ReactNode
}

export default function Link({ to, icon, className, children, ...props }: LinkProps) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: `${resolved.pathname}/*` })

  return (
    <RouteLink to={to} className={cx(match && classes.active, className)} {...props}>
      <img src={icon} alt="icon" className={classes.icon}/>
      {children}
    </RouteLink>
  )
}
