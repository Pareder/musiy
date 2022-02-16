import { gql } from '@apollo/client'
import useScrollLoad from '@/utils/useScrollLoad'
import { Loader, Artist as ArtistBlock } from '@/components'
import ArtistsData from './types'
import mergeData from './utils/mergeData'
import classes from './Artists.module.scss'

const ARTISTS = gql`
  query GetArtists($after: String) {
    lastFM {
      chart {
        topArtists(first: 100, after: $after) {
          pageInfo {
            hasNextPage
            startCursor
            endCursor
          }
          nodes {
            mbid
            name
            image
            playCount
          }
        }
      }
    }
  }
`

export default function Artists() {
  const { loading, data } = useScrollLoad<ArtistsData>(ARTISTS, mergeData, 'lastFM.chart.topArtists.pageInfo.endCursor')
  const artists = data?.lastFM?.chart?.topArtists?.nodes || []

  return loading ? <Loader/> : (
    <>
      <h1>Artists</h1>
      <div className={classes.artists}>
        {artists.map(artist => <ArtistBlock key={artist.mbid || artist.name} {...artist} className={classes.artist}/>)}
      </div>
    </>
  )
}
