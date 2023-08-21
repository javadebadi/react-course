import React from 'react';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Card } from '@mui/material';
import CaredComponent from './card'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';




const TestButton = () => {
  return (
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
  )
}

export default TestButton;