import { React, useEffect, useState } from "react";
import db from "./firebase";
import Sidebar from "./Sidebar";

import SidebarHeader from "./SidebarHeader";

const SidebarCollection = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div>
      <div
        className="side_bar"
        style={{
          width: "100%",
          borderRight: "1px solid grey",
          height: "94vh",
          overflowY: "auto",
        }}
      >
        <SidebarHeader />{" "}
        {/* {rooms.map((room1) => {
                                <Sidebar />;
                                console.log(room1);
                              })} */}
        {rooms.map((room) => (
          <Sidebar key={room.id} id={room.id} name={room.data.name} />
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default SidebarCollection;
