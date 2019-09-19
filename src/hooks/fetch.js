import { useState, useEffect } from 'react'

const useFetch = (url, props, deps = []) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const fetchData = () => {
    fetch(url, props)
      .then(response => {
        if (response.ok) return response
        else throw response
      })
      .then(response => response.json())
      .then(results => {
        setError(null)
        setData(results)
      })
      .catch(err => {
        err.text().then(text => setError(text))
      })
  }
  useEffect(() => { fetchData() }, deps)

  return { data, error }
}

export default useFetch
