'use client';

// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';

// // Styled components for labels
// const StyledCenterText = styled('text')(({ theme }) => ({
//   textAnchor: 'middle',
//   dominantBaseline: 'central',
//   fontSize: 12,
//   fontWeight: 400,
//   fill: '#6B7280', // text-gray-500
// }));

// const StyledCenterPercentage = styled('text')(({ theme }) => ({
//   textAnchor: 'middle',
//   dominantBaseline: 'central',
//   fontSize: 24,
//   fontWeight: 600,
//   fill: '#111827', // text-gray-900
// }));

// const StyledCategoryText = styled('text')(({ theme }) => ({
//   textAnchor: 'middle',
//   fontSize: 12,
//   fill: '#374151', // text-gray-700
// }));

// const StyledCategoryPercentage = styled('text')(({ theme }) => ({
//   textAnchor: 'middle',
//   fontSize: 12,
//   fontWeight: 500,
//   fill: '#111827', // text-gray-900
// }));

// // Center label component
// function PieCenterLabel({ totalExpense, x, y }) {
//   return (
//     <g>
//       <StyledCenterText x={x} y={y - 12}>
//         Total Expense
//       </StyledCenterText>
//       <StyledCenterText x={x} y={y + 6}>
//         this Month
//       </StyledCenterText>
//       <StyledCenterPercentage x={x} y={y + 30}>
//         {totalExpense.toFixed(1)} %
//       </StyledCenterPercentage>
//     </g>
//   );
// }

// // Category label component
// function CategoryLabel({ label, percentage, x, y, labelOffset }) {
//   return (
//     <g>
//       <StyledCategoryText x={x} y={y}>
//         {label}
//       </StyledCategoryText>
//       <StyledCategoryPercentage x={x} y={y + labelOffset}>
//         {percentage}%
//       </StyledCategoryPercentage>
//     </g>
//   );
// }


// export default function ExpenseTracker() {
//   const [activeTab, setActiveTab] = useState('expense');
  
//   // Expense data with colors
//   const expenseData = [
//     { id: 0, value: 30.3, label: 'Grocery', color: '#C6B6FF' },
//     { id: 1, value: 20.5, label: 'Housing', color: '#7EEAF2' },
//     { id: 2, value: 8.5, label: 'Education', color: '#F7E26B' },
//     { id: 3, value: 5.9, label: 'Travel', color: '#F74DD7' }
//   ];

//   // Calculate total percentage
//   const totalExpensePercentage = expenseData.reduce((sum, item) => sum + item.value, 0);

//   // Chart size and positioning
//   const size = {
//     width: 400,
//     height: 300,
//     margin: { top: 10, right: 10, bottom: 10, left: 10 }
//   };
  
//   const PieChartWithLabels = () => {
//     const { width, height, left, top } = useDrawingArea();
//     const centerX = left + width / 2;
//     const centerY = top + height / 2;
    
//     return (
//       <>
//         <PieCenterLabel 
//           totalExpense={totalExpensePercentage} 
//           x={centerX} 
//           y={centerY} 
//         />
        
//         {/* Education label - top left */}
//         <CategoryLabel 
//           label="Education" 
//           percentage={expenseData[2].value} 
//           x={centerX - 90} 
//           y={centerY - 70} 
//           labelOffset={16} 
//         />
        
//         {/* Grocery label - top right */}
//         <CategoryLabel 
//           label="Grocery" 
//           percentage={expenseData[0].value} 
//           x={centerX + 90} 
//           y={centerY - 70} 
//           labelOffset={16} 
//         />
        
//         {/* Housing label - bottom left */}
//         <CategoryLabel 
//           label="Housing" 
//           percentage={expenseData[1].value} 
//           x={centerX - 90} 
//           y={centerY + 70} 
//           labelOffset={16} 
//         />
        
//         {/* Travel label - bottom right */}
//         <CategoryLabel 
//           label="Travel" 
//           percentage={expenseData[3].value} 
//           x={centerX + 90} 
//           y={centerY + 70} 
//           labelOffset={16} 
//         />
        
//       </>
//     );
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
//       {/* Tabs */}
//       <div className="flex justify-center space-x-16 mb-8">
//         <button
//           className={`text-xl font-medium ${activeTab === 'income' ? 'text-black' : 'text-gray-400'}`}
//           onClick={() => setActiveTab('income')}
//         >
//           Income
//         </button>
//         <button
//           className={`text-xl font-medium ${activeTab === 'expense' ? 'text-black' : 'text-gray-400'}`}
//           onClick={() => setActiveTab('expense')}
//         >
//           Expense
//         </button>
//       </div>

//       {/* Chart container */}
//       <div className="relative h-64 flex justify-center border-red-600">
//         <PieChart
//           series={[
//             {
//               data: expenseData,
//               innerRadius: 60,
//               outerRadius: 80,
//               paddingAngle: 0,
//               cornerRadius: 0,
//               startAngle: 40,
//               endAngle: 400,
//               highlightScope: { faded: 'global', highlighted: 'item' },
//               faded: { innerRadius: 60, outerRadius: 80, color: 'gray' },
//             },
//           ]}
//           colors={expenseData.map(item => item.color)}
//           slotProps={{
//             legend: { hidden: true }
//           }}
//           {...size}
//         >
//           <PieChartWithLabels />
//         </PieChart>
//       </div>
//     </div>
//   );
// }

// // Add missing import that was in the previous code
// import { useState } from 'react';


import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 200,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>Center label</PieCenterLabel>
    </PieChart>
  );
}
