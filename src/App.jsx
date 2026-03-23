import { useState } from 'react'
import './App.css'
import { Login} from './components/Login'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Home } from './components/Home'
import appFirebase from './credFirebase'
import { Toaster } from 'react-hot-toast'

const auth = getAuth(appFirebase)

function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (userFirebase)=>{
    if(userFirebase){
      setUser(userFirebase)
    }else{
      setUser(null)
    }
  })

  return (
      <>
        {user ? <Home emailUser={user.email} /> : <Login/>}
        <Toaster/>
      </>
  )
}

export default App
