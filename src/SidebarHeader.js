import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./StateProvider";
const SidebarHeader = () => {
  const [{ user }, dispatch] = useStateValue();

  const photo = localStorage.getItem("user");
  console.log(photo.photo);
  return (
    <div className="sticky-top bg-white">
      <div
        className="card-header shadow"
        style={{
          backgroundColor: "rgb(237 237 237 / 35%)",
          borderRadius: "0px 0px 0px 0px",
        }}
      >
        <div className="d-flex justify-content-between">
          <img
            src={user.photoURL}
            width="40"
            height="40"
            className="rounded-circle"
            alt=""
            srcset=""
          />
          <div
            className="d-flex justify-content-between"
            style={{ justifyContent: "space-between" }}
          >
            <div
              style={{ color: "grey", cursor: "pointer" }}
              className="mx-3 mt-1 "
            >
              <DonutLargeIcon />
            </div>{" "}
            <div
              style={{ color: "grey", cursor: "pointer" }}
              className="mx-3 mt-1 "
            >
              <ChatIcon />
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
      <div className="card-header bg-light">
        <div className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
          <div className="d-flex">
            <div className="m-2" style={{ color: "grey", cursor: "pointer" }}>
              <SearchIcon />
            </div>{" "}
            <input
              type="text"
              name=""
              id=""
              className=" pb-2 px-2 mx-1 form-control bg-white"
              style={{ border: "none", borderRadius: "20px" }}
              placeholder="Search or start new chat"
            />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default SidebarHeader;
