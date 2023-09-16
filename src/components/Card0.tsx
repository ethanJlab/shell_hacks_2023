const Card0 = () => {
    return ( 
        <div>
            <span className="text-6xl max-w-[600px]">Welcome</span>
            <p className="text-2xl max-w-[600px] pt-3">Let's get started with your income</p>
            <div className="pt-5 w-1/2 flex">
                <span className="font-medium text-xl pr-1 pt-0.5">$</span>
                <input type="number" placeholder="12,000" min={12000}
                    className=" focus:outline-none text-neutral-950 rounded p-1 w-full"
                />
            </div>
            
        </div>
     );
}
 
export default Card0;