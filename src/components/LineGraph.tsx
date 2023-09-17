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


export default function LineGraph():React.ReactElement{

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
            text: "Debt Tracker",
          },
        },
      };
    
      // const labels = [
      //   "January",
      //   "February",
      //   "March",
      //   "April",
      //   "May",
      //   "June",
      //   "July",
      // ];

      const labels = [
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March"
    ];

      //To do this math we need an average percentage of the total dollar amount as well as the type, WE can add this up on the user screen 
      // pass a prop to this value where its simply the value
    
      const debtData = {
        labels,
        datasets:[
          {
            label: 'Debt Progress YTD',
            data: labels.map((currItem,index) => 3 + (3 * index) ),
            borderColor: 'rgb(255, 0, 0)',
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