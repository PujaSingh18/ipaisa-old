import axios from 'axios';

export const getActiveNotifications =  () => {

  var urlString = 'http://192.168.1.10:4000/1stexpress';
  console.log(urlString);
axios
  .get(urlString)
  .then((response) => {
    return(JSON.stringify(response.data));
  })
  .catch(function (error) {
      // handle error
      //Alert.alert(error.message);
      console.log("malaya : " + response.data);
  })
  .finally(function () {
      // always executed
      //Alert.alert('Finally called');
  });
};
export const getActiveNotifications1 =  () => {
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://192.168.1.10:4000/1stexpress", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


};