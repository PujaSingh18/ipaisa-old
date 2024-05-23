import React, { useEffect } from 'react';
import { asyncStorage } from '../helper/asyncStorage';
import AppNavigator from './AppNavigator';
import PublicNavigator from './PublicNavigator';

const RootNavigator = () => {
    const [tok, setTok] = useState("");
    const initApp = async () => {
    const authToken = await asyncStorage.getToken();
    setTok(authToken);
}
useEffect(() =>{
    initApp();
}, []);

if(tok) {
    return <AppNavigator/>
}
else{
    return <PublicNavigator/>
}
}

export default RootNavigator;