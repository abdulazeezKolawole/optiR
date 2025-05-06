
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
        <div className="flex justify-end gap-5 py-5 border">
            <BellDot size={20}/>
            <MailPlus size={20}/>
               <Image
                    src="/charlieGreen.jpg"
                    alt="Abstraction Graphic"
                    width={30}
                    height={30}
                    className=""
                      />
            <span>Alinur</span>
        </div>
        <div className="flex justify-between">
            <span className="text-2xl font-semibold">Welcome Alinur!!</span>
            <button className="bg-black text-white px-4 py-2">
                <span><Download size={20}/></span>
                Export</button>
        </div>
        </>
    )
}