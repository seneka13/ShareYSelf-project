import React from 'react'
import AuthOn from './AuthOn'
import AuthOff from './AuthOff'

function AuthNav() {
  return (
    <>
      {localStorage.getItem('token') ? <AuthOn /> : <AuthOff />}
    </>
  )
}

export default AuthNav
