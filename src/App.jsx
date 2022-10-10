import './App.css'
import {auth} from './firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Admin from './Components/Admin'
import SignIn from './Components/SignIn'
function App() {
  const [user] = useAuthState(auth)


  return (
    <>
      {user ? <Admin /> : <SignIn />}
    </>
  )
}

export default App
