import Navbar from "@/components/navbar";
import { ReactNode } from "react";
const RootLayout=({ children }: Readonly<{ children: ReactNode }>)=>{
    return(
        <main>
            <Navbar/>
            {children}
        </main>
    )
}
export default RootLayout;