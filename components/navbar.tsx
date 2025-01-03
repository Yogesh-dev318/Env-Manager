import Link from "next/link";
import ThemeButton from "./theme-button";

const Navbar=()=>{
    return(
        <div className="h-24 w-screen relative z-10">
            <div className="flex flex-row justify-between items-center">
                <Link href={"/"} className="pointer">
                <h1 className="text-blue-500 dark:text-blue-500 font-bold text-3xl  m-5">Env-Manager</h1>
                </Link>
                <div className="">
                    <ThemeButton/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;