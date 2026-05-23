import React from 'react'
import './EligibilityCard.css'

const EligiblityCard = ({title,text,logo}) => {
  return (
    <article className='eligiblity-card'>
              <h3>{title}</h3>
        <p>{text}</p>
    </article>
  )
}

export default EligiblityCard