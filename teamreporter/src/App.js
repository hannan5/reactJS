import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import './App.css';
import Routes from './routes/routes.js'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import CurentUserContext from "./context/currentusercontext";
import LoginRoutes from "./routes/loginroute";

function App() {
  const [firebaseAuth, setFirebaseAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFirebaseAuth(true);
        setCurrentUser(user)
      }

    });

  }, [])
  return (
    <div className="App">
      <CurentUserContext.Provider value={currentUser}>
      {firebaseAuth ? <LoginRoutes /> : <Routes />}
</CurentUserContext.Provider>    </div>
  );
}
export default App;