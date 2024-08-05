import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check if online
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    //whenever the user goes offline then set status offline
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    //whenever the user goes offline then set status online
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus; //returns boolean value
};

export default useOnlineStatus;
