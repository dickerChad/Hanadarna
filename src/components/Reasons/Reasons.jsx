import React from 'react'
import './Reasons.css'
import image1 from '../../assets/calories1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/cb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
function Reasons() {
  return (
    <div className='Reasons' id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            
        </div>
        <div className="right-r">
            <span> Quelques raisons</span>
            <div>
                <span className="stroke-text">
                    Pourquoi
                </span>
                <span> CHOISIR HANADARNA?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt=""></img>
                    <span>Notre Metier</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Notre expertise</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Notre Approche</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Nos outils de developpement</span>
                </div>
            </div>
            <span style={{
                color:"var(--gray)",
                fontWeight: "normal",
                }}> 
            NOS PARTENAIRES
            </span>
            <div className="parteners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Reasons