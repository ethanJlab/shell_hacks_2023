import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { useState } from 'react';


const StepperComponent = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {setActiveStep((prevStep) => prevStep + 1)}

    const handleBack = () => {setActiveStep((prevStep) => prevStep - 1)}

    return ( 
        <>
            <>  
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                >
                    Back
                </Button>
                <Button onClick={handleNext}>{activeStep === 2 ? 'Move on' : 'Next'}</Button>
            </>
            <div className=''>
                <Stepper activeStep={activeStep} className='w-1/2'>
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