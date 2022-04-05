import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store';
import { Provider } from 'react-redux'
// import DoctorsInfo from './Components/DoctorsCard'
// import DoctorConatinerCard from './Components/DoctorContainerCard'
// import Hospital from './Check';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <App/>
     {/* <DoctorConatinerCard doctorsArray={[1, 2, 3]} />  */}
     {/* <Hospital/>  */}
    </Provider>
    </Router>
   
  </React.StrictMode>,
  
  document.getElementById('root')
);


