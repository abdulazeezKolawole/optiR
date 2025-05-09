
import Image from "next/image"
import { Headset } from "lucide-react"

export default function TransactionCard(){
    return(
        <div className="flex gap-3">
        <div>
               <Image
                        src="/transactionCard.svg"
                        alt="Transaction Card"
                        width={300}
                        height={300}
                        className=""
                      />
        </div>
        <div className="bg-[#FFF5DC] p-2 rounded-2xl w-[50%]">
        <div className="flex gap-2 justify-end text-[14px]">
            <Headset size={20}/>
            <span>Help Line</span>
        </div>
        <div className=" items-center flex flex-col">
        <Image
        src="/support.png"
        alt="Help Line"
        width={130}
        height={100}
        />
        <p className="text-[#FF8100] text-2xl font-bold mb-2">WARNING</p>
        </div>
        <div className="text-center text-[14px]">
        <span className="block">We See Some Unusual </span>
        <span>Activity In our Account</span>
        </div>
        </div>

        </div>
    )
}