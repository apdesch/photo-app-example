import React from 'react'
import uniq from '../utils/uniq'

const PhotoList = ({ photos, open }) => (
  <div className='photos'>
    {uniq(photos).map(photo => {
      const { id, color, urls, alt_description } = photo
      return (
        <div
          key={id}
          className='frame'
          style={{ background: color }}
          onClick={() => open(photo)}
          role='button'
        >
          <img src={urls.small} alt={alt_description || id} />
        </div>
      )
    })}
  </div>
)
export default PhotoList
