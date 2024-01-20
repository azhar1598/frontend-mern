import { useDispatch } from "react-redux"
import Auth from "./Auth"
import { loggedinUser } from "../redux/slice/userSlice"

function Home() {
  const dispatch = useDispatch()
  return (
    <div>
      <p>Home</p>
      <button onClick={() => { dispatch(loggedinUser({})) }}>Logout</button>
    </div>

  )
}

export default Auth(Home)