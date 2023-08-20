import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Icon from '@mui/material/Icon';


import { useState } from 'react';
import CaredComponent from './components/card'

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  
  <React.StrictMode>
    <div class="container">
      <div>
        <p>Icons</p>
        <AccessAlarmIcon />
        <ThreeDRotation />
      </div>
      <div>
        <p>Different Kind of variants</p>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Contained</Button>
      </div>
      <div>
        <p>Contained Variant button options</p>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" disableElevation>
      Disable elevation
    </Button>
      </div>
      <div>
        <p>Contained Variant button options</p>
      <Button variant="contained" size="small" disabled>
        Disabled
      </Button>
      <Button variant="contained" size="medium" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" size="large" disableElevation>
      Disable elevation
    </Button>
      </div>



      <div>
      
      <LoadingButton loading={true} variant="outlined">
      <span>Submit</span>
      </LoadingButton>

      <LoadingButton id="QW" loading={false} variant="outlined" onClick={(event) => event.target.loading=true}>
      <span>Submit</span>
    </LoadingButton>
      </div>


      <div>
        <CaredComponent /> 
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
