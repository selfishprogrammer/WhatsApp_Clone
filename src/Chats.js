import { React, useEffect, useRef, useState } from "react";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

const Chats = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  return (
    <div>
      <div className="container">
        <div className="my-4">
          {messages.map((message) =>
            message.name != user.displayName ? (
              <p
                className="shadow-sm my-3 bg-white mr-auto p-2"
                style={{
                  borderRadius: "5px",
                  fontFamily: "math",
                  fontSize: "17px",
                  width: "18rem",
                }}
              >
                {message.message}{" "}
                <span
                  className="d-flex justify-content-between mx-1"
                  style={{
                    justifyContent: "space-between",
                    color: "grey",
                    fontSize: "8px",
                  }}
                >
                  <b> {message.name} </b>
                  <b>
                    {" "}
                    {new Date(
                      message.timestamp.toDate()
                    ).toLocaleTimeString()}{" "}
                  </b>
                </span>
              </p>
            ) : (
              <p
                className="shadow-sm my-3 ml-auto  p-2"
                style={{
                  borderRadius: "5px",
                  fontFamily: "math",
                  fontSize: "17px",
                  backgroundColor: "#dcf8c6",
                  width: "18rem",
                }}
              >
                {message.message}
                <span
                  className="d-flex justify-content-end mx-1"
                  style={{
                    justifyContent: "space-between",
                    color: "grey",
                    fontSize: "8px",
                  }}
                >
                  <b>04:30:45 PM</b>{" "}
                  <span
                    style={{
                      color: "blue",
                      fontSize: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    <DoneAllIcon />
                  </span>
                </span>
              </p>
            )
          )}

          {/* {messages.map((message) => (
            <p
              className="shadow-sm my-3 ml-auto  p-2"
              style={{
                borderRadius: "5px",
                fontFamily: "math",
                fontSize: "17px",
                backgroundColor: "#dcf8c6",
                width: "18rem",
              }}
            >
              {message.message}
              <span
                className="d-flex justify-content-end mx-1"
                style={{
                  justifyContent: "space-between",
                  color: "grey",
                  fontSize: "14px",
                }}
              >
                <b> 04 : 00 </b>
                <span
                  style={{
                    color: "blue",
                    fontSize: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <DoneAllIcon />
                </span>
              </span>
            </p>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Chats;
