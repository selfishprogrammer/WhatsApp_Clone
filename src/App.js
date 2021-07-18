import logo from "./logo.svg";
import { useState, React, useEffect } from "react";
import { Route, BrowserRouter, Switch, useHistory } from "react-router-dom";
import Login from "./Login";
import WholeChats from "./WholeChats";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  //   useEffect(() => {
  //     const Users = localStorage.getItem("user");
  //     if (Users) {
  //       useStateValue(Users)
  //     }
  //   }, []);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Switch>
            <Route path="/rooms/:roomId">
              <WholeChats />
            </Route>
            <Route path="/">
              <WholeChats />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
