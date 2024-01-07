import { useEffect, useState } from "react";

const useOnline=()=>{
    const [isOnline,setIsOnline]=useState(true);
    const onlineStatus=()=>{
        setIsOnline(true);
    }
    const offlineStatus=()=>{setIsOnline(false);
    }
    useEffect(()=>{
        window.addEventListener("online",onlineStatus)
        window.addEventListener("offline",offlineStatus)

        return()=>{
            window.removeEventListener("online",onlineStatus);
            window.removeEventListener("offline",offlineStatus);
        }

    },[])


    return isOnline;
}
export default useOnline;