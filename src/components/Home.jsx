import { Button } from 'antd'
import { signOut, getAuth } from 'firebase/auth'
import React from 'react'

const auth = getAuth()

export function Home(props) {

  return (
    <div>
      <p>Bienvenido {props.emailUser}</p>
      <Button type='primary' onClick={()=>signOut(auth)}>Cerrar sesión</Button>
    </div>
  )
}
