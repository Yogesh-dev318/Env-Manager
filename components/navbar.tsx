import Link from "next/link";
import ThemeButton from "./theme-button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import EyeCatchingButton_v1 from "./ui/interactive-hover-button";
import checkUser from "../app/action/checkuser"
const Navbar=async()=>{
    // const loggedInuser=await checkUser();
    // console.log(loggedInuser)
        return(
        <div className="h-24 w-screen relative z-10">
            <div className="flex flex-row justify-between items-center">
                <Link href={"/"} className="pointer">
                <h1 className="text-blue-500 dark:text-blue-500 font-bold text-3xl  m-5">Env-Manager</h1>
                </Link>
                <div className="flex flex-row justify-center items-center">
                    <div className="mt-1">
                    <SignedOut>
                    <SignInButton>
                        <EyeCatchingButton_v1>LogIn</EyeCatchingButton_v1>
                    </SignInButton>
                    </SignedOut>
                    <SignedIn>
                    <UserButton appearance={{
                        elements: {
                            avatarBox: "w-10 h-10",
                        },
                    }}/>
                    </SignedIn>
                    </div>
                    <div>
                    <ThemeButton/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Navbar;