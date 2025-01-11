"use client"
import SparklesText from "@/components/ui/sparkles-text";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { useParams } from 'next/navigation'
export default function(){
    const params=useParams()
    console.log(params.id)

    return(
    <div>
        <ShootingStars />
        <StarsBackground />
        <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            <SparklesText text="Env-Variables" />
          </div>
        </header>
        </div>
    </div>
    )
}