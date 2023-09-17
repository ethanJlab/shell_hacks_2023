
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

export default function FlexBar(props:any){

    const income = props.income;
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
        "Dec 2018",
        "Aug 2020",
        "Feb 2022",
    ];

    const gains = [(income*1.22*1.22).toFixed(2),(income*1.22).toFixed(2), income];
    
      const data = {
        labels,
        datasets: [
          {
            label: "Money Gained",
            data: labels.map((currItem, index) => gains[index]),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };

      return(
        <Bar data={data} options={options}></Bar>
      )
}