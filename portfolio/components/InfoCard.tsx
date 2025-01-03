import React from 'react'


function InfoCard({Title, description, children}: any) {
  return (
    <div>
        <h1 className='info-card-title'>{Title}</h1>
        <div className='info-card-description'>{description}</div>
        {children}
    </div>
  )
}

export default InfoCard