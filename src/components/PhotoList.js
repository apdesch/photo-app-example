import React, { Component } from 'react'
import Vibrant from 'node-vibrant'
import uniq from '../utils/uniq'

class PhotoList extends Component {
  constructor(props) {
    super(props)
    this.state = { color: {} }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.photos !== this.props.photos) {
      this.setPallette()
    }
  }
  setPallette() {
    this.props.photos.forEach(photo => {
      const img = document.createElement('img')
      img.setAttribute('src', photo.urls.small)
      img.addEventListener('load', () => {
        const vibrant = new Vibrant(photo.urls.small)
        vibrant
          .getPalette()
          .then(pallette => this.setState({
            color: {
              ...this.state.color,
              ...{ [photo.id]: pallette.LightVibrant.getHex() }
            }
          }))
      })
    })
  }
  render() {
    return (
      <div className='photos'>
        {uniq(this.props.photos).map(photo => {
          const { id, urls, alt_description } = photo
          return (
            <div
              key={id}
              className={`frame${this.state.color[id] ? ' ready' : ''}`}
              style={{ background: this.state.color[id] }}
              onClick={() => this.props.open({ ...photo, ...{ color: this.state.color[id] } })}
              role='button'
            >
              <img src={urls.small} alt={alt_description || id} />
            </div>
          )
        })}
      </div>
    )
  }
}
export default PhotoList
