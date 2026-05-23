import React from 'react'
import './Eligiblity.css'
import EligiblityCard from '../EligiblityCard/EligiblityCard'
import { assets } from '../../assets/progrmData'

const Eligiblity = () => {
  return (
    <div id="eligibility" className="eligibility-container">
      <h2>Eligibility Criteria</h2>
      <hr />
      <p>Here are the eligibility criteria for our program:</p>
      <div className='eligibility-card-container'>
        <EligiblityCard title={"Education:"} text="B-tech with 50%+ percentile" />
        <EligiblityCard title={"Experience:"} text="Minimum 2 years of experience"/>
        <EligiblityCard title={"Application Deadline:"} text="31st July 2026. "/>
        <EligiblityCard title={"Contact for Queries:"} text="+91 98765 43210."/>
      
      </div>
    </div>
  )
}

export default Eligiblity