import React from 'react'
import { useSelector } from 'react-redux'
import AuthOn from './AuthOn'
import AuthOff from './AuthOff'

function AuthNav() {
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }))

  return (
    <>
      {user ? <AuthOn /> : <AuthOff />}
    </>
  )
}

export default AuthNav
