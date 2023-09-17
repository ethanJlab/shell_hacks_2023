import InvestGraph from "./InvestGraph";
import FlexBar from "./FlexBar";

const Card4 = (props:any) => {

    

    const income:number = props.input *0.1;

    console.log(income);
    return ( 
        <div className="text-2xl pb-10">
            <div className="flex justify-center pb-5">
                <div className="w-96 h-96 bg-neutral-900 rounded-lg">
                    <FlexBar income={income}></FlexBar>
                </div>
            </div>
            
            <p>If you invested 10% at these dates, this is the money you could have now:</p>
            
            <ul className="text-center pt-5">
                <li>Dec 2018:{(income*1.22*1.22).toFixed(2)} </li>
                <li>Aug 2020: {(income*1.22).toFixed(2)}</li>
                <li>Feb 2022: {income.toFixed(2)}</li>
            </ul>
        </div>
     );
}
 
export default Card4;