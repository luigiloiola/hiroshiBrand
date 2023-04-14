import React from 'react'
import Cards from './Cards'

//TODO: generate cards automatically


function Projects() {

  const title = 'title'
  const japTitle = 'JapTitle'
  const thumbnail = 'urlToThumbnail'
  const video = 'urlToVideo'

  return (
    <div>
      <div className='center-container-projects'>
        <div>Recent Projects</div>
        <ul>
          <Cards video={video} title={title} japTitle={japTitle} thumbnail = {thumbnail}  />
        </ul>
      </div>
    </div>
  )
}

export default Projects
