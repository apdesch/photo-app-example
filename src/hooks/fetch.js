import { useState, useEffect } from 'react'

const useFetch = (url = "", props = {}, deps = []) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const fetchData = async () => {
    try {
      const response = await fetch(url, props);
      const results = await response.json();
      setError(null);
      setData(results);

    } catch (error) {
      const errorText = await error.text()
      setError(errorText)
    }
  }
  useEffect(() => { fetchData() }, deps)

  return { data, error }
}

export default useFetch
