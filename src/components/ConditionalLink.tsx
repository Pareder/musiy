import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ConditionalLinkProps {
  path: string
  mbid?: string
  className?: string
  children: ReactNode
}

export default function ConditionalLink({ path, mbid, className, children }: ConditionalLinkProps) {
  return mbid
    ? <Link to={`/${path}/${mbid}`} className={className}>{children}</Link>
    : <div className={className}>{children}</div>
}
