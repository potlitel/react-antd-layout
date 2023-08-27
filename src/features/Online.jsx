import React, { useState, useEffect } from "react";
import { WifiOutlined } from "@ant-design/icons";
import { Offline, Online } from "react-detect-offline";
import { Tooltip } from "antd";
import wifiOffline from "../assets/wifiOff.png";

export const OnlineCmp = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);
  return (
    // <div>
    //   {isOnline ? (
    //     <p>You are online.</p>
    //   ) : (
    //     <p>You are offline. Please check your internet connection.</p>
    //   )}
    // </div>
    <>
      <Online>
        <Tooltip
          title="Only shown when you're online"
          color="#108ee9"
          key="#108ee9"
        >
          <WifiOutlined
            style={{
              fontSize: "26px",
            }}
          />
        </Tooltip>
      </Online>
      <Offline>
        <img alt="alt" src={wifiOffline} width={"26px"} />
      </Offline>
    </>
  );
};
