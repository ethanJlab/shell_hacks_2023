const Card2 = () => {
    const income:number = 10000;

    return ( 
        <div>
            <span>Budget Summary</span>
            <p>With ${income}, this is how we recommend you budget</p>
            <ul>
                <li>Rent: </li>
                <li>Groceries: </li>
                <li>Investments: </li>
                <li>Savings: </li>
                <li>Disposable Income: </li>
            </ul>
        </div>
     );
}
 
export default Card2;