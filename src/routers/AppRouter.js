import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from "react-redux";

import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from "../actions/auth";
import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  
/////////// Para mantener el estado de la autenticación al recargar el navegador//////////
  useEffect(() => {
    
    firebase.auth().onAuthStateChanged( async(user) => {

      if ( user?.uid ){
        dispatch( login( user.uid, user.displayName ) );
        setisLoggedIn(true);
        
        dispatch( startLoadingNotes( user.uid ) );

      } else {
        setisLoggedIn(false);
      }
      setChecking(false);
    });

  }, [ dispatch ]);
////////////////////////////////////////////////////////////////////////////////////////////////7

  if(checking){
    return (
      // Aquí se pude retornar un  componente para motrar una pantalla de carga más elaborada
      <h1>Cargando autenticación, por favor espere.</h1>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            path="/auth" 
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute 
            exact 
            path="/" 
            component={JournalScreen} 
            isAuthenticated={isLoggedIn}
          />

          <Redirect to="/auth/login" />

        </Switch>
      </div>
    </Router>
  );
};
