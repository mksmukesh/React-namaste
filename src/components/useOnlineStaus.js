import { useState,useEffect } from "react";

const useOnlineStatus = () => {
  //code to perform online status
  const [onlineInfo, setOnlineInfo] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineInfo(false);
    });
    window.addEventListener("online",()=>setOnlineInfo(true))
  }, []);
  return onlineInfo;
};
export default useOnlineStatus;
