import { FormGroup, FormControlLabel, Checkbox} from "@mui/material";
import { useState } from 'react'

type Card1Props = {
    handleCreditDebt: (credit:number) => void;
    handleMortgageDebt: (mortgage:number) => void;
    handleStudentDebt: (student:number) => void;
    handleAutoDebt: (auto:number) => void;
}

const Card1:React.FC<Card1Props> = (props:Card1Props) => {
    const [creditCheck, setCreditCheck] = useState(false);
    const [mortgageCheck, setMortgageCheck] = useState(false);
    const [studentCheck, setStudentCheck] = useState(false);
    const [autoCheck, setAutoCheck] = useState(false);

    return ( 
        <div>
            <p className="text-6xl max-w-[600px] pt-3">Let's talk about debt</p>
            
            <FormGroup>
                <div className="grid grid-cols-2 grid-rows-2 pt-10 gap-10">
                    <div>
                        <FormControlLabel control={<Checkbox onClick={() => setCreditCheck((prev) => !prev)}/>} label="Credit"/>
                        <div className={`flex flex-col ${creditCheck ? 'visible' : 'invisible'}`}>
                            <label htmlFor="credit">How Much?</label>
                            <input type="number" placeholder="1,000" id='credit'
                            className={`focus:outline-none text-neutral-950 rounded p-1 w-3/4`}
                            onChange={(e) => {
                                props.handleCreditDebt(e.target.valueAsNumber);
                            }}
                            />
                        </div>
                        
                    </div>
                    
                    <div>
                        <FormControlLabel control={<Checkbox onClick={() => setMortgageCheck((prev) => !prev)}/>} label="Mortgage"/>
                        <div className={`flex flex-col ${mortgageCheck ? 'visible' : 'invisible'}`}>
                            <label htmlFor="mortgage">How Much?</label>
                            <input type="number" placeholder="1,000" id='mortgage'
                            className=" focus:outline-none text-neutral-950 rounded p-1 w-3/4"
                            onChange={(e) => {
                                props.handleMortgageDebt(e.target.valueAsNumber);
                            }}
                            />
                        </div>
                        
                        
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox onClick={() => setStudentCheck((prev) => !prev)}/>} label="Student"/>
                        <div className={`flex flex-col ${studentCheck ? 'visible' : 'invisible'}`}>
                            <label htmlFor="student">How Much?</label>
                            <input type="number" placeholder="1,000" id='student'
                            className=" focus:outline-none text-neutral-950 rounded p-1 w-3/4"
                            onChange={(e) => {
                                props.handleStudentDebt(e.target.valueAsNumber)
                            }}
                            />
                        </div>
                        
                    </div>
                    
                    <div>
                        <FormControlLabel control={<Checkbox onClick={() => setAutoCheck((prev) => !prev)}/>} label="Auto"/>
                        <div className={`flex flex-col ${autoCheck ? 'visible' : 'invisible'}`}>
                            <label htmlFor="auto">How Much?</label>
                            <input type="number" placeholder="1,000" id='auto'
                            className=" focus:outline-none text-neutral-950 rounded p-1 w-3/4"
                            onChange={(e) => {
                                props.handleAutoDebt(e.target.valueAsNumber)
                            }}
                            />
                        </div>
                        
                    </div>
                    
                </div>
                
            </FormGroup>
            
        </div>
     );
}
 
export default Card1;