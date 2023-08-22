import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import AppLayout from '@/layouts/AppLayout'
import InnerLayout from '@/layouts/InnerLayout'
import Home from '@/pages/Home'
import Songs from '@/pages/Songs'
import Artists from '@/pages/Artists'
import Artist from '@/pages/Artist'
import Albums from '@/pages/Albums'
import Album  from '@/pages/Album'
import '@/index.scss'

const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKEND_URL,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<InnerLayout />}>
              <Route path="songs" element={<Songs />} />
              <Route path="artists" element={<Artists />} />
              <Route path="artists/:mbid" element={<Artist />} />
              <Route path="albums">
                <Route index element={<Albums />} />
                <Route path=":mbid" element={<Album />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}