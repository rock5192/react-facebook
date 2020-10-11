import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  //signIn is a function
  const signIn = () => {
    //sign in....
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://3.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlk/A_3ZXg7xO4YyGrKDhMpr6YRgrtOMn9tHwCLcBGAs/s1600/f_logo_RGB-Blue_1024.png"
          alt="facebook logo"
        />
        <img
          className="logo__name"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYEVrHZWSIyy-XhKaPAJOrHM5PCU9chRlcFA&usqp=CAU"
          alt="facebook__name"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        SIGN IN
      </Button>
    </div>
  );
}

export default Login;
