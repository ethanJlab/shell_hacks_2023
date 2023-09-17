import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import LineGraph from "../components/LineGraph";
import InvestGraph from "../components/InvestGraph";

export default function DashboardPage(): React.ReactElement {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Budget Tracking",
      },
    },
  };

  const labels = [
    "Supermarkets",
    "Restaurants",
    "Merchandise",
    "Services",
    "Entertainment",
    "Home Improvement",
    "Gasoline",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Current Spending",
        data: labels.map(() => 150),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Target Spending",
        data: labels.map(() => 560),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="w-full h-screen bg-black flex">
      {/* Section For the GPT Recommendation */}
      <div className="h-full w-1/3 bg-neutral-900 rounded-lg m-3.5 align-self-start">
        <div className="bg-neutral-700  h-5/6 m-5">GPT Suggestions</div>
      </div>
      {/* Right half of screen that contains Debts Investments and Budget */}
      <div className="h-full flex flex-col w-2/3  align-self-end ">
        {/* Top half that contains the Debts Visual and Invests visual */}
        <div className=" h-full flex flex-row items-center bg-neutral-800 rounded-lg m-3.5">
          <div className="w-1/2 h-full p-3">
            <LineGraph />
            
          </div>
          <div className=" w-1/2 h-full p-3">
            <InvestGraph />
          </div>
        </div>
        {/* Bottom Half that contains the Budget Visual */}
        <div className="h-1/2 bg-neutral-800 rounded-lg m-3.5  flex justify-center m-2">
          <div className=" w-10/12 ">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
