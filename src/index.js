// libs
import React, { Fragment, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Waypoint } from 'react-waypoint'
// components
import PhotoList from './components/PhotoList'
import FullPhoto from './components/FullPhoto'
import SearchInput from './components/SearchInput'
// helpers
import useFetch from './hooks/fetch'
import slug from './utils/slug'
import { url, token } from './utils/config'
// styles
import './index.css'

const App = () => {
  // query states
  const [query, setQuery] = useState('fashion')
  const [page, setPage] = useState(1)
  // photo states
  const [photos, setPhotos] = useState([])
  const [photo, setFullPhoto] = useState(null)
  // fetch
  const endpoint = `${url}?query=${slug(query, '+')}&page=${page}`
  const params = { headers: { Authorization: `Client-ID ${token}` } }
  // hook
  const { data, error } = useFetch(endpoint, params, [page])

  const nextPage = () => page < 5 ? setPage(page + 1) : null

  const handleSearch = event => {
    event.preventDefault()
    window.scrollTo(0, 0)
    if (query.length) {
      setPage(1)
      setPhotos([])
    }
  }

  useEffect(() => {
    if (photo) document.body.classList.add('full-active')
    else document.body.classList.remove('full-active')
  }, [photo])

  useEffect(() => {
    if (data && data.results) setPhotos(prev => prev && [
      ...prev,
      ...data.results
    ])
  }, [data])

  return (
    <div className='App'>
      <SearchInput
        change={event => setQuery(event.target.value)}
        search={handleSearch}
        placeholder='Search Photos'
      />
      {error && <div className='error'>Oops! {error}</div>}
      {!error && !photos.length && <div className='loader' />}
      {!error && photos && (
        <Fragment>
          <PhotoList photos={photos} open={setFullPhoto} />
          <Waypoint onEnter={nextPage} bottomOffset='-200%' />
        </Fragment>
      )}
      {!error && photo && <FullPhoto
        photo={photo}
        close={() => setFullPhoto(null)}
      />}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

