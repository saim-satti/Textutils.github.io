import React, { useState } from 'react';
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Abouts from './components/Abouts';
import Alert from './components/Alert';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   //Link
 } from "react-router-dom";
function App() {
const [mode,setMode]=useState('light');
const [alert,setAlert]=useState(null);

const showAlert = (message,type)=>{
   setAlert({
      msg:message,
      type:type
   })
   setTimeout(() => {
      setAlert(null);
   }, 1500);
}
const toggleMode =()=>{
   if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#2b2644';
      showAlert("Dark mode has been enabled","sucess");
      //document.title="TextUtils - Dark Mode";
      /*
      setInterval(() => {
         document.title="TextUtils is amazing Mode";
      }, 2000);
      setInterval(() => {
         document.title="Install TextUtils Now";
      }, 1500);
      */
   }
   else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled","sucess");
      //document.title="TextUtils - Light Mode";
   }
}
  return (
   <>
  <Router>
<Navbar title="Texutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>   
         <Route exact path="/about" element={<Abouts mode={mode}/>} /> 
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - word counter,character counter" mode={mode} />} />
          </Routes>
</div>
</Router>
</>
  );
}

export default App;
