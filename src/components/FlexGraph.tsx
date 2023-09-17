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


export default function InvestGraph(props:any):React.ReactElement{

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

      const gains = [income, (income*1.22).toFixed(2), (income*1.22*1.22).toFixed(2)];

      

      console.log(gains);

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
        "Dec 2018",
        "Aug 2020",
        "Feb 2022",
    ];
    
      const debtData = {
        labels,
        datasets:[
          {
            label: 'Extra Income YTD',
            data: labels.map((currItem,index) =>  gains[index]),
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