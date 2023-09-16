export default function DashboardPage(): React.ReactElement {
  return (
    <div className="w-full h-screen  flex">
        {/* Section For the GPT Recommendation */}
      <div className="h-full w-1/3  bg-purple-300 align-self-start">
        GPT Suggestions
      </div>
      {/* Right half of screen that contains Debts Investments and Budget */}
      <div className="h-full flex flex-col w-2/3 bg-indigo-500 align-self-end ">
        {/* Top half that contains the Debts Visual and Invests visual */}
        <div className=" h-1/2 flex flex-row">
            <div className="w-1/2 bg-green-300">
                Debt Visual
            </div>
            <div className="bg-red-300 w-1/2 ">
                Investment Visual
            </div>
        </div>
        {/* Bottom Half that contains the Budget Visual */}
        <div className="h-1/2 bg-white">
            Budget Visual
        </div>
      </div>
    </div>
  );
}
