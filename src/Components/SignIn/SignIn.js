import { Box, Container, Typography, Grid, Button, TextField, InputAdornment, IconButton} from '@material-ui/core';
import '../Landing/Landing.css'
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFName, setLName, setLoader, setmail, setpassword, validateSignInForm } from '../../Redux/SignInSlice';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {
  const dispatch = useDispatch()
  const signin = useSelector((state) => state.signin)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleMouseDown = (e) => {
    e.preventDefault()
  }

  const handleClickShowPassword = () =>{
    setShowPassword((show) => !show)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFName(firstName))
    dispatch(setLName(lastName))
    dispatch(setmail(email))
    dispatch(setpassword(password))
    dispatch(validateSignInForm())
    dispatch(setLoader())
  }

  return (
    <>
      <Container component="main" maxWidth="xs"
        style={{
          marginTop : 50
        }}
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h5'
          style={{
            textAlign : 'center',
            fontSize : '1.2rem',
            fontFamily : 'tahoma',
            fontWeight : '400',
            color : 'rgb(5, 5, 39)'
          }}
          >
            Sign In
          </Typography>
          <Box component="form" style={{
            marginTop: 7
          }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  error={signin.validationErrorMsg.fnameError && signin.validationErrorMsg.fnameError.length ? true : false}
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  type='text'
                  autoFocus
                  value={firstName}
                  helperText={signin.validationErrorMsg.fnameError}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={
                    signin.validationErrorMsg.lnameError && signin.validationErrorMsg.lnameError.length ? true : false
                  }
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  type='text'
                  autoFocus
                  autoComplete='family-name'
                  value={lastName}
                  helperText={signin.validationErrorMsg.lnameError}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={signin.validationErrorMsg.emailError && signin.validationErrorMsg.emailError.length ? true : false}
                  id='email'
                  label='Email Address'
                  type='email'
                  autoComplete='email'
                  helperText={signin.validationErrorMsg.emailError}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={signin.validationErrorMsg.passwordError && signin.validationErrorMsg.passwordError.length ? true : false}
                  fullWidth
                  label='Password'
                  id='password'
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete='new-password'
                  onChange={(e) => setPassword(e.target.value)}
                  helperText={signin.validationErrorMsg.passwordError}
                  InputProps={{
                    endAdornment : 
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label = "toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDown}
                        >
                          {showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}
                        </IconButton>
                      </InputAdornment>
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' fullWidth style={{
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  borderRadius: '5px',
                  padding: '10px',
                  fontSize: '18px',
                }}
                onClick={handleSubmit}
                >Submit</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default SignIn
