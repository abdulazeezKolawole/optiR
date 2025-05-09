"use client";


import { LineChart } from '@mui/x-charts/LineChart';


const margin = { right: 24 };
const uData = [20000, 18500, 26500, 19700, 28800, 24400, 35700, 25400, 22540, 30000,23400, 37800];
const pData = [26400, 30398, 35660, 31860, 27800, 39800, 49300, 32540, 35600, 37800, 37000,45000];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export default function CustomLineMarks() {
  return (
   <div className='bg-white p-3 border rounded-2xl'>
    <p>Transaction Insights</p>
     <LineChart
      height={220}
      
      series={[
        
        {
          data: pData,
          label: 'pv',
          shape: 'circle',
          color:'#4AFFF4',
          showMark: ({ index }) => index % 6 === 0,

         
        },
        {
          data: uData,
          label: 'uv',
          shape: 'circle',
          color: '#654DF4',
          showMark: ({ index }) => index % 9 === 0
        },
      ]}
      
      yAxis={[{ width: 50 }]}
      margin={margin}
      xAxis={[
        {
          scaleType: 'point',
          data: xLabels,
        },
      ]}
      grid={
        {
            horizontal: true,
        }
      }
    />
   </div>
  );
}