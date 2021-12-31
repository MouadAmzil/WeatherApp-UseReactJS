import './App.css';
import From from './Component/Form';
import React from 'react';
import CoustomData from './Hooks/CoustomData';
import IsLoad from './Component/IsLoad';
import DisplayWeather from './Component/DisplayWeather';


function App() { 

  const { IsData, IsError, Isloading, GetInputData, Getdata } = CoustomData();
  const FormMethod = async (value) => {
    if (!value || value.length === 0) return;
    GetInputData(value);
  }

  return (
    <div style={{ backgroundColor: "#282c34" }} >
      <h1 className="text-center mt-2 color-whith ">Weather App</h1>
      <div className="d-flex justify-content-center mt-5 ">

        {IsData && <From PassMethodeToFomr={FormMethod} ERROR={IsError} />}
        {Isloading && <IsLoad />}
        {(!Isloading && !IsData && !IsError) && <DisplayWeather DATA={Getdata} />}
        {/* <DisplayWeather DATA={Getdata} /> */}
      </div>
    </div>


  );
}

export default App;
