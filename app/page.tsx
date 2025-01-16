import Navbar from "@/components/navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import EyeCatchingButton_v1 from "@/components/ui/interactive-hover-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
export default function Home() {
  const words = [
    {
      text: "Save",
    },
    {
      text: "Your",
    },
    {
      text: "Project's",
    },
    {
      text: "Enviroment",
    },
    {
      text: "Variables.",
      className: " underline text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <BackgroundBeams
       className="hidden md:block"/>
      <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute inset-0 z-0 block md:hidden"
          particleColor={"#FFFFFF"}
        />
        <div className="flex flex-col justify-center items-center h-[60vh] relative z-10">
          <div className="font-bold text-center">
          <TypewriterEffectSmooth words={words}/>
          </div>
          <p className="text-center text-xs md:text-xl lg:text-xl ">Save Your Project&apos;s Environment Variables here. It is a secure and <br/> efficient solution 
            for managing and storing environment variables.</p>
          <div className="flex flex-row mt-5">
            <Link href={"/dashboard"} className="m-5"><EyeCatchingButton_v1>View Dashboard</EyeCatchingButton_v1></Link>
            <Link href={"https://github.com/Yogesh-dev318/Env-Manager.git"} className="m-5"><EyeCatchingButton_v1><GithubIcon size={18} className="mr-2" />
            GitHub Repo</EyeCatchingButton_v1></Link>
          </div>
          <p className="opacity-50 text-xs sm:text-sm">Made By <a href="https://github.com/Yogesh-dev318" className="underline ">Yogesh Choudhary</a></p>
        </div>
    </div>
  );
}
