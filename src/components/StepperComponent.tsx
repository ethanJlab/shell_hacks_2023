import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { number } from 'prop-types';
import { useState } from 'react';


type StepperComponentProps = {
    activeStep: number,
}

const StepperComponent:React.FC<StepperComponentProps> = ({activeStep}) => {
   
    return ( 
        <>
        
            <div className='w-3/4'>
                <Stepper activeStep={activeStep}>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>

                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                </Stepper>
            </div>
            
            
        </>
        
     );
}
 
export default StepperComponent;