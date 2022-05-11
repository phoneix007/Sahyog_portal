import axios from 'axios';

function setData(){
    axios.post('https://sahyogportal-mp2-default-rtdb.firebaseio.com/Hospitals/Live_Hospital.json' ,["Sir Shadi Lal Civil Hospital, Rewari","Hariom Agresen Hospital" , "Apollo Clinic, Rewari","marsh hospital" , "Mars Hospital", "Dr Rahul Dhingra's Jai Luxmi Dental Clinic"]);
}

setData();



