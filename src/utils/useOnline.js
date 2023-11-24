import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const onlineClickHandler = () => {
      setIsOnline(true);
    };
    const offlineClickHandler = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", onlineClickHandler);
    window.addEventListener("offline", offlineClickHandler);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("online", onlineClickHandler);
      window.removeEventListener("offline", offlineClickHandler);
    };
  }, []);

  return isOnline;
};

export default useOnline;
