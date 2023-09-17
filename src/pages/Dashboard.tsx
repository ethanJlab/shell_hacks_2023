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
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "@mui/base";


export default function DashboardPage(props: any): React.ReactElement {
  const { state } = useLocation();

  const { userId } = state;

  const [tipString, setTipString] = useState("");


  const defaultDebt = {
    debtType: 0,
    debtAmount: 0,
  }

  useEffect(() => {
    //here is where we really need to gather some of this user info 
  })

  console.log(userId);


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

  // const labels = [
  //   "Supermarkets",
  //   "Restaurants",
  //   "Merchandise",
  //   "Services",
  //   "Entertainment",
  //   "Home Improvement",
  //   "Gasoline",
  // ];

  //   "Housing": "25%
  //   "Transportation": "15%
  //   "Food": "15%
  //   "Savings and Investments": "10%
  //   "Utilities and Bills": "10%
  //   "Healthcare": "5%
  //   "Debt Repayment": "10%
  //   "Entertainment and Leisure": "5%
  //   "Personal Care and Miscellaneous": "5%

  const labels = [
    "Housing",
    "Transportation",
    "Food",
    "Utilities and Bills",
    "Healthcare",
    "Debt Repayment",
    "Entertainment",
    "Miscellaneous",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Current Spending",
        data: labels.map((currItem, index) => 50),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Max Spending",
        data: labels.map(() => 560),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="w-full h-screen bg-black flex">
      {/* Section For the GPT Recommendation */}
      <div className="h-full w-1/3 bg-neutral-900 rounded-lg m-3.5 align-self-start">
        <div className="bg-neutral-700  h-5/6 m-5">
          {tipString};<Button onClick={handleClick}>Generate Tip</Button>
        </div>
      </div>
      {/* Right half of screen that contains Debts Investments and Budget */}
      <div className="h-full flex flex-col w-2/3  align-self-end ">
        {/* Top half that contains the Debts Visual and Invests visual */}
        <div className=" h-full flex flex-row items-center bg-neutral-800 rounded-lg m-3.5">
          <div className="w-1/2 h-full p-3">

            <LineGraph debts={defaultDebt}/>
            

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

async function gptComplete() {
  const url = "http://localhost:5000/openai/gpt4";

  const requestBody = {
    prompt:
      "You are helping people learn about financial literacy give advice on the prompt only answering in a few short sentences no Numbers",
    input: "Give some tips on debt management",
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  console.log("from function")
  console.log(response.body)

  return response.body;
}
