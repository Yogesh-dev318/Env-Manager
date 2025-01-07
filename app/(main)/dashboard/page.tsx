import { Button } from "@/components/ui/button";
import EyeCatchingButton_v1 from "@/components/ui/interactive-hover-button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import SparklesText from "@/components/ui/sparkles-text";
import { StarsBackground } from "@/components/ui/stars-background";
import { Plus } from "lucide-react";

export default function Dashboard() {
  const projects = [
    {
      name: "Env-Manager",
      env: "3"
    },
    {
      name: "sfsdv",
      env: "3"
    },
    {
      name: "sfsdv",
      env: "3"
    },
    {
        name: "Env-Manager",
        env: "3"
    },
    {
        name: "sfsdv",
        env: "3"
    },
    {
        name: "sfsdv",
        env: "3"
    }
  ];

  return (
    <div className="">
      <ShootingStars />
      <StarsBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
            <div className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
              <SparklesText text="Dashboard" />
            </div>
          
          <Button 
            variant="outline" 
            className="group relative overflow-hidden border-2 border-blue-500 hover:border-blue-400 rounded-full px-6 py-2 bg-white/50 dark:bg-slate-900/50"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 transform group-hover:translate-x-full bg-blue-500 opacity-10"></span>
            <Plus className="w-5 h-5 mr-2 inline-block text-blue-500" />
            <span className="font-semibold text-blue-500">Add Project</span>
          </Button>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative z-10" >
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative z-10 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {project.env} Environments
                  </p>
                </div>
                
                <EyeCatchingButton_v1 className="min-w-[100px] pointer">
                  View
                </EyeCatchingButton_v1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}