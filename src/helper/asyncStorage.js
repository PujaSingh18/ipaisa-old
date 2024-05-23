const asyncStorage = {};
import AsyncStorage from '@react-native-async-storage/async-storage';
asyncStorage.setToken = token => AsyncStorage.setItem("AUTH_TOKEN", token);
asyncStorage.getToken = () => AsyncStorage.getItem("AUTH_TOKEN");
asyncStorage.setMobile = mobile => AsyncStorage.setItem("USER_MOBILE", mobile);
asyncStorage.getMobile = () => AsyncStorage.getItem("USER_MOBILE");

export { asyncStorage };

