import axios from 'axios';

const getData = async () => {

  const res = await axios.get(`https://sahyogportal-mp2-default-rtdb.firebaseio.com/Hospitals_Details.json`);
  console.log(res);

}

getData();