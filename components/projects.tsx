import Link from "next/link";
import EyeCatchingButton_v1 from "./ui/interactive-hover-button";
import { noofenv } from '@/app/action/addenv'; 
import { useState, useEffect } from 'react';

interface ProjectType {
    id: string;
    name: string;
    env?: string;
}

interface ProjectsProps {
    projects: ProjectType[];
}

const ProjectGrid: React.FC<ProjectsProps> = ({ projects }) => {
    const [envCounts, setEnvCounts] = useState<{[key: string]: number}>({});

    useEffect(() => {
        projects.forEach(async (project) => {
            const count = await noofenv(project.id);
            setEnvCounts(prev => ({
                ...prev,
                [project.id]: typeof count === 'number' ? count : 0
            }));
        });
    }, [projects]);

    return(
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
                      {envCounts[project.id] || "No"} Environment(s)
                    </p>
                  </div>
                  <Link href={`/env/${project.id}`}>
                  <EyeCatchingButton_v1 className="min-w-[100px] pointer">
                    View
                  </EyeCatchingButton_v1>
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
    )
}

export default ProjectGrid;