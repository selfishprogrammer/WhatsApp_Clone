import { React, useState, useEffect } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import Chats from "./Chats";
import db from "./firebase";
import firebase from "firebase";
import { firestore } from "./firebase";
import { useParams } from "react-router-dom";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined";
import { useStateValue } from "./StateProvider";
const Chatbar = () => {
  const { roomId } = useParams();
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState([]);

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setName(snapshot.data().name));
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMsg(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  const ChatMessages = (e) => {
    e.preventDefault();
    console.log(input);
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div>
      <div
        className="card-header shadow-sm"
        style={{
          backgroundColor: "rgb(237 237 237 / 35%)",
          borderRadius: "0px 0px 0px 0px",
        }}
      >
        <div className="d-flex justify-content-between">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.t44StI1PBftxvw-hcLfjtwAAAA&pid=Api&P=0&w=300&h=300"
            width="40"
            height="40"
            className="rounded-circle"
            alt=""
            srcset=""
          />
          <h6 className="mr-auto" style={{ marginLeft: "20px" }}>
            {" "}
            {name} <br />
            {/* <span style={{ color: "grey", fontSize: "12px" }}>
              Last seen at{" "}
              {new Date(
                msg[msg.length - 1]?.timestamp?.toDate()
              ).toLocaleTimeString()}
            </span> */}
          </h6>{" "}
          <div
            className="d-flex justify-content-between ml-auto"
            style={{ justifyContent: "space-between" }}
          >
            <div
              style={{ color: "grey", cursor: "pointer" }}
              className="ml-3 mt-1"
            >
              <SearchIcon />
            </div>{" "}
            <div
              style={{ color: "grey", cursor: "pointer" }}
              className="ml-3 mt-1"
            >
              <MoreVertIcon />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div
        className="shadow-sm"
        style={{
          width: "100%",
          height: "76vh",
          backgroundImage:
            "url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          overflowY: "auto",
        }}
      >
        <Chats />
      </div>{" "}
      <div
        className="card-header shadow-sm"
        style={{
          backgroundColor: "rgb(237 237 237 / 35%)",
          borderRadius: "0px 0px 0px 0px",
        }}
      >
        <form>
          <div className="d-flex">
            <div
              className="d-flex justify-content-between mr-auto"
              style={{ justifyContent: "space-between" }}
            >
              <div
                style={{ color: "grey", cursor: "pointer" }}
                className="ml-2 mr-2 mt-2 "
              >
                <EmojiEmotionsOutlinedIcon />
              </div>{" "}
              <div
                style={{ color: "grey", cursor: "pointer" }}
                className="ml-2 mr-3 mt-2 "
              >
                <AttachmentOutlinedIcon />
              </div>{" "}
            </div>{" "}
            <input
              type="text"
              name="messages"
              id="messages"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Type a message"
              style={{ borderRadius: "20px", width: "100%" }}
              className="form-control mt-1"
            />
            <button
              type="submit"
              style={{ display: "none" }}
              onClick={ChatMessages}
            ></button>
            <div
              style={{ color: "grey", cursor: "pointer" }}
              className="ml-3 mt-2 "
            >
              <MicIcon />
            </div>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Chatbar;
