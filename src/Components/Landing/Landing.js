import React, { useState } from 'react'
import './Landing.css'
import LandingNav from './LandingNav'
import Main from './Main/Main'
import {Modal, Backdrop, Container, Fade, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { closeView } from '../../Redux/SignInSlice'
import SignIn from '../SignIn/SignIn'

const Landing = () => {
  const signin = useSelector((state) => state.signin)
  return (
    <div className="landing-container">
      <LandingNav/>
      <Main/>
      <ModalSignin/>
      {
        signin.isSubmitting ?
          <div className="spinner">
            <div className="loading"></div>
          </div> : <div></div>
      }
    </div>
  )
}

const getModalStyle = () => {
  const top = 50
  const left = 50
  return {
    top : `${top}%`,
    left : `${left}%`,
    transform : `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles((theme) => ({
  paper : {
      position : 'absolute',
      width: theme.spacing(80),
      height: theme.spacing(75),
      backgroundColor : theme.palette.background.paper,
      boxShadow : theme.shadows[10],
      borderRadius : '1rem',
  }
}))

const ModalSignin = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const view = useSelector((state) => state.signin.view)
  const [modalStyle] = useState(getModalStyle)

  const closeModal = () => {
    dispatch(closeView())
  }

  const body = (
    <Container>
      {
        view === 'SIGNIN' && 
        <Fade in={view === 'SIGNIN'}>
          <Paper
            elevation={3}
            variant='outline'
            square
            style={modalStyle}
            className={classes.paper}
          >
            <SignIn/>
          </Paper>
        </Fade>
      }
    </Container>
  )

  return(
    <>
      <div>
        <Modal
          open={view !== null}
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          onClose={closeModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 2000,
          }}
        >
          {body}
        </Modal>
      </div>
    </>
  )
}

export default Landing
