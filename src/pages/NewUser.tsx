import { useState } from 'react'
import { MoveLeft, MoveRight } from 'lucide-react';
import StepperComponent from '../components/StepperComponent';
import Card0 from '../components/Card0';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import Card5 from '../components/Card5';
import Auth0Card from '../components/Auth0Card';

const NewUser:React.FC = () => {


    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < 6) setActiveStep((prevStep) => prevStep + 1);
    }

    const handleBack = () => {setActiveStep((prevStep) => prevStep - 1)}


  return (
    <div className='h-full flex flex-col items-center text-[#FAF9F6]'>

        
      <div className='bg-neutral-800 min-h-[70vh] w-[720px] my-10 rounded-xl px-16 py-10 flex flex-col justify-between'>
        <>
          {activeStep === 0 && <Card0></Card0>}
          {activeStep === 1 && <Card1></Card1>}
          {activeStep === 2 && <Card2></Card2>}
          {activeStep === 3 && <Card3></Card3>}
          {activeStep === 4 && <Card4></Card4>}
          {activeStep === 5 && <Card5></Card5>}
          {activeStep === 6 && <Auth0Card></Auth0Card>}
        </>
        
        <div className='flex justify-between w-full justify-self-end'>
          <button disabled={activeStep === 0} onClick={handleBack} className=''><MoveLeft/></button>
          <button onClick={handleNext} className=''>{activeStep === 6 ? 'Create account' : <MoveRight/>}</button>
      
        </div>
      </div>
        

        <>  
            {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
            >
                Back
            </Button>
            <Button onClick={handleNext}>{activeStep === 6 ? 'Create account' : 'Next'}</Button> */}
            
            
        </>
      <StepperComponent activeStep={activeStep}/>
    </div>

  )
}
 
export default NewUser;