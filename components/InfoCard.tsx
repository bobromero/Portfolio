import React from 'react'


function InfoCard({Title, description, children}: any) {
  return (
    <div className='info-card'>
        <h1 className='info-card-title'>{Title}</h1>
        <div className='info-card-description'>{description}</div>
        <div className='info-card-content'>
          {children}
        </div>
    </div>
  )
}

export default InfoCard