import React from 'react'
import './Plans.css'
import '../Programs/Programs.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

function Plans() {
  return (
    <div className='plans-container' id='plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>Voulez-Vous</span>
            <span>Nous</span>
            <span className='stroke-text'>Contactez</span>
        </div>

        {/* Plans Cards */}
        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    
                    {plan.icon}
                 
                    <span>{plan.name}</span>
                    <span> {plan.objet}</span>
                   
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans