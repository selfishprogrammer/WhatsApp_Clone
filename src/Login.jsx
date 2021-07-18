import React from "react";
import { auth, provider } from "./firebase";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const LoginUsingGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        localStorage.setItem("user", {
          name: result.user.bc.displayName,
          email: result.user.bc.email,
          id: result.user.Aa,
          photo: result.user.providerData[0].photoURL,
        });
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div>
      <div className="ml-5 mr-5 mt-4 mb-3">
        <div
          className="shadow bg-white"
          style={{ height: "94vh", flex: 1, borderRadius: "0px 0px 0px 0px" }}
        >
          <div className="container">
            <div className="col-md-6 offset-md-3">
              <div className="d-flex justify-content-center" style={{}}>
                <div
                  className="shadow-lg "
                  style={{
                    width: "100%",
                    marginTop: "180px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="text-center">
                    <img
                      src="http://cdn.osxdaily.com/wp-content/uploads/2016/08/whatsapp-icon.jpg"
                      width="80"
                      height="80"
                      alt=""
                      srcset=""
                      style={{ marginTop: "55px", marginBottom: "35px" }}
                    />{" "}
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn form-control my-4"
                      style={{
                        borderRadius: "0",
                        backgroundColor: "#0a8d48",
                        fontFamily: "math",
                        color: "white",
                        width: "20rem",
                      }}
                      onClick={LoginUsingGoogle}
                    >
                      <b> Login To WhatsApp Using Google </b>{" "}
                    </button>{" "}
                  </div>{" "}
                  <h6
                    className="text-center mb-5 mt-2"
                    style={{ fontSize: "20px", fontFamily: "math" }}
                  >
                    <b> Created By Rahul Jha </b>{" "}
                  </h6>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
