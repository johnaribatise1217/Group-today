import React from 'react'
import '../Landing.css'
import {motion} from 'framer-motion'
import { FaLayerGroup } from 'react-icons/fa6'

const Main = () => {
  return (
    <div className='landing-main'>
      <motion.div
        className='top'
        animate={{x : 45}}
        transition={{
          type : "spring",
          ease : "linear",
          duration : 10,
          stiffness: 115,
        }}
      >
        <motion.p 
          style={{
            position : 'relative',
            fontSize : "1rem",
            display: 'flex',
            gap: "1rem",
            alignItems : 'center',
            fontFamily : 'tahoma'
          }}
        ><FaLayerGroup/> <h2><span>Start</span> Grouping Today</h2></motion.p>
      </motion.div>
      <div className="texts">
        <p>Start grouping without bias! Group Today provides the platform to group items according to your choice and sort at random and selectively. Sign In to create an account and enjoy the seamless user experience.</p>
      </div>
    </div>
  )
}

export default Main
