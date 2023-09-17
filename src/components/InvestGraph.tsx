import {Line} from "react-chartjs-2";
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


export default function InvestGraph():React.ReactElement{

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

    const lineOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Investment Tracker",
          },
        },
      };
    
      const labels = [
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August"
    ];
    
      const debtData = {
        labels,
        datasets:[
          {
            label: 'Debt Progress YTD',
            data: labels.map((currItem,index) => 3 + (3 * index) ),
            borderColor: 'rgb(0, 255, 0)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ]
      }
   
    return(
        <>
        <Line options={lineOptions} data={debtData} />
        </>
    )
}