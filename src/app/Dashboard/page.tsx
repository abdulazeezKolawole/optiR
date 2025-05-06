import Image from "next/image";
import Navbar from "./components/Navbar";
import Nav from "./components/nav";
import TransactionCard from "./components/CardSection";

export default function Dashboard() {
  return (
    <div className="bg-[#DCE3EB] h-screen flex">
      {/* Sidebar */}
      <div className="w-1/6">
      <div className="dashboard h-full">
     <Navbar/>
      </div>
      </div>

      {/* Main content */}
      <div className="w-5/6 p-6">
        <div>
            <Nav/>
            <div className="border">
                <TransactionCard/>
            </div>
        </div>
      </div>
    </div>
  );
}
