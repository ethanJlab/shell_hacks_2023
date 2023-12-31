type Card2Props = {
    income: number
}

const Card2:React.FC<Card2Props> = ({income}) => {
    let housing:string = (0.25 * income).toFixed(2);
    let transportation:string = (0.15 * income).toFixed(2);
    let food:string = (0.15 * income).toFixed(2);
    let utilities:string = (0.10 * income).toFixed(2);
    let healthcare:string = (0.05 * income).toFixed(2);
    let debtRepay:string = (0.10 * income).toFixed(2);
    let savings:string = (0.05 * income).toFixed(2);
    let investments:string = (0.05 * income).toFixed(2);
    let disposable:string = (0.10 * income).toFixed(2);
    

    return ( 
        <div className="text-center">
            <span className="text-center text-6xl">Budget Summary</span>
            <hr className="mt-3"/>
            <div className="text-left text-2xl">
                <p className="py-4">With a ${income} income, this is how we recommend you budget:</p>
                <ul className="pl-10 flex flex-col gap-1.5 pb-10">
                    <li>Housing: ${housing}</li>
                    <li>Utilities: ${utilities}</li>
                    <li>Food: ${food}</li>
                    <li>HealthCare: ${healthcare}</li>
                    <li>Transportation: ${transportation}</li>
                    <li>Savings: ${savings}</li>
                    <li>Disposable: ${disposable}</li>
                    <li>Debt Repayment ${debtRepay}</li>
                    <li>Investments: ${investments}</li>
                    
                </ul>
            </div>
            
        </div>
     );
}
 
export default Card2;