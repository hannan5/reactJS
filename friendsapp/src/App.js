import "antd/dist/antd.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import './App.css';
import CurentUserContext from "./context/CurrentUserContext";
import { auth, fire, Firestore } from "./firebase/firebase";
import Routes from './routes/routes';
import Routesnotlogin from "./routes/routesnotlogin";
import { doc, onSnapshot } from "firebase/firestore";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>


function App() {

  const [firebaseAuth, setFirebaseAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFirebaseAuth(true);
        setCurrentUser(user)
        onSnapshot(doc(Firestore, 'profile',`${user.uid}`),(doc)=>{
          setCurrentUser(doc.data())
        })

      }

    });

  }, [])

  return (
    <div className="App">
      <CurentUserContext.Provider value={currentUser}>
      {firebaseAuth ? <Routes /> : <Routesnotlogin />}
</CurentUserContext.Provider>
    </div>
  );
}

export default App;
