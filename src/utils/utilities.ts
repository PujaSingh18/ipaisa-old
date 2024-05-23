import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
// Subscribe
const Utilities=()=>{
const [isConnected, setIsConnected] = useState<boolean|null>(true);
  const checkConnectivity = async () => {
    const state = await NetInfo.fetch();
    setIsConnected(state?.isConnected);
    if (!state.isConnected) {
      
      Alert.alert(
        'No Internet Connection',
        'Please check your internet connection and try again.',
      );
    }

  };
  useEffect(() => {
    const intervalId = setInterval(checkConnectivity, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (

    isConnected
  );
}


  
  export default Utilities;