"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton"
import EyeCatchingButton_v1 from "@/components/ui/interactive-hover-button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import SparklesText from "@/components/ui/sparkles-text";
import { StarsBackground } from "@/components/ui/stars-background";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import addproject, { getprojects } from "../../action/addproject"
import Link from "next/link";
type Project = {
  id: string;
  
  name: string;
  env?: string; // Made optional since it might not come from API
}

export default function Dashboard() {
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await getprojects();
        
        if (Array.isArray(response)) {
          setProjects(response)
        } 
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);
  

  const handleAddProject = async() => {
    // Handle adding new project here
    console.log("Adding project:", projectName);
    await addproject(projectName);
    setProjectName("");
    const updatedProjects = await getprojects();
    if (Array.isArray(updatedProjects)) {
      setProjects(updatedProjects); // Update the state with the new list
    }
  };
  if(isLoading){
    return(
      <div className="">
      <ShootingStars />
      <StarsBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            <SparklesText text="Dashboard" />
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="group relative overflow-hidden border-2 border-blue-500 hover:border-blue-400 rounded-full px-6 py-2 bg-white/50 dark:bg-slate-900/50"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 transform group-hover:translate-x-full bg-blue-500 opacity-10"></span>
                <Plus className="w-5 h-5 mr-2 inline-block text-blue-500" />
                <span className="font-semibold text-blue-500">Add Project</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-y-4 py-4">
                <Input
                  id="projectName"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full"
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Link href={"/dashboard"}>
                  <Button type="button" onClick={handleAddProject}>
                    Add Project
                  </Button>
                  </Link>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </header>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative z-10" >
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
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
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="group relative overflow-hidden border-2 border-blue-500 hover:border-blue-400 rounded-full px-6 py-2 bg-white/50 dark:bg-slate-900/50"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 transform group-hover:translate-x-full bg-blue-500 opacity-10"></span>
                <Plus className="w-5 h-5 mr-2 inline-block text-blue-500" />
                <span className="font-semibold text-blue-500">Add Project</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-y-4 py-4">
                <Input
                  id="projectName"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full"
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Link href={"/dashboard"}>
                  <Button type="button" onClick={handleAddProject}>
                    Add Project
                  </Button>
                  </Link>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </header>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-lg font-semibold text-slate-600 dark:text-slate-300">
              No projects found. Add your first project to get started!
            </p>
            <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="group relative overflow-hidden border-2 border-blue-500 hover:border-blue-400 rounded-full px-6 py-2 bg-white/50 dark:bg-slate-900/50"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 transform group-hover:translate-x-full bg-blue-500 opacity-10"></span>
                <Plus className="w-5 h-5 mr-2 inline-block text-blue-500" />
                <span className="font-semibold text-blue-500">Add Project</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-y-4 py-4">
                <Input
                  id="projectName"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full"
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Link href={"/dashboard"}>
                  <Button type="button" onClick={handleAddProject}>
                    Add Project
                  </Button>
                  </Link>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative z-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative z-10 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-500">
                      {project.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {project.env || "No"} Environment(s)
                    </p>
                  </div>
                  <EyeCatchingButton_v1 className="min-w-[100px] pointer">
                    View
                  </EyeCatchingButton_v1>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}