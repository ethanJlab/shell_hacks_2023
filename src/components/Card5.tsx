const Card5 = (props:any) => {
    const investmentMoneyResult = props.results

    return ( 
        <div>
            <p className="text-6xl">With {investmentMoneyResult} you can:</p>
            <ul className="flex flex-col gap-5 pt-5 text-2xl text-center">
                <li>Pay off a car loan</li>
                <li>Pay off some student loan debt</li>
                <li>Vacation to In the States</li>
            </ul>
        </div>
     );
}
 
export default Card5;