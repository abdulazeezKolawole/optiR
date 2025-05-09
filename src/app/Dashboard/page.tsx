import Image from "next/image";
import Navbar from "./components/Navbar";
import Nav from "./components/nav";
import TransactionCard from "./components/CardSection";
import CustomLineMarks from "./components/TransactionChart";
import TransactionHistory from "./components/TransactionHistory";
import IncomeChart from "./components/IncomeChart";

export default function Dashboard() {
  return (
    <div className="bg-[#DCE3EB] min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/6 min-h-screen bg-white">
      <div className="dashboard min-h-screen">
         <Navbar/>
      </div>
      </div>

      {/* Main content */}
      <div className="w-5/6  p-6">
        <div>
            <Nav/>
           <div className="flex gap-4 justify-between">
           <div className=" py-2 flex-1 border">
               <div className=" mb-4">
               <TransactionCard/>
               </div>

                <div className="mb-2">
                <CustomLineMarks/>

                </div>
                <div className="">
                <TransactionHistory/>

                </div>
            </div>
            <div className="flex-1 flex border gap-3">
              <div className="flex-1">
                <IncomeChart/>
              </div>
              <div className="flex-1">
                <IncomeChart/>
              </div>
             

             
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
