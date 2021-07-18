import { React, useEffect, useState } from "react";
import Chatbar from "./Chatbar";
import Sidebar from "./Sidebar";
import db from "./firebase";
import SidebarCollection from "./SidebarCollection";
import { useParams } from "react-router-dom";

const WholeChats = () => {
  const { roomId } = useParams();
  return (
    <div>
      <div className="ml-5 mr-5 mt-4 mb-3">
        <div
          className="shadow bg-white"
          style={{ height: "94vh", flex: 1, borderRadius: "0px 0px 0px 0px" }}
        >
          <div className="d-flex">
            <div
              className="side_bar"
              style={{
                flex: "0.30",
                borderRight: "1px solid grey",
                height: "94vh",
              }}
            >
              <SidebarCollection />
            </div>
            <div
              className="chatt_bar"
              style={{
                flex: "0.70",
                height: "100%",
              }}
            >
              {!roomId ? "Hello Guys" : <Chatbar />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeChats;
