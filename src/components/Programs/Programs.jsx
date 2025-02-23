import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};
function Programs() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explorer nos</span>
            <span>Services</span>
            <span className='stroke-text'>pour vos besoins</span>
        </div>

        <motion.div 
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        className="program-categories">
            {programsData.map((program)=>(
             <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span> {program.details}</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" />
                </div>
             </div>   
            ))}
        </motion.div>
    </div>
  )
}

export default Programs