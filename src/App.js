import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type)=>{
          setAlert({
            msg: message,
            type: type
        });
        setTimeout(()=>{
            setAlert(null);
        }, 1500);
    };
  
    const toggleMode = ()=>{
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#053452';
            showAlert('Dark Mode Enabled!', 'success');
            // document.title = 'Text Utils - Dark Mode';
            setInterval(()=>{
                document.title = 'Text Utils is Amazing';
            }, 1000);
            setInterval(()=>{
                document.title = 'Install Text Utils Now';
            }, 1500);
        }else{
            setMode('light');
            document.body.style.backgroundColor = '#fff';
            showAlert('Light Mode Enabled!', 'success');
            document.title = 'Text Utils - Light Mode';
        }
    }
    return ( 
    <>  
    <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<TextForm heading='Enter The Text To Analyse' mode={mode} showAlert={showAlert}   />} />
        </Routes>
    </Router> 
    </>
    );
}

export default App;