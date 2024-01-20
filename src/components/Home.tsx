import { useDispatch, useSelector } from "react-redux"
import Auth from "./Auth"
import { loggedinUser } from "../redux/slice/userSlice"

function Home() {
  const dispatch = useDispatch()
  const err = useSelector((state: { errorReducer: { errMsg: string } }) => state.errorReducer.errMsg)

  return (
    <div>
      <p>Home {err}</p>
      <button onClick={() => { dispatch(loggedinUser({})) }}>Logout</button>
    </div>

  )
}

export default Auth(Home)