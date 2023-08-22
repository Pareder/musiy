import { gql, useQuery } from '@apollo/client'

import { Loader } from '@/components'

import { Album as AlbumType, AlbumWithArtist } from './types'
import Album from './components/Album'
import classes from './Albums.module.scss'

const ALBUMS = gql`
  query GetAlbums {
    lastFM {
      chart {
        topArtists(first: 10) {
          nodes {
            name
            topAlbums(first: 10) {
              nodes {
                mbid
                title
                image
                playCount
                topTags(first: 1) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

interface AlbumsQueryData {
  lastFM: {
    chart: {
      topArtists: {
        nodes: {
          name: string
          topAlbums: {
            nodes: AlbumType[]
          }
        }[]
      }
    }
  }
}

export default function Albums() {
  const { data, loading } = useQuery<AlbumsQueryData>(ALBUMS)
  const albums = data?.lastFM?.chart?.topArtists?.nodes
    .reduce<AlbumWithArtist[]>((res, artist) => {
      artist.topAlbums.nodes.forEach(album => {
        res.push({
          ...album,
          artist: artist.name,
        })
      })
      return res
    }, [])
    .sort(() => Math.random() - 0.5)
    || []

  if (loading) {
    return <Loader />
  }

  return (
    <div className={classes.container}>
      {albums.map(album => (
        <Album key={album.mbid || album.title} album={album}/>
      ))}
    </div>
  )
}
