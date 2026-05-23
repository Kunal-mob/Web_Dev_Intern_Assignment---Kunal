import React from 'react'
import './EligibilityCard.css'

const EligiblityCard = ({title,text,logo}) => {
  return (
    <div className='eligiblity-card'>
              <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default EligiblityCard