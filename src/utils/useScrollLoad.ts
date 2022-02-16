import { useEffect } from 'react'
import { DocumentNode, useQuery } from '@apollo/client'
import get from './get'

export default function useScrollLoad<TData = any>(query: DocumentNode, mergeFn: (oldData?: TData, newData?: TData) => TData | undefined, endPath: string) {
  const { data, previousData, refetch, ...other } = useQuery<TData>(query)
  const mergedData = mergeFn(previousData, data)
  const endCursor = get(mergedData, endPath)

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.offsetHeight - window.innerHeight - window.scrollY < 500) {
        refetch({ after: endCursor })
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [endCursor])

  return {
    ...other,
    refetch,
    data: mergedData
  }
}
