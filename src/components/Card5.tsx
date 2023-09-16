const Card5 = () => {
    const investmentMoneyResult = 20000

    return ( 
        <div>
            <p className="text-6xl">With {investmentMoneyResult} you can buy:</p>
            <ul className="flex flex-col gap-5 pt-5 text-2xl text-center">
                <li>Down payment on new car</li>
                <li>Pay off some student loan debt</li>
                <li>Vacation to Bali</li>
            </ul>
        </div>
     );
}
 
export default Card5;