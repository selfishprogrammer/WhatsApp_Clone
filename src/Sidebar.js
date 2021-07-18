import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import firebase from "firebase";
import db from "./firebase";
const Sidebar = ({ id, name }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  return (
    <>
      <div style={{ overflowY: "auto" }}>
        <Link to={`/rooms/${id}`} style={{ textDecoration: "black" }}>
          <div className="card-header " id="card">
            <div className="d-flex" style={{}}>
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.t44StI1PBftxvw-hcLfjtwAAAA&pid=Api&P=0&w=300&h=300"
                width="45"
                height="45"
                className="rounded-circle"
                alt=""
                srcset=""
              />
              <div
                className="mt-0"
                style={{
                  marginRight: "15px",
                  color: "black",
                  marginLeft: "15px",
                  flex: 1,
                }}
              >
                <h6>
                  {" "}
                  {name} <br />
                  <span style={{ color: "grey" }}>
                    {messages[messages.length - 1]?.message}
                  </span>{" "}
                </h6>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </Link>{" "}
      </div>{" "}
    </>
  );
};

export default Sidebar;
