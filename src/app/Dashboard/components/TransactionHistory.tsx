"use client";


import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Transaction = {
  id: number;
  name: string;
  icon: string;
  date: string;
  amount: number;
  status: 'Complete' | 'Pending' | 'Cancel' | 'In Progress';
  direction: 'In' | 'Out';
};

export default function TransactionHistory() {
  const [timeFilter, setTimeFilter] = useState('This Week');
  
  const transactions: Transaction[] = [
    {
      id: 1,
      name: 'Netflix',
      icon: 'N',
      date: '13 Aug 2023',
      amount: 30.00,
      status: 'Complete',
      direction: 'Out'
    },
    {
      id: 2,
      name: 'Md Rakib',
      icon: 'MR',
      date: '05 Nov 2023',
      amount: 150.00,
      status: 'Pending',
      direction: 'In'
    },
    {
      id: 3,
      name: 'Amazon',
      icon: 'A',
      date: '08 Dec 2023',
      amount: 50.00,
      status: 'Cancel',
      direction: 'Out'
    },
    {
      id: 4,
      name: 'Mrs Zehra',
      icon: 'MZ',
      date: '01 Jan 2024',
      amount: 40.00,
      status: 'In Progress',
      direction: 'In'
    },
    {
      id: 5,
      name: 'Paypal',
      icon: 'P',
      date: '19 Feb 2024',
      amount: 30.00,
      status: 'Complete',
      direction: 'In'
    },
    {
      id: 6,
      name: 'Md Bashar',
      icon: 'MB',
      date: '21 Mar 2024',
      amount: 80.00,
      status: 'Complete',
      direction: 'Out'
    }
  ];

  const renderStatus = (status: Transaction['status']) => {
    switch (status) {
      case 'Complete':
        return <span className="text-blue-500">Complete</span>;
      case 'Pending':
        return <span className="text-gray-600">Pending</span>;
      case 'Cancel':
        return <span className="text-red-500">Cancel</span>;
      case 'In Progress':
        return <span className="text-green-500">In Progress</span>;
      default:
        return <span>{status}</span>;
    }
  };

  const renderIcon = (transaction: Transaction) => {
    let bgColor = 'bg-gray-200';
    
    if (transaction.name === 'Netflix') bgColor = 'bg-red-500 text-white';
    else if (transaction.name === 'Amazon') bgColor = 'bg-gray-800 text-white';
    else if (transaction.name === 'Paypal') bgColor = 'bg-blue-200';
    else if (transaction.name === 'Mrs Zehra') bgColor = 'bg-yellow-500 text-white';
    
    return (
      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${bgColor}`}>
        {transaction.icon}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h1 className=" font-semibold text-gray-800">Transaction History</h1>
        <div className="relative">
          <button 
            className="flex items-center text-gray-600 border border-gray-300 rounded-md px-4 py-2"
          >
            {timeFilter}
            <ChevronDown size={16} className="ml-2" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100">
                <td className="py-4 pr-4">
                  {renderIcon(transaction)}
                </td>
                <td className="py-4">
                  <div className="font-medium">{transaction.name}</div>
                  <div className="text-sm text-gray-500">{transaction.date}</div>
                </td>
                <td className="py-4 text-right font-medium">${transaction.amount.toFixed(2)}</td>
                <td className="py-4 text-right">{renderStatus(transaction.status)}</td>
                <td className="py-4 text-right font-medium">
                  {transaction.direction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}