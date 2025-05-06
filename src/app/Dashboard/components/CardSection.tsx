
import Image from "next/image"

export default function TransactionCard(){
    return(
        <>
        <div>
               <Image
                        src="/atm-card.png"
                        alt="Transaction Card"
                        width={300}
                        height={300}
                        className=""
                      />
        </div>

        </>
    )
}