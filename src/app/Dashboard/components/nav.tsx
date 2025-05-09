
import { 
    Home, 
    CreditCard, 
    Goal, 
    RefreshCw, 
    Bell, 
    Ticket, 
    BarChart2, 
    Settings, 
    ChevronDown, 
    ChevronRight, 
    LogOut,
    BellDot,
    MailPlus,
    Download
  } from "lucide-react";
import Image from "next/image";
export default function Nav(){
    return(
        <>
        <div className="flex justify-end gap-5 py-2 mb-2 px-3 items-center">
            <BellDot size={20}/>
            <MailPlus size={20}/>
               <Image
                    src="/charlieGreen.jpg"
                    alt="User Image"
                    width={30}
                    height={40}
                    className="rounded-full"
                      />
            <span>Alinur</span>
        </div>
        <div className="flex justify-between mb-2">
            <div>
            <span className="text-2xl font-semibold">Welcome Alinur!!</span>
            <div>
            <span className="text-gray-400">Welcome to your dashboard</span>

            </div>
            </div>
          <div>
          <button className="bg-black text-white px-4 py-2 flex gap-2 cursor-pointer">
                <span><Download size={20}/></span>
                Export</button>
          </div>
        </div>
        </>
    )
}