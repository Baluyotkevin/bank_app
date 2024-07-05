"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const accountName = accounts.map((account) => account.name)
    const balances = accounts.map((account) => account.currentBalance)

    const data = {
        datasets: [
            {
                label: 'Banks',
                data: balances,
                backgroundColor: ['#8BD8BC', '#33cc94', '#6ad4ad']
            }
        ],
        labels: accountName
    }

  return <Doughnut 
            data={data}
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
         />
}

export default DoughnutChart