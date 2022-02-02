import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import config from '@/config'
import AppLayout from '@/layouts/AppLayout/AppLayout'
import Home from '@/pages/Home'
import Artist from '@/pages/Artist'
import Album  from '@/pages/Album'
import '@/index.scss'

const client = new ApolloClient({
  uri: config.graphqlURL,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<AppLayout />}>
            <Route path="artist/:mbid" element={<Artist />} />
            <Route path="album/:mbid" element={<Album />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  )
}