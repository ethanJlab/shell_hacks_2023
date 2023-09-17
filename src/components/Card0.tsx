type Card0Props = {
    handleIncome: (income:number) => void;
    handleIncomeError: (flag:boolean) => void;
    incomeError: boolean;
}

const Card0:React.FC<Card0Props> = ({handleIncome, incomeError, handleIncomeError}) => {
    return ( 
        <div>
            
            <span className="text-6xl max-w-[600px]">Welcome</span>
            <p className="text-2xl max-w-[600px] pt-3">Let's get started with your income</p>
            <div className="pt-5 w-1/2">
                <div className="flex">
                    <span className="font-medium text-xl pr-1 pt-0.5">$</span>
                    <input type="number" placeholder="12,000"
                        className=" focus:outline-none text-neutral-950 rounded p-1 w-full"
                        onChange={(e) => {
                            handleIncome(e.target.valueAsNumber);
                            handleIncomeError(false);
                        }}
                    />
                </div>
                
                {incomeError && <span className="text-red-400 text-lg">Must input a value greater than 0</span>}
            </div>
            
        </div>
     );
}
 
export default Card0;