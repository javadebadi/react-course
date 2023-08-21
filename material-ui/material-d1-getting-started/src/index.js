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

import { Container } from '@mui/material';
import { Box } from '@mui/material';

import TestButton from './components/test_buttons';
import TestContainers from './components/test_containers';



const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  
  <React.StrictMode>
    <TestContainers />
    <TestButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
