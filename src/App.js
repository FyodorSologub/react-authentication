import { useSelector } from "react-redux";

// components
import { Authenticated } from "./pages/Authenticated";
import { Authentication } from "./pages/Authentication";

const App = () => {
  // state getters
  const isAuthenticated = useSelector((state) => state.Authentication.isAuthenticated);

  return (
    <>
      { isAuthenticated === false && <Authentication /> }
      { isAuthenticated === true &&<Authenticated /> }
    </>
  )
}

export default App;