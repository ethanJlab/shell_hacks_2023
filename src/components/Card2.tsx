const Card2 = () => {
    const income:number = 10000;

    return ( 
        <div className="text-center">
            <span className="text-center text-6xl">Budget Summary</span>
            <hr className="mt-3"/>
            <div className="text-left text-2xl">
                <p className="py-4">With ${income}, this is how we recommend you budget:</p>
                <ul className="pl-10 flex flex-col gap-1.5">
                    <li>Rent: </li>
                    <li>Groceries: </li>
                    <li>Investments: </li>
                    <li>Savings: </li>
                    <li>Disposable Income: </li>
                </ul>
            </div>
            
        </div>
     );
}
 
export default Card2;