import React from 'react'
import Header from './Header/Header'
import './Hero.css'
import Heart from '../assets/heart.png'
import hero_image from '../assets/hero_image5.png'
import hero_image_back from '../assets/hero_image_back.png'
import Calories from '../assets/calories.png'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'
function Hero() {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='hero' id='home'>
        <div className="blur hero-blur">
        </div>
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
                <motion.div
                    initial={{left: mobile? "168px":"490px"}}
                    whileInView={{left: '8px'}}
                    transition= {{...transition, type: 'tween'}}>
                </motion.div>
                <span> Nous créons l’avenir technologique des entreprises au TCHAD

</span>
            </div>
            {/* <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape</span>
                    <span> Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>
                    best Wesite
                    </span>
                </div>
            </div> */}
            {/* figures */}
            <div className="figures">
                <div>
                    {/* <span>
                       +140
                    </span>
                    <span>Expert Coach</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>Members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>Fitness Program</span> */}
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    />
                   
                    <p>La Startup <span className='stroke-text'>HANADARNA</span> littéralement « De chez nous » en arabe local 
                        (tchadien) est une entreprise spécialisée dans le développement des 
                        solutions informatiques et numériques pour mettre en avant des réponses 
                        aux besoins des particuliers, des entreprises et des institutions. Elle travaille 
                        à la promotion de l’innovation numérique comme facteur clé du changement 
                        présent et futur sur des thématiques telles que l’Education, la santé, la 
                        sécurité, l’environnement, la gestion des ressources humaines et des 
                        services. 
                    </p>
                </div>
            </div>
            {/* buttons*/}
            <div className="hero-buttons">
                <button className='btn'> A-propos</button>
                <button className="btn"> Nous contacter</button>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'>
            <Link
            to='join-us'
            spy={true}
            smooth={true}
            > Join Now</Link>
            </button>
            {/* <motion.div 
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition= {transition}
            className='heart-rate'>
                <img src={Heart} alt="" />
                <span> Heart Rate</span>
                <span>116BPM</span>
            </motion.div> */}
            {/* image */}
            <img src={hero_image} alt="" className='hero_image' />
            <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition= {transition}
            src={hero_image_back} alt="" className='hero_image_back' />

            {/* Calories */}
            <motion.div
                initial={{right: '37rem'}}
                whileInView={{right: '28rem'}}
                transition= {transition}
                className="calories">
                <img src={Calories} alt="" />
                <div>
                <span> Solution numerique pour vous</span>
                {/* <span>220 Kcal</span> */}
                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default Hero