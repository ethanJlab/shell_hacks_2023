const Card4 = () => {
    return ( 
        <div className="text-2xl pb-10">
            <div className="flex justify-center pb-5">
                <div className="w-96 h-96 bg-green-500 rounded-lg"></div>
            </div>
            
            <p>If you invested at these dates, this is the money you could have now:</p>
            <ul className="text-center pt-5">
                <li>Dec 2018:</li>
                <li>Aug 2020:</li>
                <li>Feb 2022:</li>
            </ul>
        </div>
     );
}
 
export default Card4;