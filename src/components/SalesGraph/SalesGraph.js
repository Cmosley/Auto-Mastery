import React from 'react';
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Net Sales: $',
      data: [7425, 5208, 6388, 3804, 4510, 6525, 3215 ],
      borderColor: '#fff',
      backgroundColor: "rgba(255,255,255,0.4)",
    },
  ],
};

const LineChart = () => (
  <>
    <Line 
    data={data} 
    options={{
      legend: {
        display: false,
      },
      tooltips: {
        mode: "x-axis",
        xPadding: 20,
        yPadding: 10,
        displayColors: false,
      },
      hover: { mode: "label" },
      scales: {
          xAxes: [
            {
              scaleLabel: {
                show: true,
                labelString: "Month",
              },
              ticks: {
                fontColor: "#fff",
                fontStyle: 600,
              },
              gridLines: {
                color: "#fff",
                zeroLineColor: "#fff",
                lineWidth: 1,
              },
            },
          ],
          yAxes: [{ display: false }],
        },
    }
    } />
  </>
);

export default LineChart;

