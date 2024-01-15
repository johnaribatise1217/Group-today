import React from 'react'
import './Landing.css'
import { FaLayerGroup } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { openSignInView } from '../../Redux/SignInSlice';

const LandingNav = () => {
  const dispatch = useDispatch()
  return (
    <nav>
      <div className="landing-nav">
        <div className="logo">
          <FaLayerGroup/>
          <h2>GroupToday</h2>
        </div>
        <div className="actions">
          <button onClick={() => dispatch(openSignInView())}>Sign In</button>
          <button>About Project</button>
        </div>
      </div>
    </nav>
  )
}

export default LandingNav
